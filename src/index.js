import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByI8hEvRhYLce93mOtWMMrF-jVWewjNxs",
  authDomain: "casafix-norte.firebaseapp.com",
  projectId: "casafix-norte",
  storageBucket: "casafix-norte.appspot.com",
  messagingSenderId: "1005733940299",
  appId: "1:1005733940299:web:fd1728c0ab3bf174cb91ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
 
    
    
    <App />
  
  
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
