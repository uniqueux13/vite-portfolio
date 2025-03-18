// src/components/about/About.tsx

import React from 'react';
import styles from './About.module.css';
import Button from '../common/Button'; // Import the Button component

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className={styles.about}>
      <section className={styles.introSection}>
        <h1>About Me: UX Designer & Strategist</h1> {/* Option: Direct Headline */}
        <p>
          Hi, I'm [Your Name], a UX designer based in [Your Location]. I'm passionate about
          creating user-centered digital experiences that are both beautiful and
          functional. I believe great design starts with a deep understanding of the
          user, and I'm driven by the challenge of solving complex problems and making
          technology more accessible and enjoyable. I leverage my skills in user
          research, design thinking, and a touch of AI to craft compelling and
          effective solutions.
        </p>
        <Button variant="primary" onClick={() => window.location.href = '#contact'}>
          Contact Me
        </Button>
      </section>

      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <ul> {/* Option: Bulleted List */}
          <li>User Research (Interviews, Surveys, Usability Testing)</li>
          <li>Interaction Design</li>
          <li>Wireframing & Prototyping (Figma, Adobe XD, Sketch)</li>
          <li>Information Architecture</li>
          <li>UI Design</li>
          <li>Accessibility (WCAG)</li>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Vite</li>
        </ul>
      </section>

      <section className={styles.experienceSection}>
        <h2>Experience</h2>
        {/* Using the ExperienceItem component (defined below) */}
        <ExperienceItem
          title="Lead UX Designer"
          company="Acme Corporation"
          dates="2022 - Present"
          bullets={[
            "Led the redesign of the company's flagship product, resulting in a 40% increase in user satisfaction and a 25% increase in conversion rates.",
            "Established and maintained a design system, improving consistency and efficiency across the product team.",
            "Mentored junior designers and fostered a culture of user-centered design.",
          ]}
        />
        <ExperienceItem
          title="UX/UI Designer"
          company="Beta Solutions"
          dates="2020 - 2022"
          bullets={[
            "Designed and prototyped user interfaces for web and mobile applications.",
            "Conducted user research and usability testing to inform design decisions.",
            "Collaborated closely with developers to ensure seamless implementation.",
          ]}
        />
         {/* Add more ExperienceItem components as needed */}
      </section>

      <section className={styles.educationSection}>
        <h2>Education</h2>
        <p>
          <strong>Master of Science in Human-Computer Interaction</strong><br />
          University of Example, 2020
        </p>
        <p>
          <strong>Bachelor of Arts in Design</strong><br />
          Another University, 2018
        </p>
         {/* Add certifications here, if applicable */}
      </section>

      <section className={styles.contactSection}> {/*Adding a Contact Section*/}
        <h2>Contact</h2>
         <p>I am always excited to take on new clients so if you have any questions:</p>
         <Button variant='primary' onClick={() => window.location.href = 'mailto:youremail@example.com'}> Contact Me </Button> {/* Replace with your email */}
      </section>
    </div>
  );
};

export default About;

// Reusable ExperienceItem component
interface ExperienceItemProps {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  dates,
  bullets,
}) => {
  return (
    <div className={styles.experienceItem}>
      <h3>{title}</h3>
      <p>
        <strong>{company}</strong> | {dates}
      </p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};