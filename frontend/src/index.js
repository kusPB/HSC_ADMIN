import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { AppProvider } from './components/context';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

