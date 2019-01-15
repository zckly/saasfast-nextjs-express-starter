import Link from 'next/link';
import Layout from '../components/Layout.js'
import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';


const Features = ({ isLoggedIn }) => (
  <div className='home-page'>
    <div className="text-section">
    	<h1 className="title text-block">
      Here's how it works 
      </h1>
      <div className="text-block">
      1. Type in something you want us to watch for
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
      	<div className="index-button button">
          <span className="button__mask" />
          <span className="button__text">Sign Up</span>
          <span className="button__text button__text--bis">Sign Up</span>
        </div>
      </div>
    </Link>


  </div>
)



export default template(Features);