import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

ReactDOM.render(
  <div id="ReactContainer">
      <CssBaseline />
      <App />
  </div>,
  document.querySelector('#root'),
);