// components/HowItWorks/ProblemSection.jsx
import styles from "./ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <span className={styles.badge}>The Problem</span>
        <h2>
          Most people don't know{" "}
          <span className={styles.highlight}>where their money goes</span>
        </h2>
        <p>
          At the end of each month, you look at your bank account and ask
          yourself: "Where did all my money go?" You're not alone. Millions
          struggle with tracking their daily expenses.
        </p>
      </div>
    </section>
  );
}