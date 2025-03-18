// src/App.tsx
import React from 'react';
import Button from './components/common/Button';
import Layout from './components/common/Layout/Layout'; // Import Layout
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Layout> {/* Wrap the content with the Layout component */}
      <h1>My Portfolio</h1>
      <Button onClick={handleClick} variant="primary">
        Click Me
      </Button>
      <Button variant="secondary">Another Button</Button>
      <Button type='submit'>Submit Button</Button>
    </Layout>
  );
}

export default App;
