"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={handleLinkClick}>
            <span className={styles.logoIcon}>💸</span>
            <span className={styles.logoText}>Cash Mind</span>
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${isActive('/about') ? styles.activeLink : ''}`}
          >
            About
          </Link>
          <Link 
            href="/how-it-works" 
            className={`${styles.navLink} ${isActive('/how-it-works') ? styles.activeLink : ''}`}
          >
            How It Works
          </Link>
        </nav>

        <div className={styles.desktopActions}>
          <Link href="/login" className={styles.loginBtn}>Log in</Link>
          <Link href="/signup" className={styles.signupBtn}>Sign up</Link>
        </div>

        <button 
          className={`${styles.burgerBtn} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink} onClick={handleLinkClick}>
              Home
            </Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/how-it-works" className={styles.mobileNavLink} onClick={handleLinkClick}>
              How It Works
            </Link>
          </nav>
          <div className={styles.mobileActions}>
            <Link href="/login" className={styles.mobileLoginBtn} onClick={handleLinkClick}>
              Log in
            </Link>
            <Link href="/signup" className={styles.mobileSignupBtn} onClick={handleLinkClick}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}