// Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> arround our application in src/index.js.
// Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/config/configstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);