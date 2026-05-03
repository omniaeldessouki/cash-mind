// components/BlogPreview.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Preview.module.css";

export default function Preview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Latest Articles</span>
          <h2>
            Financial <span className={styles.highlight}>Insights & Tips</span>
          </h2>
          <p>Expert advice to help you make better financial decisions</p>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Articles →
          </Link>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterIcon}>📧</div>
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get weekly financial tips and updates straight to your inbox</p>
            {/* <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form> */}
            <div className={styles.privacy}>No spam, unsubscribe anytime.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
