// import styles from "./Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>

//         <h1 className={styles.title}>
//           Take Control of Your Money <br />
//           with <span className={styles.highlight}>Cash Mind </span>💸
//         </h1>

//         <p className={styles.desc}>
//           Track your expenses, understand your spending habits, and get smart insights to manage your finances better.
//         </p>

//         <div className={styles.buttons}>
//           <button className={styles.primaryBtn}>Get Started</button>
//           <button className={styles.secondaryBtn}>View Dashboard</button>
//         </div>

//       </div>
//     </section>
//   );
// }
// components/Hero.js
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>Smart Finance Tracker</span>
          </div>

          <h1 className={styles.title}>
            Take Control of Your Money <br />
            with <span className={styles.highlight}>Cash Mind </span>
            <span className={styles.titleEmoji}>💸</span>
          </h1>

          <p className={styles.desc}>
            Track your expenses, understand your spending habits, and get smart
            insights to manage your finances better.
          </p>

          <div className={styles.userStats}>
            <div className={styles.userAvatars}>
              <span>👩</span>
              <span>👨</span>
              <span>👩‍💻</span>
              <span>👨‍💼</span>
            </div>
            <div className={styles.userText}>
              <strong>10,000+</strong> active users
            </div>
          </div>

          <div className={styles.buttons}>
            <Link href="/signup" className={styles.primaryBtn}>
              Get Started
              <span className={styles.btnArrow}>→</span>
            </Link>
            <Link href="/dashboard" className={styles.secondaryBtn}>
              View Dashboard
            </Link>
          </div>
        </div>

        {/* <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statNumber}>50K+</div>
            <div className={styles.statLabel}>Expenses Tracked</div>
            <div className={styles.statTrend}>↑ 23% this month</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statNumber}>$2.5M</div>
            <div className={styles.statLabel}>Money Saved</div>
            <div className={styles.statTrend}>↑ 15% this month</div>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>
            <div className={styles.statNumber}>4.9</div>
            <div className={styles.statLabel}>User Rating</div>
            <div className={styles.statTrend}>From 10k+ reviews</div>
          </div>
        </div> */}
      </div>

      {/* Animated background elements */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>
      <div className={styles.bgElement3}></div>
    </section>
  );
}
