// app/how-it-works/page.js
import Link from "next/link";
import styles from "./how-it-works.module.css";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      desc: "Sign up in 30 seconds - it's completely free",
      icon: "📝",
    },
    {
      number: "02",
      title: "Add Your Expenses",
      desc: "Log every purchase you make daily, weekly, or monthly",
      icon: "💰",
    },
    {
      number: "03",
      title: "Track & Analyze",
      desc: "See where your money goes with smart analytics",
      icon: "📊",
    },
    {
      number: "04",
      title: "Save More Money",
      desc: "Get personalized tips to reduce unnecessary spending",
      icon: "💸",
    },
  ];

  const benefits = [
    { title: "Know where your money goes", desc: "Every penny accounted for" },
    { title: "Stop overspending", desc: "Set budgets and stick to them" },
    { title: "Save for your goals", desc: "Track progress toward your dreams" },
    { title: "Reduce financial stress", desc: "Feel in control of your money" },
  ];

  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>
              How <span className={styles.highlight}>Cash Mind</span> Works
            </h1>
            <p>
              Stop wondering where your money went. Start tracking,
              understanding, and saving with the smartest expense tracker.
            </p>
            <Link href="/signup" className={styles.ctaBtn}>
              Start Tracking Now →
            </Link>
          </div>
        </section>

        {/* Problem Section */}
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

        {/* Solution Section */}
        <section className={styles.solution}>
          <div className={styles.container}>
            <span className={styles.badge}>The Solution</span>
            <h2>
              Meet <span className={styles.highlight}>Cash Mind</span>
            </h2>
            <p>
              A simple, smart expense tracker that helps you log every purchase,
              understand your spending habits, and save money effortlessly.
            </p>
          </div>
        </section>

        {/* How It Works Steps */}
        <section className={styles.steps}>
          <div className={styles.container}>
            <h2>
              How It <span className={styles.highlight}>Works</span>
            </h2>
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

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2>
              Why You'll{" "}
              <span className={styles.highlight}>Love Cash Mind</span>
            </h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, i) => (
                <div key={i} className={styles.benefitCard}>
                  <div className={styles.check}>✓</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2>Ready to take control of your money?</h2>
            <p>Join thousands of users who are already saving with Cash Mind</p>
            <Link href="/signup" className={styles.finalBtn}>
              Get Started Free →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
