import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia esta línea
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importamos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();