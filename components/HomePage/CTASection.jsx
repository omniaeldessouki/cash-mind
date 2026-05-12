// components/BlogPreview.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Ready to Start?</span>
          <h2>
            Take Control of{" "}
            <span className={styles.highlight}>Your Finances Today</span>
          </h2>
          <p>
            Join thousands of users who are already saving money with Cash Mind
          </p>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterIcon}>💸</div>
            <h3>Start Your Financial Journey Now</h3>
            <p>Get started for free and see the difference in your savings</p>
            {/* <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form> */}
            <div className={styles.buttons}>
              <Link href="/signup" className={styles.secondaryBtn}>
                Get Started Free →
              </Link>
              {/* <Link href="/dashboard" className={styles.primaryBtn}>
                View Demo
              </Link> */}
            </div>
            {/* <div className={styles.privacy}>No spam, unsubscribe anytime.</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
