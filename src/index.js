import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/main/Main';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import {teamsData} from "./components/staticData/staticData.js"

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <App data={teamsData}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
