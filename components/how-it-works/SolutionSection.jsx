// components/HowItWorks/SolutionSection.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SolutionSection.module.css";

export default function SolutionSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: "📱", text: "Easy to Use" },
    { icon: "🔒", text: "Secure" },
    { icon: "⚡", text: "Fast" },
    { icon: "📊", text: "Analytics" },
  ];

  return (
    <section className={styles.solution} ref={sectionRef}>
      {/* Animated Background */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>
      
      <div className={styles.container}>
        {/* Left Side - Content */}
        <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
          <span className={styles.badge}>✨ The Solution</span>
          <h2>
            Meet <span className={styles.highlight}>Cash Mind</span>
            <span className={styles.wavingHand}>👋</span>
          </h2>
          <p>
            A simple, smart expense tracker that helps you log every purchase,
            understand your spending habits, and save money effortlessly.
          </p>
          
          <div className={styles.featuresList}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.rating}>
            <div className={styles.stars}>★★★★★</div>
            <span>4.9/5 from 10,000+ reviews</span>
          </div>
        </div>

        {/* Right Side - Images Grid */}
        <div className={`${styles.imagesGrid} ${visible ? styles.visible : ""}`}>
          <div className={styles.mainImage}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3125/3125739.png"
              alt="Dashboard preview"
              className={styles.img1}
            />
            <div className={styles.imageGlow}></div>
          </div>
          
          <div className={styles.smallImages}>
            <div className={styles.smallImage}>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/10256/10256821.png"
                alt="Expense tracking"
                className={styles.img2}
              />
            </div>
            <div className={styles.smallImage}>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/893/893067.png"
                alt="Money saving"
                className={styles.img3}
              />
            </div>
          </div>

          <div className={styles.floatingCard}>
            <span>📊</span>
            <span>+50K Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}