// src/components/common/NavigationBar/NavigationBar.tsx
import React from 'react';
import styles from './NavigationBar.module.css';
import { Link } from 'react-router-dom'; // Import Link

interface NavigationBarProps {
  links: { text: string; url: string }[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ links }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Portfolio</div>
      <ul className={styles.navList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={link.url} className={styles.navLink}> {/* Use Link instead of <a> */}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;