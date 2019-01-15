import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import Router from 'next/router'
import Link from 'next/link'
import moment from 'moment'
import { Grid, Card, Button, Image, Modal, Divider } from 'semantic-ui-react'
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
function truncateString(str, len) {
  if (str.length > len)
    return str.substring(0,len)+'...';
 else
    return str;
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
      fetch(this.props.origin + '/fetch_dashboard', {
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
      Router.push(`/checkout?q=${encodeURIComponent(this.state.newQuery)}`, `/checkout/${encodeURIComponent(this.state.newQuery)}`)
    } else {

    }
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  turnOnAlert (id) {
    console.log(id)
    fetch(origin + '/queries/activate', {
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
    fetch(origin + '/queries/deactivate', {
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
        <Grid.Column textAlign='left' float='right' key={x._id} >
          <Card  href={x.recent_results.length ? x.recent_results[0]['listing_link'] : ''}>
            <Card.Content>
              <Image size='mini' floated='left' src={x.recent_results.length ? x.recent_results[0].image_link : 'http://react.semantic-ui.com/images/wireframe/image.png'} />
              <Card.Header>{titleCase(x.searchQuery)}</Card.Header>
              <Card.Description>
                <h5>{x.recent_results.length ? truncateString(x.recent_results[0]['name'], 42) : ''}</h5>
                {x.recent_results.length ? (
                  <div>
                    <h4>
                    {~x.recent_results[0].new_price ? '$' + x.recent_results[0].new_price : '$' + x.recent_results[0].original_price}
                    </h4>
                    <p>
                    {'Found on ' + x.recent_results[0].source + ' at'}
                    </p>
                    <p>
                    {moment(x.recent_results[0].found_time).format("dddd, MMMM Do, h:mm a")}
                    </p>
                  </div>) : (<div><h5>No items have been found yet</h5><br/><br/><br/><br/><br/>
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
        
        <input className="input-field" id='newQuery' onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" name="newQuery" value={this.state.newQuery} placeholder='Maison Margiela Tabi' /> 
        <br />
        <div className="newQueryButton button" onClick={this.submitNewQuery}>
          <span className="button__mask" />
          <span className="button__text" id="query_button">Monitor Item</span>
        </div>
        <Divider hidden/>
        <h2>My Items</h2>
        <div className='table'>
          <Grid stackable centered relaxed columns={3}>
            {items}  
          </Grid>
        </div>
      </div>
    )
  }
}

export default SecureTemplate(Dashboard);