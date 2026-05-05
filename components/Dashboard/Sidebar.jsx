// app/dashboard/Sidebar.js
"use client";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Dashboard.module.css";

export default function Sidebar({ userName, onLogout }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>💸 Cash Mind</div>
      </div>

      <nav className={styles.sidebarNav}>
        <button
          onClick={() => router.push("/dashboard")}
          className={`${styles.navItem} ${pathname === "/dashboard" ? styles.active : ""}`}
        >
          <span>🏠</span>
          <span className={styles.navText}>Dashboard</span>
        </button>
        <button
          onClick={() => router.push("/weekly")}
          className={`${styles.navItem} ${pathname === "/weekly" ? styles.active : ""}`}
        >
          <span>📊</span>
          <span className={styles.navText}>Weekly</span>
        </button>
        <button
          onClick={() => router.push("/monthly")}
          className={`${styles.navItem} ${pathname === "/monthly" ? styles.active : ""}`}
        >
          <span>📅</span>
          <span className={styles.navText}>Monthly</span>
        </button>
        <button
          onClick={() => router.push("/yearly")}
          className={`${styles.navItem} ${pathname === "/yearly" ? styles.active : ""}`}
        >
          <span>🎯</span>
          <span className={styles.navText}>Yearly</span>
        </button>
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>👤</div>
          <div className={styles.userName}>{userName}</div>
        </div>
        <button onClick={onLogout} className={styles.logoutBtn}>
          <span>🚪</span>
          <span className={styles.logoutText}>Logout</span>
        </button>
      </div>
    </aside>
  );
}