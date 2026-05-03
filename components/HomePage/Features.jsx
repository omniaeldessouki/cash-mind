// components/Features.js
import styles from "./Features.module.css";

export default function Features() {
  const featuresData = [
    {
      icon: "📊",
      title: "Weekly Analysis",
      description: "Track your daily expenses and analyze weekly spending habits"
    },
    {
      icon: "📅",
      title: "Monthly Reports",
      description: "Get comprehensive monthly expense reports with charts"
    },
    {
      icon: "🎯",
      title: "Yearly Planning",
      description: "Set yearly financial goals and track your progress"
    },
    {
      icon: "🤖",
      title: "Smart Insights",
      description: "Receive personalized money saving tips based on your habits"
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description: "Simple interface to add expenses in seconds"
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      description: "Your data is encrypted and never shared with third parties"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose Us?</span>
          <h2>Powerful Features to <span className={styles.highlight}>Control Your Money</span></h2>
          <p>Everything you need to track, analyze, and save money effectively</p>
        </div>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}