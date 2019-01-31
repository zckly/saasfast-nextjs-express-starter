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
      saasfast is a starter kit for anyone who wants to get their app or service up and running.
	    </div>
      <div className="text-block">
      Server-side rendered React for high performance and superb SEO.
      </div>
      <div className="text-block">
      Extensible and flexible API with Node, Express, and MongoDB
      </div>
    </div>
    {isLoggedIn ? (
    <Link href="/dashboard">
      <div className='go'>
        <div className="index-button button">
          <span className="button__mask" />
          <span className="button__text">Dashboard</span>
          <span className="button__text button__text--bis">Dashboard</span>
        </div>
      </div>
    </Link>
    ) : (
    <Link href="/signup">
      <div className='go'>
        <div className="index-button button">
          <span className="button__mask" />
          <span className="button__text">Sign Up</span>
          <span className="button__text button__text--bis">Sign Up</span>
        </div>
      </div>
    </Link>
    )}

  </div>
)



export default template(About);