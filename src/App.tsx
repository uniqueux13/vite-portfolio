// src/App.tsx
import React from 'react';
import Layout from './components/common/Layout';
import Hero from './components/common/Hero';
import Card from './components/common/Card';
import VideoCard from './components/common/VideoCard';
import Accordion from './components/common/Accordion';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero
        title="Welcome to My Portfolio"
        subtitle="Showcasing UX Design and Development"
        imageUrl="/images/hero-image.jpg" // Replace with actual path
      />

      <Card title="About Me">
        <p>I'm a passionate UX designer with a focus on creating user-centered and visually appealing digital experiences. I have experience in user research, wireframing, prototyping, interaction design, and front-end development.  My goal is to create products that are not only beautiful but also intuitive and easy to use.</p>
      </Card>

      <VideoCard
        title="Project Demo: E-commerce Redesign"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL!
        description="A walkthrough of a recent project where I redesigned the user interface and improved the user flow of an e-commerce website, resulting in a 20% increase in conversion rates."
      />

        <Card title="Skills">
            <ul>
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>UI Design</li>
                <li>Interaction Design</li>
                <li>HTML, CSS, JavaScript</li>
                <li>React</li>
                <li>Vite</li>
                <li>Accessibility (WCAG)</li>
            </ul>
        </Card>

        <Card title="Projects">
        {/*  Ideally, this would be a separate ProjectList component,
             but for this example, I'm keeping it simple.
             In a real project, you'd map over an array of project data.
        */}
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
          <p><strong>A:</strong> My design process typically involves user research, ideation, wireframing, prototyping, testing, and iteration. I believe in a human-centered approach, always keeping the user's needs at the forefront.</p>
          <p><strong>Q:</strong> What tools do you use?</p>
          <p><strong>A:</strong> I'm proficient in Figma, Adobe XD, Sketch, InVision, HTML, CSS, JavaScript, and React.</p>
          <p><strong>Q:</strong> Are you available for freelance work?</p>
          <p><strong>A:</strong> Yes, I'm currently accepting new freelance projects.  Please contact me to discuss your needs.</p>
        </div>
      </Accordion>
    </Layout>
  );
}

export default App;