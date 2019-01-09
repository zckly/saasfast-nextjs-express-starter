import Link from 'next/link';
import Layout from '../components/Layout.js'
import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';


const About = ({ isLoggedIn }) => (
  <div className='home-page'>
    <div className="text-section">
      <h1 className="title text-block">
      About
      </h1>
      <div className="text-block">
      Heatseeker is a tool to help people find rare pieces from almost every marketplace on the web.
	  </div>
	  <div className="text-block">
	  Whenever a new item pops up we'll send you an email with a link!
	  </div>
	  <div className="text-block">
	  Heatseeker is in beta now, which means its completely free.
	  </div>
	  <div className="text-block">
	  Please email me at hello@heatseeker.io if you have any questions or suggestions for the site!
	  </div>
	  <div className="text-block">
	  - Zack
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



export default template(About);