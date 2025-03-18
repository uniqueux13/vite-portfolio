// src/themes.ts

interface Theme {
    [key: string]: string;
  }
  
  const themes: Record<string, Theme> = {
    minimal: {
      // Colors
      '--background-color': '#ffffff',
      '--text-color': '#333333',
      '--primary-color': '#222222',
      '--secondary-color': '#555555',
      '--accent-color': '#007bff',
      '--link-color': '#007bff',
      '--link-hover-color': '#0056b3',
      '--error-color': '#dc3545',
      '--success-color': '#28a745',
  
      // Typography
      '--font-family': 'system-ui, sans-serif',
      '--font-size-base': '16px',
      '--font-size-h1': '2.5rem',
      '--font-size-h2': '2rem',
      '--font-size-h3': '1.75rem',
      '--font-size-h4': '1.5rem',
      '--font-size-h5': '1.25rem',
      '--font-size-h6': '1rem',
      '--font-weight-normal': '400',
      '--font-weight-bold': '700',
      '--line-height': '1.5',
  
      // Spacing
      '--spacing-unit': '1rem',
      '--margin-top': '1rem',
      '--margin-bottom': '1rem',
      '--margin-left': '1rem',
      '--margin-right': '1rem',
  
      // Borders
      '--border-radius': '4px',
      '--border-width': '1px',
      '--border-color': '#cccccc',
  
      // Buttons
      '--button-background-color': '#eeeeee',
      '--button-text-color': '#333333',
      '--button-hover-background-color': '#cccccc',
      '--button-hover-text-color': '#333333',
      '--button-padding': '0.5rem 1rem',
      '--button-border-radius': '4px',
  
      // Cards
      '--card-background-color': '#ffffff',
      '--card-border-color': '#cccccc',
      '--card-border-radius': '4px',
      '--card-padding': '1rem',
      '--card-box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
  
      // Accordions
      '--accordion-header-background-color': '#eeeeee',
      '--accordion-header-color': '#333333',
      '--accordion-content-background-color': '#ffffff',
      '--accordion-content-color': '#333333',
  
      // Navigation Bar
      '--navbar-background-color': '#333333',
      '--navbar-link-color': '#333333',
      '--navbar-link-hover-color': '#cccccc',
      '--navbar-padding': '1rem 1rem',
  
      // Hero Section
       '--hero-background-color': '#007bff',
       '--hero-title-color': '#ffffff',
       '--hero-subtitle-color': '#ffffff',
       '--hero-padding': '4rem 2rem',
       '--hero-title': 'From Zero to Portfolio in 8 Hours',
       '--hero-subtitle': "I'm not a front-end coding wizard, but I *am* an expert UX designer and writer...",
       '--hero-button-text': 'Contact Me',
  
       //Video Section
        '--video-container-background': 'black',
        '--hero-background-image': 'url("/images/hero-minimal.jpg")', // Correct path
  
    },
    business: {
          // Colors
          '--background-color': '#f0f4f8',
          '--text-color': '#2d3748',
          '--primary-color': '#1a365d',
          '--secondary-color': '#4a5568',
          '--accent-color': '#2b6cb0',
          '--link-color': '#2b6cb0',
          '--link-hover-color': '#2c5282',
          '--error-color': '#e53e3e',
          '--success-color': '#38a169',
      
          // Typography
          '--font-family': 'Inter, sans-serif',
          '--font-size-base': '18px',
          '--font-size-h1': '3rem',
          '--font-size-h2': '2.25rem',
          '--font-size-h3': '1.875rem',
          '--font-size-h4': '1.5rem',
          '--font-size-h5': '1.25rem',
          '--font-size-h6': '1rem',
          '--font-weight-normal': '400',
          '--font-weight-bold': '600',
          '--line-height': '1.6',
      
          // Spacing
          '--spacing-unit': '1.5rem',
          '--margin-top': '1rem',
          '--margin-bottom': '1rem',
          '--margin-left': '1rem',
          '--margin-right': '1rem',
      
          // Borders
          '--border-radius': '6px',
          '--border-width': '1px',
          '--border-color': '#cbd5e0',
      
          // Buttons
          '--button-background-color': '#2b6cb0',
          '--button-text-color': '#ffffff',
          '--button-hover-background-color': '#2c5282',
          '--button-hover-text-color': '#ffffff',
          '--button-padding': '0.75rem 1.5rem',
          '--button-border-radius': '6px',
      
          // Cards
          '--card-background-color': '#ffffff',
          '--card-border-color': '#cbd5e0',
          '--card-border-radius': '6px',
          '--card-padding': '1.5rem',
          '--card-box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
      
          // Accordions
          '--accordion-header-background-color': '#edf2f7',
          '--accordion-header-color': '#2d3748',
          '--accordion-content-background-color': '#ffffff',
          '--accordion-content-color': '#2d3748',
      
          // Navigation Bar
          '--navbar-background-color': '#1a365d',
          '--navbar-link-color': '#ffffff',
          '--navbar-link-hover-color': '#cbd5e0',
          '--navbar-padding': '1rem',
  
          //Hero Section
          '--hero-background-color': '#2b6cb0',
          '--hero-title-color': '#ffffff',
          '--hero-subtitle-color': '#edf2f7',
          '--hero-padding': '5rem 3rem',
          '--hero-title': 'Professional UX Design Solutions',
          '--hero-subtitle': 'Delivering results-driven digital experiences for your business.',
          '--hero-button-text': 'Get a Quote',
  
          //Video Section
          '--video-container-background': 'black',
          '--hero-background-image': 'url("/images/hero-business.jpg")', // Correct path

    },
    artistic: {
      // Colors
     '--background-color': '#1a202c',
      '--text-color': '#ed64a6',
      '--primary-color': '#f6ad55',
      '--secondary-color': '#9f7aea',
      '--accent-color': '#4fd1c5',
      '--link-color': '#4fd1c5',
      '--link-hover-color': '#38b2ac',
      '--error-color': '#e53e3e',
      '--success-color': '#38a169',
  
      // Typography
     '--font-family': '\'Brush Script MT\', cursive',
      '--font-size-base': '16px',
      '--font-size-h1': '4rem',
      '--font-size-h2': '3rem',
      '--font-size-h3': '2.25rem',
      '--font-size-h4': '1.875rem',
      '--font-size-h5': '1.5rem',
      '--font-size-h6': '1.25rem',
      '--font-weight-normal': '400',
      '--font-weight-bold': '700',
      '--line-height': '1.4',
  
      // Spacing
      '--spacing-unit': '1.5rem',
      '--margin-top': '1rem',
      '--margin-bottom': '1rem',
      '--margin-left': '1rem',
      '--margin-right': '1rem',
  
      // Borders
     '--border-radius': '15px', // More rounded for a playful feel
      '--border-width': '2px',
      '--border-color': '#4a5568',
  
      // Buttons
      '--button-background-color': '#f6ad55',
      '--button-text-color': '#1a202c',
      '--button-hover-background-color': '#ed8936',
      '--button-hover-text-color': '#1a202c',
      '--button-padding': '0.6rem 1.2rem',
      '--button-border-radius': '15px',
  
      // Cards
      '--card-background-color': '#2d3748',
      '--card-border-color': '#4a5568',
      '--card-border-radius': '15px',
      '--card-padding': '1.5rem',
      '--card-box-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)',
  
      // Accordions
      '--accordion-header-background-color': '#4a5568',
      '--accordion-header-color': '#ffffff',
      '--accordion-content-background-color': '#2d3748',
      '--accordion-content-color': '#ed64a6',
  
      // Navigation Bar
      '--navbar-background-color': '#f6ad55',
      '--navbar-link-color': '#1a202c',
      '--navbar-link-hover-color': '#ffffff',
      '--navbar-padding': '0.5rem 1rem',
  
      //Hero Section
        '--hero-background-color': '#9f7aea',
        '--hero-title-color': '#1a202c',
        '--hero-subtitle-color': '#ffffff',
        '--hero-padding': '6rem 2rem',
        '--hero-title': 'Best UX Design Solutions',
        '--hero-subtitle': 'Delivering results-driven digital experiences for your business.',
        '--hero-button-text': 'Get a Quote',
  
      //Video Section
      '--video-container-background': 'black',
      '--hero-background-image': 'url("/images/hero-artistic.jpg")', // Correct path

    },
  };
  
  export default themes;