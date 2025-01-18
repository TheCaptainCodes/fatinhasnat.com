import React from 'react';
import ReactDOM from 'react-dom';

import SpeedInsights from '@vercel/speed-insights';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
  document.getElementById('root'),
);
