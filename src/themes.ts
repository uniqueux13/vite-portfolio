// src/themes.ts
interface Theme {
    [key: string]: string; // Allow arbitrary string keys for CSS variables
}

// Use Record<string, Theme> instead of an interface for themes
const themes: Record<string, Theme> = {
minimal: {
    '--background-color': '#ffffff',
    '--text-color': '#333333',
    '--primary-color': '#222222',
    '--secondary-color': '#555555',
    '--accent-color': '#007bff',
    '--button-background-color': '#eeeeee',
    '--button-text-color': '#333333',
    '--button-hover-background-color': '#cccccc',
    '--button-hover-text-color': '#333333',
    '--link-color': '#007bff',
    '--link-hover-color': '#0056b3',
    '--font-family': 'system-ui, sans-serif',
    '--border-radius': '4px',
    '--spacing-unit': '1rem',
},
business: {
    '--background-color': '#f5f8fa',
    '--text-color': '#293742',
    '--primary-color': '#004085',
    '--secondary-color': '#38a169',
    '--accent-color': '#e2e8f0',
    '--button-background-color': '#004085',
    '--button-text-color': '#ffffff',
    '--button-hover-background-color': '#002d62',
    '--button-hover-text-color': '#ffffff',
    '--link-color': '#004085',
    '--link-hover-color': '#002d62',
    '--font-family': 'Arial, sans-serif',
    '--border-radius': '0px',  // Sharper corners for a more corporate look
    '--spacing-unit': '1.2rem',
},
artistic: {
    '--background-color': '#1a202c',
    '--text-color': '#ed64a6',
    '--primary-color': '#f6ad55',
    '--secondary-color': '#9f7aea',
    '--accent-color': '#4fd1c5',
    '--button-background-color': '#f6ad55',
    '--button-text-color': '#1a202c',
    '--button-hover-background-color': '#ed8936',
    '--button-hover-text-color': '#1a202c',
    '--link-color': '#4fd1c5',
    '--link-hover-color': '#38b2ac',
    '--font-family': '\'Brush Script MT\', cursive',
    '--border-radius': '15px', // More rounded for a playful feel
    '--spacing-unit': '1.5rem',
},
};

export default themes;