import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode; // Content of the button
  onClick?: () => void;      // Optional click handler
  variant?: 'primary' | 'secondary'; // Optional style variant
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary', // Default to 'primary'
  type = 'button',     // Default to 'button'
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`} // Dynamically apply styles
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;