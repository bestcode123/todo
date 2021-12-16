import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';

import Auth0Login from './components/auth0/login';
import Auth0Logout from './components/auth0/logout';

ReactDOM.render(
  <div id='root2'>
    <Auth0Provider
      domain="burgerapps.eu.auth0.com"
      clientId="m4GkFJ0l9ethoss2ARyLnoOyKqwdul5T"
      redirectUri={window.location.origin}
    >
      <Auth0Login />
      <br></br><br></br>
      <Auth0Logout />
    </Auth0Provider>
  </div>,
  document.getElementById('root')
);
