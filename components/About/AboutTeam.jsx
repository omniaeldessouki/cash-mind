// components/About/AboutTeam.js
import styles from "./AboutTeam.module.css";

export default function AboutTeam() {
  const team = [
    {
      name: "Omnia Eldessouki",
      role: "Founder, Developer & Designer",
      image: "👩‍💻",
      bio: "Created Cash Mind entirely from scratch. Built every component, designed every page, and implemented every feature with the goal of helping people take control of their finances.",
      special: true,
      quote: "I built this because I believe everyone deserves to understand their money better."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>The Creator</span>
          <h2>Built By <span className={styles.highlight}>One Person</span></h2>
          <p>Passion, dedication, and hard work brought Cash Mind to life</p>
        </div>

        {/* Creator Note */}
        {/* <div className={styles.creatorNote}>
          <div className={styles.noteIcon}>💚</div>
          <div className={styles.noteContent}>
            <h3>100% Built by Omnia Eldessouki</h3>
            <p>
              Cash Mind is a complete project built entirely by <strong>Omnia Eldessouki</strong> 
              from start to finish. Every single component, every line of CSS, every feature, 
              and every design decision was made independently with the goal of helping people 
              take control of their financial lives.
            </p>
            <div className={styles.techStack}>
              <span>⚛️ Next.js</span>
              <span>🎨 CSS Modules</span>
              <span>💾 LocalStorage API</span>
              <span>📊 Modern UI/UX</span>
              <span>📱 Responsive Design</span>
            </div>
          </div>
        </div> */}

        {/* Team Card - Only Omnia */}
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} className={`${styles.teamCard} ${styles.specialCard}`}>
              <div className={styles.crownIcon}>👑</div>
              <div className={styles.memberImage}>{member.image}</div>
              <h3>{member.name}</h3>
              <span className={styles.memberRole}>{member.role}</span>
              <p>{member.bio}</p>
              <div className={styles.quoteBox}>
                <span className={styles.quoteIcon}>"</span>
                <p className={styles.quote}>{member.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What Was Built Section */}
        {/* <div className={styles.whatBuilt}>
          <h4>🎯 What I Built From Scratch</h4>
          <div className={styles.builtGrid}>
            <div className={styles.builtItem}>✅ Complete Landing Page</div>
            <div className={styles.builtItem}>✅ Login & Signup System</div>
            <div className={styles.builtItem}>✅ Dashboard with Expense Tracking</div>
            <div className={styles.builtItem}>✅ Weekly/Monthly/Yearly Analytics</div>
            <div className={styles.builtItem}>✅ Fully Responsive Design</div>
            <div className={styles.builtItem}>✅ Modern UI Components</div>
            <div className={styles.builtItem}>✅ About Page</div>
            <div className={styles.builtItem}>✅ Authentication System</div>
          </div>
        </div> */}

        {/* Tools Used */}
        {/* <div className={styles.toolsUsed}>
          <h4>🛠️ Tools & Technologies Used</h4>
          <div className={styles.toolsGrid}>
            <span>Next.js 14</span>
            <span>React 18</span>
            <span>CSS Modules</span>
            <span>LocalStorage API</span>
            <span>VS Code</span>
            <span>Git & GitHub</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}