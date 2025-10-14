import styles from './VideoBackground.module.css';

const VideoBackground = ({ src }) => {
  return (
    <video autoPlay muted loop className={styles.videoBackground}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;