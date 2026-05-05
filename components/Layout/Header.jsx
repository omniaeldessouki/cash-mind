"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>

          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" onClick={handleLinkClick}>
              <span className={styles.logoIcon}>💸</span>
              <span className={styles.logoText}>Cash Mind</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.activeLink : ""}`}>
              Home
            </Link>
            <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? styles.activeLink : ""}`}>
              About
            </Link>
            <Link href="/how-it-works" className={`${styles.navLink} ${isActive("/how-it-works") ? styles.activeLink : ""}`}>
              How It Works
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <Link href="/login" className={styles.loginBtn}>Log in</Link>
            <Link href="/signup" className={styles.signupBtn}>Sign up</Link>
          </div>

          {/* Burger */}
          <button
            className={`${styles.burgerBtn} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>

        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className={styles.mobileNav}>
          <Link href="/" onClick={handleLinkClick} className={styles.mobileNavLink}>
            Home
          </Link>
          <Link href="/about" onClick={handleLinkClick} className={styles.mobileNavLink}>
            About
          </Link>
          <Link href="/how-it-works" onClick={handleLinkClick} className={styles.mobileNavLink}>
            How It Works
          </Link>
        </nav>

        <div className={styles.mobileActions}>
          <Link href="/login" onClick={handleLinkClick} className={styles.mobileLoginBtn}>
            Log in
          </Link>
          <Link href="/signup" onClick={handleLinkClick} className={styles.mobileSignupBtn}>
            Sign up
          </Link>
        </div>

      </div>
    </>
  );
}