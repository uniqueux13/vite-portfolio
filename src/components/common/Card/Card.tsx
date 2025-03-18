// src/components/common/Card/Card.tsx
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Optional: Allow adding extra classes
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;