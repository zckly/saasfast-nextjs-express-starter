import Link from 'next/link';
import Layout from '../components/Layout.js'
import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';


const Features = ({ isLoggedIn }) => (
  <div className='home-page'>
    <div className="text-section">
    	<div className="title text-block">
      Heres how it works
      </div>
      <div className="text-block">
      1. Enter a search query for us to monitor.
      </div>
      <div className="text-block">
      2. Sit back and relax as we monitor clothing marketplaces.
      </div>
      <div className='text-block'>
      3. Get an email whenever we find a new listing.
      </div>
    </div>
    <Link href="/signup">
      <div className='go'>
      	<div className="button">
          <span className="button__mask" />
          <span className="button__text">Sign Up</span>
          <span className="button__text button__text--bis">Go</span>
        </div>
      </div>
    </Link>


  </div>
)



export default template(Features);