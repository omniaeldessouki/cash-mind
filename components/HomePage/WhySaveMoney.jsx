// components/WhySaveMoney.js
import Link from "next/link";
import styles from "./WhySaveMoney.module.css";

export default function WhySaveMoney() {
  const reasons = [
    {
      icon: "🏠",
      title: "Buy Your Dream Home",
      description: "Saving helps you afford a down payment for your own house or apartment faster",
      number: "01",
      stat: "$50K+",
      statLabel: "Saved for down payments"
    },
    {
      icon: "🎓",
      title: "Education for Kids",
      description: "Secure your children's future with proper education funding",
      number: "02",
      stat: "$100K+",
      statLabel: "Education funds secured"
    },
    {
      icon: "✈️",
      title: "Travel & Experiences",
      description: "Explore the world and create memories without financial stress",
      number: "03",
      stat: "50+",
      statLabel: "Countries explored"
    },
    {
      icon: "🏥",
      title: "Emergency Fund",
      description: "Be prepared for unexpected medical bills or job loss",
      number: "04",
      stat: "6 months",
      statLabel: "Emergency coverage"
    },
    {
      icon: "🚗",
      title: "Buy a Car",
      description: "Save up for your dream car and pay in cash to avoid interest",
      number: "05",
      stat: "0%",
      statLabel: "Interest paid"
    },
    {
      icon: "👴",
      title: "Retirement Comfort",
      description: "Enjoy your golden years without worrying about money",
      number: "06",
      stat: "$1M+",
      statLabel: "Retirement savings"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Why Save Money?</span>
          <h2>Why Should You <span className={styles.highlight}>Track Your Expenses?</span></h2>
          <p>
            Every dollar you save today is an investment in your future. 
            Here's why you should start saving right now
          </p>
        </div>

        {/* Modern Timeline Layout instead of cards */}
        <div className={styles.timeline}>
          {reasons.map((reason, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineNumber}>{reason.number}</div>
              <div className={styles.timelineContent}>
                <div className={styles.contentIcon}>{reason.icon}</div>
                <div className={styles.contentText}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                  <div className={styles.contentStat}>
                    <span className={styles.statValue}>{reason.stat}</span>
                    <span className={styles.statLabel}>{reason.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter Row */}
        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <span className={styles.statNumber}>50K+</span>
            <span className={styles.statText}>Active Users</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBlock}>
            <span className={styles.statNumber}>$10M+</span>
            <span className={styles.statText}>Money Saved</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statBlock}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statText}>Satisfied Users</span>
          </div>
        </div>

        {/* Modern Quote Section */}
        <div className={styles.moneyQuote}>
          <div className={styles.quoteWrapper}>
            <div className={styles.quoteIcon}>“</div>
            <p className={styles.quote}>
              The habit of saving is itself an education. It fosters every virtue, teaches self-denial, 
              cultivates the sense of order, trains to forethought, and broadens the mind.
            </p>
            <div className={styles.authorSection}>
              <div className={styles.authorLine}></div>
              <span className={styles.author}>— T.T. Munger</span>
              <div className={styles.authorLine}></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/signup" className={styles.ctaButton}>
            Start Saving Today
            <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}