// src/components/common/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';
import Button from '../Button';
import { useTheme } from '../../../ThemeContext';
import themes from '../../../themes';

interface HeroProps {
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({ buttonLink }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={styles.hero} style={{ backgroundImage: currentTheme['--hero-background-image'] }}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} style={{color: currentTheme['--hero-title-color']}}>{currentTheme['--hero-title']}</h1>
        <p className={styles.heroSubtitle} style={{color: currentTheme['--hero-subtitle-color']}}>{currentTheme['--hero-subtitle']}</p>
        {buttonLink && (
          <Button variant="primary">
            <a href={buttonLink} className={styles.buttonLink}>
              {currentTheme['--hero-button-text']}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;