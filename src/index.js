import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import {teamsData} from "./components/staticData/staticData.js"
import Register from './components/registration/Register';
import FormApp from './components/form/FormApp';
import Donation from './components/donatPage/Donation';
import DonatPage from './components/donatPage/DonatPage';



ReactDOM.render(
  <React.StrictMode>
    <Router >
      <App data={teamsData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
