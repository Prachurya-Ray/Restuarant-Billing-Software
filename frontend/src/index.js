import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Bars } from 'react-loader-spinner'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  /> */}

<GoogleOAuthProvider clientId="707819251923-ui2opemnvqu0lndo71dhh0sm2r91d4rh.apps.googleusercontent.com">

  <React.StrictMode>
   
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
  
  </>
);

