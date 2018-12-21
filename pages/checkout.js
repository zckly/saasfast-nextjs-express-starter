import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import {withRouter} from 'next/router'
import Router from 'next/router'
import {domain} from '../settings';
import { saveToken } from '../static/auth.js';

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
    fetch(domain + '/new_query', {
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
        <div>We will monitor</div>
        <br />
        <div>Heroine</div>
        <div>Grailed</div>
        <div>Ebay</div>
        <div>Yahoo Auctions</div>
        <div>Rakuten</div>
        <br/>
        <div>
        for "{searchQuery}"
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
          <span className="button__text">yeet</span>
          <span className="button__text button__text--bis">yeet</span>
        </div>
      </div>
    )
  }
}

export default SecureTemplate(withRouter(Checkout));