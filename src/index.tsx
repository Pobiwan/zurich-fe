import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserStore } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={UserStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


