import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EcontextProvider from './store/EcontextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EcontextProvider>
    <App />
  </EcontextProvider>
);

