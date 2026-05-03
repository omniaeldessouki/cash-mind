// components/About/AboutMission.js
import styles from "./AboutMission.module.css";

export default function AboutMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.missionBox}>
          <div className={styles.glowEffect}></div>
          <div className={styles.missionIcon}>🎯</div>
          <h2>Our Mission</h2>
          <p>
            To empower people worldwide to take control of their financial lives 
            through simple, smart, and accessible expense tracking tools.
          </p>
          <div className={styles.decorationLine}></div>
          <div className={styles.statBadge}>
            <span>🌟 50K+ Users Empowered</span>
          </div>
        </div>
        
        <div className={styles.visionBox}>
          <div className={styles.glowEffect}></div>
          <div className={styles.visionIcon}>👁️</div>
          <h2>Our Vision</h2>
          <p>
            A world where everyone has the knowledge and tools to achieve financial 
            freedom and live life on their own terms.
          </p>
          <div className={styles.decorationLine}></div>
          <div className={styles.statBadge}>
            <span>🌍 Global Financial Freedom</span>
          </div>
        </div>
      </div>
    </section>
  );
}