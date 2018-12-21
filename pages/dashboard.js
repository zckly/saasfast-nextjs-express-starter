import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Router from 'next/router'
import {domain} from '../settings';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newQuery: '',
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewQuery = this.submitNewQuery.bind(this)

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
    }
  }
  render() {
    const items = this.state.data.map((x,i) =>
    (
      <Tr key={i}>
          <Td>{x.searchQuery}</Td>
          <Td>Yesterday</Td>
          <Td>{x.active ? 'Yes' : 'No'}</Td>
      </Tr>
    ))
    console.log('items', items)
    return (
      <div className="dashboard-page">
        
        <input className="input-field" id='newQuery' onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" name="newQuery" value={this.state.newQuery} placeholder="Enter a new query" /> 
        <br />
        <div className="newQueryButton button" onClick={this.submitNewQuery}>
          <span className="button__mask" />
          <span className="button__text">Add Query</span>
          <span className="button__text button__text--bis">+</span>
        </div>
        <div>Dashboard</div>
        <div className='table'>
          <Table>
              <Thead>
                  <Tr>
                      <Th>Query</Th>
                      <Th>Last item found</Th>
                      <Th>Active</Th>
                  </Tr>
              </Thead>
              <Tbody>
                {items}
              </Tbody>
            </Table>
        </div>
      </div>
    )
  }
}

export default SecureTemplate(Dashboard);