// components/HowItWorks/HeroSection.jsx
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Side - Content */}
        <div className={styles.content}>
          <div className={styles.badge}>📊 Smart Finance Tracker</div>
          <h1>
            How <span className={styles.highlight}>Cash Mind</span> Works
          </h1>
          <p>
            Stop wondering where your money went. Start tracking,
            understanding, and saving with the smartest expense tracker.
          </p>
          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primaryBtn}>
              Start Tracking Now →
            </Link>
            <Link href="/demo" className={styles.secondaryBtn}>
              Watch Demo ▶
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$2.5M+</span>
              <span className={styles.statLabel}>Money Saved</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9+</span>
              <span className={styles.statLabel}>User Rating</span>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className={styles.imageContainer}>
          <div className={styles.mainImage}>
            <img 
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Person managing finances"
              className={styles.mainImg}
            />
            <div className={styles.floatingCard1}>
              <span>Expenses Tracked</span>
            </div>
            <div className={styles.floatingCard2}>
              <span>Money Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>
      <div className={styles.bgCircle3}></div>
    </section>
  );
}