// src/components/Home/Home.tsx
import React from 'react';
import Hero from '../common/Hero';
import Card from '../common/Card';
import VideoCard from '../common/VideoCard';
import Accordion from '../common/Accordion';
//No Styles needed at the moment.

const Home: React.FC = () => {
  return (
    <> {/* Use a React Fragment to avoid adding an extra <div> */}
      <Hero buttonLink="#contact" />

      <Card title="About Me">
        <p>I'm a UX Magician. My Best Trick? Making Complex Problems Vanish. I'm a passionate writer with a focus on creating user-centered and visually appealing digital experiences. I have experience in user research, wireframing, prototyping, interaction design, and front-end development.  My goal is to create products that are not only beautiful but also intuitive and easy to use.</p>
      </Card>

      <VideoCard
        title="Project Demo: E-commerce Redesign"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL!
        description="A walkthrough of a recent project..."
      />

      <Card title="Skills">
        <ul>
          <li>User Research</li>
          <li>Wireframing & Prototyping</li>
          <li>UI Design</li>
          <li>Interaction Design</li>
          {/* ... other skills ... */}
        </ul>
      </Card>

      <Card title="Projects">
        <Card title="Project 1: Mobile App Design">
          <p>Designed a mobile app for...</p>
        </Card>
        <Card title="Project 2: Website Redesign">
          <p>Redesigned the website for...</p>
        </Card>
      </Card>

      <Accordion title="Frequently Asked Questions">
        <div>
          <p><strong>Q:</strong> What's your design process?</p>
          <p><strong>A:</strong> My design process typically involves...</p>
          {/* ... other FAQs ... */}
        </div>
      </Accordion>
    </>
  );
};

export default Home;