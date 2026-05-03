// components/HowToSave.js
import Link from "next/link";
import styles from "./HowToSave.module.css";

export default function HowToSave() {
  const steps = [
    {
      step: "01",
      title: "Track Every Expense",
      description: "Log every purchase you make - coffee, lunch, bills, entertainment. Cash Mind makes it super easy!",
      icon: "📝",
      action: "Add expense in 5 seconds"
    },
    {
      step: "02",
      title: "Analyze Your Spending",
      description: "See exactly where your money goes with beautiful charts and category breakdowns",
      icon: "📊",
      action: "Understand your habits"
    },
    {
      step: "03",
      title: "Set Monthly Budget",
      description: "Create realistic budgets for each category and get alerts when you're close to the limit",
      icon: "🎯",
      action: "Stay within budget"
    },
    {
      step: "04",
      title: "Save Automatically",
      description: "Get personalized tips to cut unnecessary expenses and save more every month",
      icon: "💰",
      action: "Save up to 30% monthly"
    }
  ];

  const savingTips = [
    { tip: "Cancel unused subscriptions", save: "Save $20-50/month" },
    { tip: "Cook at home more often", save: "Save $100-200/month" },
    { tip: "Use public transport", save: "Save $50-150/month" },
    { tip: "Shop with a list", save: "Save $30-80/month" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>How To Save Money</span>
          <h2>Track Your Expenses & <span className={styles.highlight}>Start Saving Today</span></h2>
          <p>
            Follow these simple steps to take control of your money and watch your savings grow
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.stepAction}>
                <span>✓</span> {item.action}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.savingCalculator}>
          <div className={styles.calculatorHeader}>
            <span>🧮</span>
            <h3>How Much Could You Save?</h3>
          </div>
          
          <div className={styles.calculatorGrid}>
            {savingTips.map((item, index) => (
              <div key={index} className={styles.tipCard}>
                <div className={styles.tipIcon}>💡</div>
                <div className={styles.tipContent}>
                  <p className={styles.tipText}>{item.tip}</p>
                  <span className={styles.tipSave}>{item.save}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.calculatorTotal}>
            <div className={styles.totalText}>
              <span>💰 Potential Monthly Savings:</span>
              <strong>$200 - $480 per month!</strong>
            </div>
            <Link href="/signup" className={styles.calculateBtn}>
              Start Saving Now →
            </Link>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaIcon}>💸</div>
          <h3>Ready to Take Control of Your Money?</h3>
          <p>Join thousands of users who are already saving money with Cash Mind</p>
          <div className={styles.ctaButtons}>
            <Link href="/signup" className={styles.primaryCta}>Get Started Free</Link>
            <Link href="/dashboard" className={styles.secondaryCta}>View Demo Dashboard</Link>
          </div>
        </div>
      </div>
    </section>
  );
}