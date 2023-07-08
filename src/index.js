import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0nZcmhw_XEpXnefw0w_HmfjJ5dGC6iQ",
  authDomain: "coderhouse-weedexpertos.firebaseapp.com",
  projectId: "coderhouse-weedexpertos",
  storageBucket: "coderhouse-weedexpertos.appspot.com",
  messagingSenderId: "334141765426",
  appId: "1:334141765426:web:93983274f166ca42f2492b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

