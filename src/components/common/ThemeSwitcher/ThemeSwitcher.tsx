// src/components/common/ThemeSwitcher/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../../../ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.switcher}>
      <label htmlFor="theme-select">Choose a theme:</label>
      <select
        id="theme-select"
        className={styles.select}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="minimal">Minimal</option>
        <option value="business">Business</option>
        <option value="artistic">Artistic</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;