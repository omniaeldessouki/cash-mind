// components/HowItWorks/BenefitsSection.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    {
      title: "Know where your money goes",
      desc: "Every penny accounted for with detailed tracking",
      icon: "🔍",
      stat: "98%",
      statLabel: "Satisfaction",
    },
    {
      title: "Stop overspending",
      desc: "Set budgets and get alerts when you're close to limits",
      icon: "🛑",
      stat: "35%",
      statLabel: "Less Waste",
    },
    {
      title: "Save for your goals",
      desc: "Track progress toward your dreams with visual insights",
      icon: "🎯",
      stat: "$2.5M",
      statLabel: "Total Saved",
    },
    {
      title: "Reduce financial stress",
      desc: "Feel in control of your money with real-time analytics",
      icon: "😌",
      stat: "80%",
      statLabel: "Less Stress",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.benefits} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>✨ Why Choose Us</span>
          <h2>
            Why You'll <span className={styles.highlight}>Love Cash Mind</span>
          </h2>
          <p>Discover the benefits that make us different</p>
        </div>

        {/* Benefits Grid - بدون كاردات */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`${styles.benefitItem} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.benefitContent}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className={styles.benefitStat}>
                  <span className={styles.statValue}>{benefit.stat}</span>
                  <span className={styles.statLabel}>{benefit.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
