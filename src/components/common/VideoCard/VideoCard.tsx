// src/components/common/VideoCard/VideoCard.tsx
import React from 'react';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  description?: string; // Optional description
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, description }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoWrapper}>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoFrame}
        ></iframe>
      </div>
      <h3 className={styles.videoTitle}>{title}</h3>
      {description && <p className={styles.videoDescription}>{description}</p>}
    </div>
  );
};

export default VideoCard;