// src/components/common/NavigationBar/NavigationBar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import Button from '../Button'; // Import the Button component

interface NavigationBarProps {
  links: { text: string; url: string }[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Unique UX</div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
        {/* Hamburger icon (using CSS) */}
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        {links.map((link) => (
          <li key={link.text} className={styles.navItem}>
            <Link to={link.url} className={styles.navLink} onClick={toggleMenu}>
              {link.text}
            </Link>
          </li>
        ))}
        <li className={styles.navItem}>
             <Button variant="primary">
                <Link to="/contact" className={styles.buttonLink}>Let's Talk</Link>
            </Button>

        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;