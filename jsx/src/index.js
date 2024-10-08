import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('app value is');
console.log(App());
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
