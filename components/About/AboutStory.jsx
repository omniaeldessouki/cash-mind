// components/About/AboutStory.js
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Our Story</span>
          <h2>How <span className={styles.highlight}>Cash Mind</span> Was Born</h2>
          <div className={styles.storyText}>
            <p>
              I was struggling to track my monthly expenses. Every app I tried was either 
              too complicated or missing features I needed. So I decided to build my own 
              solution - Cash Mind.
            </p>
            <p>
              What started as a personal project to help me manage my money quickly grew 
              into something bigger. I wanted to help others who face the same challenges 
              with tracking expenses and saving money.
            </p>
            <p>
              Today, Cash Mind is growing every day. I'm constantly improving the platform, 
              adding new features, and making expense tracking simpler, smarter, and more 
              accessible for everyone. This is just the beginning.
            </p>
          </div>
          <div className={styles.signature}>
            <div className={styles.signatureIcon}>💚</div>
            <span>Omnia Eldessouki</span>
          </div>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2026</div>
            <div className={styles.timelineText}>Started building Cash Mind</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2026</div>
            <div className={styles.timelineText}>Launched the platform</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Now</div>
            <div className={styles.timelineText}>Growing & improving daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}