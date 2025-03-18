// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router> {/* Wrap App with Router */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);
