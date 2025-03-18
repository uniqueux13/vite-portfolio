import React from 'react';
import styles from './NavigationBar.module.css';

interface NavigationBarProps {
    // Add props if needed, e.g., links
    links?: { text: string; url: string }[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ links = [] }) => {
return (
    <nav className={styles.navBar}>
    <ul className={styles.navList}>
        {links.map((link, index) => (
        <li key={index} className={styles.navItem}>
            <a href={link.url} className={styles.navLink}>{link.text}</a>
        </li>
        ))}
    </ul>
    </nav>
    );
};
export default NavigationBar;