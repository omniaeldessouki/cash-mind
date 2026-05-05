// components/HowItWorks/StepsSection.jsx
import styles from "./StepsSection.module.css";

export default function StepsSection() {
  const steps = [
    { number: "01", title: "Create Your Account", desc: "Sign up in 30 seconds - it's completely free", icon: "📝" },
    { number: "02", title: "Add Your Expenses", desc: "Log every purchase you make daily, weekly, or monthly", icon: "💰" },
    { number: "03", title: "Track & Analyze", desc: "See where your money goes with smart analytics", icon: "📊" },
    { number: "04", title: "Save More Money", desc: "Get personalized tips to reduce unnecessary spending", icon: "💸" },
  ];

  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <h2>How It <span className={styles.highlight}>Works</span></h2>
        <p>Four simple steps to take control of your finances</p>
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}