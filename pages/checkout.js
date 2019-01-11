import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import {withRouter} from 'next/router'
import Router from 'next/router'
import {domain} from '../settings';
import { saveToken } from '../static/auth.js';
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.submitNewQuery = this.submitNewQuery.bind(this)
  }
  submitNewQuery (evt) {
    //1. make sure no error
    //2. save user id to cookie
    evt.preventDefault()
    //Send form data to server
    //Copy of state
    const stateCopy = {...this.state}
    stateCopy['user'] = this.props.loggedInUser
    stateCopy['newQuery'] = this.props.router.query.q
    fetch(this.props.origin + '/new_query', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(stateCopy)
    })
    .then(response => response.json())
    .then((json) => {
      if (json['success']) {
        Router.push({pathname: '/dashboard'})
      } else {
        console.log(json['message'])
      }
    })

  }
  render() {
    const searchQuery = this.props.router.query.q

    return (
      <div className="checkout-page">
        <h2>We will monitor</h2>
        <br />
        <h5>Heroine</h5>
        <h5>Grailed</h5>
        <h5>Ebay</h5>
        <h5>Yahoo Auctions</h5>
        <h5>Rakuten</h5>
        <br/>
        <div>
        for "{titleCase(searchQuery)}"
        </div>
        <br/>
        <div>
          for free :)
        </div>
        <br/>
        <div>
          Cool?                                   
        </div>
        <br/>
        <div className="button" onClick={this.submitNewQuery}>
          <span className="button__mask" />
          <span className="button__text">Yes</span>
          <span className="button__text button__text--bis">Yes</span>
        </div>
      </div>
    )
  }
}

export default SecureTemplate(withRouter(Checkout));