// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from './components/common/Layout';
import Home from './components/Home';
import About from './components/About'; // Import the new components
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

export default App;