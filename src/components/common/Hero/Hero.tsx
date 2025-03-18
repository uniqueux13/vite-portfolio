// src/components/common/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button';
import { useTheme } from '../../../ThemeContext';
import themes from '../../../themes';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={styles.hero} >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {buttonText && buttonLink && (
          <Button variant="primary">
            <a href={buttonLink} className={styles.buttonLink}>
              {buttonText}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;