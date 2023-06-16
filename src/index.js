import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styles = { container: { fontFamily: 'Arial' } };
root.render(
  <React.StrictMode>
    <div style={styles.container}>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
