// components/About/AboutValues.js
import styles from "./AboutValues.module.css";

export default function AboutValues() {
  const values = [
    {
      icon: "🔓",
      title: "Transparency",
      description: "Complete transparency about how we handle your data"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly improving to make expense tracking smarter"
    },
    {
      icon: "🤝",
      title: "User First",
      description: "Every decision starts with what's best for our users"
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Financial tools available to everyone, regardless of budget"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Core Values</span>
          <h2>What <span className={styles.highlight}>We Stand For</span></h2>
          <p>The principles that guide everything we do</p>
        </div>

        <div className={styles.timeline}>
          {values.map((value, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <span className={styles.timelineIcon}>{value.icon}</span>
              </div>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineContent}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}