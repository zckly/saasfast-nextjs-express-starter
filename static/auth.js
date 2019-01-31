import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';

function saveToken(token) {
  Cookie.set('user', token, { expires: 21 });
};

function deleteToken() {
  Cookie.remove('user');
};

async function verifyToken(token) {
  if (token) {
    return true
  }
  return false
}

async function getTokenForBrowser() {
  return Cookie.getJSON('user');
}

async function getTokenForServer(req) {
  if (req.headers.cookie) {
    const jwtFromCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('user='));
    if (!jwtFromCookie) {
      return undefined;
    }
    const token = jwtFromCookie.split('=')[1];
    const validToken = await verifyToken(token);
    if (validToken) {
      return token;
    } else {
      return undefined;
    }
  }
}

export {
  saveToken,
  deleteToken,
  getTokenForBrowser,
  getTokenForServer,
  verifyToken
};