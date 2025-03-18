// src/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import themes from './themes';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}
//create context with a default state.
const ThemeContext = createContext<ThemeContextProps>({
    theme: 'minimal', // Default theme
    setTheme: () => {},
  });

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('minimal'); // Start with the minimal theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };