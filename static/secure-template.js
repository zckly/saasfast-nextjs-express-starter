import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { getTokenForBrowser, getTokenForServer } from '../static/auth';
import '../stylesheets/empty.css';
import '../stylesheets/index.css';
import '../stylesheets/index-mobile.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
export default Page => class Template extends React.Component {
  
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser ? await getTokenForBrowser() : await getTokenForServer(req);
    const pageProperties = await Page.getInitialProps && await Page.getInitialProps(req);
    console.log('2', loggedInUser)
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
    if (!this.props.isLoggedIn) {
      return (
        <div id='app'>
          <Head>
             <meta name="viewport" content="width=device-width,initial-scale=1"/>
             <link href="https://fonts.googleapis.com/css?family=Space+Mono:700" rel="stylesheet"/>
             <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300" rel="stylesheet"/>
          </Head>
          <Header { ...this.state } />
          This page is only available to logged in users! Please login
        </div>
      )
    }
    return (
      <div id='app'>
        <Head>
           <meta name="viewport" content="width=device-width,initial-scale=1"/>
           <link href="https://fonts.googleapis.com/css?family=Space+Mono:700" rel="stylesheet"/>
           <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300" rel="stylesheet"/>
        </Head>
        <Header { ...this.state } />
        <Page className='page-wrap' { ...this.state } />
      </div>
    )
  }
}
