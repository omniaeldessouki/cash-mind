"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [displaySaving, setDisplaySaving] = useState(0);


  useEffect(() => {
    const targetUsers = 50000;
    const targetSaved = 2.5;
    let startTime = null;

    const animateNumbers = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);

      setDisplayNumber(Math.floor(progress * targetUsers));
      setDisplaySaving((progress * targetSaved).toFixed(1));

      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };

    requestAnimationFrame(animateNumbers);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Gradient Effect */}
      <div className={styles.gradientOrb}></div>
      <div className={styles.gradientOrb2}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              AI-Powered Finance Tracker
              <span className={styles.badgeNew}>New</span>
            </div>

            <h1 className={styles.title}>
              Smart Way to
              <span className={styles.gradientText}> Track Your Money</span>
            </h1>

            <p className={styles.desc}>
              Join 50,000+ smart users who are taking control of their finances
              with AI-driven insights and real-time expense tracking.
            </p>

            {/* Email Form - Modern Lead Capture */}
            <div className={styles.emailForm}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                />
                <Link href="/signup" className={styles.submitBtn}>
                  <button className={styles.submitBtn}>
                    Start Free
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <p className={styles.noCredit}>
                ✨ No credit card required • Free forever
              </p>
            </div>

            {/* Trust Section */}
            <div className={styles.trustSection}>
              <div className={styles.trustAvatars}>
                <div className={styles.avatar}>👩‍💼</div>
                <div className={styles.avatar}>👨‍💻</div>
                <div className={styles.avatar}>👩‍🎓</div>
                <div className={styles.avatar}>👨‍🔧</div>
                <div className={styles.avatarCount}>10k+</div>
              </div>
              <div className={styles.trustText}>
                <strong>Trusted by 50,000+ users</strong>
                <div className={styles.stars}>
                  ★★★★★ <span>4.9 (1,234 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Dashboard Preview */}
          <div className={styles.preview}>
            <div className={styles.dashboardMock}>
              {/* Chart Header */}
              <div className={styles.chartHeader}>
                <div className={styles.chartDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.chartTitle}>Monthly Analytics</div>
              </div>

              {/* Bars Chart */}
              <div className={styles.barChart}>
                <div className={styles.barItem}>
                  <div className={styles.barLabel}>Jan</div>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{ height: "45px" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.barItem}>
                  <div className={styles.barLabel}>Feb</div>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{ height: "62px" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.barItem}>
                  <div className={styles.barLabel}>Mar</div>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{ height: "38px" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.barItem}>
                  <div className={styles.barLabel}>Apr</div>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{ height: "71px" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.barItem}>
                  <div className={styles.barLabel}>May</div>
                  <div className={styles.barWrapper}>
                    <div
                      className={styles.bar}
                      style={{ height: "54px" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className={styles.previewStats}>
                <div className={styles.previewStat}>
                  <div className={styles.previewStatValue}>
                    {displayNumber.toLocaleString()}+
                  </div>
                  <div className={styles.previewStatLabel}>Active Users</div>
                </div>
                <div className={styles.previewStat}>
                  <div className={styles.previewStatValue}>
                    ${displaySaving}M
                  </div>
                  <div className={styles.previewStatLabel}>Total Saved</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className={styles.activity}>
                <div className={styles.activityItem}>
                  <span>🛒</span>
                  <span>Grocery Store</span>
                  <span className={styles.activityAmount}>-$45.90</span>
                </div>
                <div className={styles.activityItem}>
                  <span>☕</span>
                  <span>Starbucks</span>
                  <span className={styles.activityAmount}>-$5.50</span>
                </div>
                <div className={styles.activityItem}>
                  <span>💳</span>
                  <span>Salary Deposit</span>
                  <span className={styles.activityIncome}>+$3,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollMouse}></div>
      </div>
    </section>
  );
}
