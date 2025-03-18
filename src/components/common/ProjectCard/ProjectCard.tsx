// src/components/common/ProjectCard/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.css';
import Button from '../Button'; // Import the Button component

interface ProjectCardProps {
  title: string;
  imageUrl: string; // Add imageUrl prop
  description: string;
  buttonText: string;
  buttonLink: string; // Could be URL or route path
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={styles.projectCard}>
      <img src={imageUrl} alt={title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <Button variant="primary">
            <a href={buttonLink} className={styles.buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;