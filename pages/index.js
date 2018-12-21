import Link from 'next/link';
import Layout from '../components/Layout.js'
import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';


const Index = ({ isLoggedIn }) => (
  <div className='home-page'>
    <div className="text-section">
  	<div className="text-block">
    Tired of constantly checking sites like Grailed and
    Yahoo Auctions for your favorite pieces?
    </div>
    <div className="text-block">
    Let Heatseeker do it for you.
    </div>
    <div className="text-block">
    It’ll monitor the top clothing auction sites and email you as soon as your top grails get listed.
    </div>
    </div>
    <Link href="/signup">
      <div className='go'>
      	<div className="index-button button">
          <span className="button__mask" />
          <span className="button__text">Sign Up</span>
          <span className="button__text button__text--bis">Go</span>
        </div>
      </div>
    </Link>


  </div>
)

Index.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default template(Index);