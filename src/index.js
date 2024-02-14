import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

//REACT_APP_BASE_URL
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`;
axios.defaults.withCredentials = true;
const TOKEN = localStorage.getItem("token");
if (TOKEN) {
  axios.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
