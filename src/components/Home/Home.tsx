// src/components/Home.tsx
import React from 'react';
import Hero from '../common/Hero';
import Card from '../common/Card';
import VideoCard from '../common/VideoCard';
import Accordion from '../common/Accordion';
import { Link } from 'react-router-dom'; // Import Link
import Button from '../common/Button';

const Home: React.FC = () => {
  return (
    <>
      <Hero buttonLink="/contact" />

      <Card title="About Me">
        <p>I'm a UX Magician. My Best Trick? Making Complex Problems Vanish...</p>
      </Card>

      <VideoCard
        title="Project Demo: E-commerce Redesign"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        description="A walkthrough of a recent project..."
      />

      <Card title="Skills">
        <ul>
          {/* ... your skills list ... */}
        </ul>
      </Card>

      <Card title="Projects">
        <p>Check out some of my recent work:</p>
        <Button variant='primary'><Link to="/projects" style={{textDecoration: 'none', color: 'inherit'}}>View Projects</Link></Button> {/* Link to Projects page */}
      </Card>

      <Accordion title="Frequently Asked Questions">
        {/* ... your FAQ content ... */}
      </Accordion>
    </>
  );
};

export default Home;