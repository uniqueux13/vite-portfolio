// src/components/Projects/Projects.tsx
import React from 'react';
import ProjectCard from '../common/ProjectCard'; // Import ProjectCard
import styles from '../common/ProjectCard/ProjectCard.module.css' // We will add styling
import Card from '../common/Card';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsPage}>
      <h1>Projects</h1> {/* Keep a heading for the page */}
      <ProjectCard
        title="Project 1: Mobile App Design"
        imageUrl="/images/project1.jpg"
        description="Designed a mobile app for..."
        buttonText="View Project"
        buttonLink="/projects/project1" //  Link to a specific project page (future)
      />
      <ProjectCard
        title="Project 2: Website Redesign"
        imageUrl="/images/project2.jpg"
        description="Redesigned the website for..."
        buttonText="View Project"
        buttonLink="/projects/project2" //  Link to a specific project page (future)
      />
      {/* Add more ProjectCard components as needed */}
    </div>
  );
};

export default Projects;