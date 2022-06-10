import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataProvider } from './store/DataContext';

import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
