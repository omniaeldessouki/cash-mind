// components/About/AboutStats.js
"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./AboutStats.module.css";

export default function AboutStats() {
  const [counts, setCounts] = useState({ users: 0, saved: 0, transactions: 0, rating: 0 });
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { id: "users", label: "Happy Users", value: 52341, suffix: "+", icon: "👥" },
    { id: "saved", label: "Money Saved", value: 10234567, suffix: "+", icon: "💰", prefix: "$" },
    { id: "transactions", label: "Transactions Tracked", value: 8945678, suffix: "+", icon: "📊" },
    { id: "rating", label: "App Rating", value: 4.8, suffix: "/5", icon: "⭐" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach(stat => {
            animateNumber(stat.id, stat.value);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumber = (id, targetValue) => {
    let current = 0;
    const increment = targetValue / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCounts(prev => ({ ...prev, [id]: targetValue }));
        clearInterval(interval);
      } else {
        setCounts(prev => ({ ...prev, [id]: Math.floor(current) }));
      }
    }, 30);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map(stat => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>
                {stat.prefix && stat.prefix}
                {counts[stat.id].toLocaleString()}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}