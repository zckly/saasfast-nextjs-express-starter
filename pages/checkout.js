import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
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
  handleChange = (e, { value }) => this.setState({ value })
  submitNewQuery (evt) {

  }
  render() {
    return (
      <div className="checkout-page">
        Checkout
      </div>
    )
  }
}

export default SecureTemplate(withRouter(Checkout));