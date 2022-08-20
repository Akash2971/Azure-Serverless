// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import authentication from '@kdpw/msal-b2c-react';
import App from './App';

authentication.initialize({
    instance: 'https://akashazb2c.b2clogin.com/tfp/', 
    tenant: 'akashazb2c.onmicrosoft.com',
    signInPolicy: 'B2C_1_SignUpSignIn',
    applicationId: '5713abb3-484b-403c-885e-ac483530ca31',
    cacheLocation: 'sessionStorage',
    scopes: ['profile', 'openid'],
    redirectUri: 'https://akashazstorageaccountv2.z30.web.core.windows.net/',
    validateAuthority: false
});

authentication.run(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});