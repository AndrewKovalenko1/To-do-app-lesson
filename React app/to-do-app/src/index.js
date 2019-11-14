import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const rootDiv = document.getElementById('root');
ReactDOM.render((<BrowserRouter>
    <App />
  </BrowserRouter>), rootDiv);
