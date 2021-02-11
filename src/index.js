import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const storage = store();

setTimeout(function() {
  storage.dispatch({
    type: 'sfdds'
  });
}, 1000)

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById('root')
);