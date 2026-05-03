// components/About/AboutHero.js
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>About Us</span>
          <h1>
            We Help People Take Control of{" "}
            <span className={styles.highlight}>Their Money</span>
          </h1>
          <p>
            Cash Mind was born from a simple idea: everyone deserves to
            understand their finances and build a better financial future. We're
            on a mission to make expense tracking simple, smart, and accessible
            for everyone.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2024</span>
              <span className={styles.statLabel}>Founded</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Users</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop"
              alt="Cash Mind Dashboard Preview"
              className={styles.image}
            />
          </div>
          <div className={styles.floatingCircle1}></div>
          <div className={styles.floatingCircle2}></div>
        </div>
      </div>
    </section>
  );
}
