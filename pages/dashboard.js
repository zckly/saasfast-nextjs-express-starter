import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import Router from 'next/router'
import Link from 'next/link'
import {domain} from '../settings';
import { Grid, Card, Button, Image, Modal } from 'semantic-ui-react'
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newQuery: '',
      data: [],
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewQuery = this.submitNewQuery.bind(this)
    this.turnOnAlert = this.turnOnAlert.bind(this)
    this.turnOffAlert = this.turnOffAlert.bind(this)

  }
  componentDidMount() {
    if (this.props.isLoggedIn) {
      fetch(domain + '/fetch_dashboard', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({user:this.props.loggedInUser})
      })
      .then((response) => response.json())
      .then((data) => {
        if (data['success']) {
          this.setState({data: data['data']})
        } else {
          this.setState({data: []})
        }
      })
    }
    
  }
  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.submitNewQuery(evt)
    }
  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  submitNewQuery (evt) {
    evt.preventDefault()
    if (this.state.newQuery.length) {
      Router.push(`/checkout?q=${this.state.newQuery}`, `/checkout/${this.state.newQuery}`)
    } else {

    }
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  turnOnAlert (id) {
    console.log(id)
    fetch(domain + '/queries/activate', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({query_id:id, user:this.props.loggedInUser})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data['success']) {
        this.setState({data: data['data'], open: false})
      } else {
        console.log('error when activating query!')
        this.setState({ open: false })
      }
    })
  }
  turnOffAlert (id) {
    console.log(id)
    fetch(domain + '/queries/deactivate', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({query_id:id, user:this.props.loggedInUser})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data['success']) {
        this.setState({data: data['data'], open: false})
      } else {
        console.log('error when deactivating query!')
        this.setState({ open: false })
      }
    })
  }
  render() {
    const {open, data} = this.state
    var items = []
    for (var i = 0; i < data.length; i++) {
      (function(that, i) {
        let x = data[i]
        items.push(
        <Grid.Column key={x._id} >
          <Card href={x.recent_results.length ? x.recent_results[0]['listing_link'] : ''}>
            <Card.Content>
              <Image size='mini' floated='left' src={x.recent_results.length ? x.recent_results[0].image_link : 'http://react.semantic-ui.com/images/wireframe/image.png'} />
              <Card.Header>{titleCase(x.searchQuery)}</Card.Header>
              <Card.Meta>Last item found</Card.Meta>
              <Card.Description>
                <h5>{x.recent_results.length ? x.recent_results[0]['name'] : ''}</h5>
                {x.recent_results.length ? (
                  <div>
                    <h4>
                    {~x.recent_results[0].new_price ? '$' + x.recent_results[0].new_price : '$' + x.recent_results[0].original_price}
                    </h4>
                    <h5>
                    {'Found on ' + x.recent_results[0].source}
                    </h5>
                  </div>) : (<div><h3>No searches yet!</h3><br/><br/><br/><br/><br/>
                </div>)}
            </Card.Description>
            </Card.Content>

          </Card>
        </Grid.Column>
      )
      })(this, i);
    }
    
    return (
      <div className="dashboard-page">
        
        <input className="input-field" id='newQuery' onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" name="newQuery" value={this.state.newQuery} placeholder="Raf Simons Closer Parka" /> 
        <br />
        <div className="newQueryButton button" onClick={this.submitNewQuery}>
          <span className="button__mask" />
          <span className="button__text" id="query_button">Monitor Item</span>
        </div>
        <div className='table'>
          <Grid stackable relaxed columns={3}>
            {items}  
          </Grid>
        </div>
      </div>
    )
  }
}

export default SecureTemplate(Dashboard);