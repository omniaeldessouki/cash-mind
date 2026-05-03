// components/Header.js - Navigation header component
"use client";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoIcon}>💸</span>
            <span className={styles.logoText}>Cash Mind</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/how-it-works" className={styles.navLink}>
            How It Works
          </Link>
          <Link href="/profile" className={styles.navLink}>
            Profile
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>
            Log in
          </Link>
          <Link href="/signup" className={styles.signupBtn}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
