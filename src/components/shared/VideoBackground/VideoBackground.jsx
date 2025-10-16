import { useEffect, useState } from 'react';
import styles from './VideoBackground.module.css';

function VideoBackground({ src }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                     /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div className={styles.videoBackground}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
