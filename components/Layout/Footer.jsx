// components/Footer.js - Footer component with links and social
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div style={{ display: "flex", gap: "16px" }}>
              <span className={styles.logoIcon}>💸</span>
              <span className={styles.logoText}>Cash Mind</span>
            </div>
            <p className={styles.tagline}>Smart finance, smarter future.</p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <a href="/">Home</a>
              {/* <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Dashboard</a> */}
            </div>
            <div className={styles.linkGroup}>
              <a href="/about">About</a>
              {/* <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a> */}
            </div>
            <div className={styles.linkGroup}>
              <a href="/how-it-works">How It Works</a>
              {/* <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a> */}
            </div>
            {/* <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Security</a>
              <a href="#">Cookies</a>
            </div> */}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.social}>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Cash Mind. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
