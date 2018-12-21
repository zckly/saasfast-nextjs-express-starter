import React from 'react';
import { deleteToken } from '../static/auth';
import Router from 'next/router';

export default class extends React.Component {
  componentDidMount () {
    deleteToken();
    Router.push('/');
  }
  render() {
    return null;
  }
}
