// src/components/common/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string; // Optional subtitle
  imageUrl?: string;   // Optional background image
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;