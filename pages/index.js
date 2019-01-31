import Link from 'next/link';
import Layout from '../components/Layout.js'
import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';


const Index = () => (
  <div className='home-page'>
    <div className="text-section home-text">
      <h1 className="title text-block">
      An all-in-one SaaS template.
      </h1>
      <h3 className='text-block'>
      Built on NextJS, Node, Express, and MongoDB.
      </h3>
    	<div className="text-block">
      Tired of going through the same development process anytime you want to create a new product or service?
      </div>
      <div className="text-block">
      We are too.
      </div>
      <div className="text-block">
      This kit will include everything you need to get up and running.
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

export default template(Index);