// src/App.tsx
import React from 'react';
import Layout from './components/common/Layout';
import Home from './components/Home'; // Import the Home component
import './App.css';

function App() {
  return (
    <Layout>
      <Home /> {/* Render the Home component */}
    </Layout>
  );
}

export default App;