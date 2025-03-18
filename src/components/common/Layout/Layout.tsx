// src/components/common/Layout/Layout.tsx
import React from 'react';
import NavigationBar from '../NavigationBar';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './Layout.module.css';
import { useTheme } from '../../../ThemeContext';
import themes from '../../../themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Projects', url: '/projects' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <div className={styles.layout} style={currentTheme as React.CSSProperties}>
      <NavigationBar links={navLinks} /> {/* Pass navLinks */}
      <ThemeSwitcher />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;