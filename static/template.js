import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';
import '../stylesheets/empty.css';
import '../stylesheets/index.css';
import '../stylesheets/index-mobile.css';
import 'sweetalert2/src/sweetalert2.scss'
import 'semantic-ui-css/semantic.min.css'
export default Page => class Template extends React.Component {
  
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser ? await getTokenForBrowser() : await getTokenForServer(req);
    const pageProperties = await Page.getInitialProps && await Page.getInitialProps(req);
    return {
      ...pageProperties,
      loggedInUser,
      isLoggedIn: !!loggedInUser
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentDidMount() {
  	this.setState({
  		width: window.innerWidth,
  		isMobile: window.innerWidth <= 500
  	})
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return (
      <div id='app'>
      	<Head>
      	   <meta name="viewport" content="width=device-width,initial-scale=1" charSet="utf-8"/>
      	   <link href="https://fonts.googleapis.com/css?family=Space+Mono:700" rel="stylesheet"/>
      	   <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300" rel="stylesheet"/>
      	</Head>
        <Header { ...this.state } />
        <main id='page-wrap'>
          <Page className='page-wrap' { ...this.state } />
        </main>
      </div>
    )
  }
}
