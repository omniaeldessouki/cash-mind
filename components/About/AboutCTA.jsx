// components/About/AboutCTA.js
import Link from "next/link";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Ready to Start Your Financial Journey?</h2>
          <p>Join thousands of users who are already saving money with Cash Mind</p>
          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primaryBtn}>Get Started Free →</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}