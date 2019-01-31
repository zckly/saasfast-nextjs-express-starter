import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import Router from 'next/router'
import Link from 'next/link'
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {query: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    if (this.props.isLoggedIn) {
      //Fetch Data
    }
  }
  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.submitData(evt)
    }
  }
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="dashboard-page">
        <h2>Dashboard</h2>
        <input className="input-field" id='newQuery' onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" name="query" value={this.state.query} placeholder='Enter stuff here!' /> 
        <h3>Display some data here!</h3>

      </div>
    )
  }
}

export default SecureTemplate(Dashboard);