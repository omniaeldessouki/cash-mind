// app/dashboard/page.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";

function DashboardHome() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };
    const name = getCookie("userName");
    setUserName(name || "User");

    const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(savedExpenses);
  }, []);

  const getTotalByPeriod = (period) => {
    const now = new Date();
    const filtered = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      if (period === "weekly") {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return expenseDate >= weekAgo;
      } else if (period === "monthly") {
        return (
          expenseDate.getMonth() === now.getMonth() &&
          expenseDate.getFullYear() === now.getFullYear()
        );
      } else if (period === "yearly") {
        return expenseDate.getFullYear() === now.getFullYear();
      }
      return true;
    });
    return filtered.reduce((sum, exp) => sum + exp.amount, 0);
  };

  const weeklyTotal = getTotalByPeriod("weekly");
  const monthlyTotal = getTotalByPeriod("monthly");
  const yearlyTotal = getTotalByPeriod("yearly");

  const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };

  const handleLogout = () => {
    deleteCookie("isAuthenticated");
    deleteCookie("userName");
    deleteCookie("userEmail");
    deleteCookie("userId");
    router.push("/login");
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar - passing props */}
      <Sidebar userName={userName} onLogout={handleLogout} />

      {/* Main Content - 3 Totals Cards */}
      <main className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h1>Dashboard</h1>
          <p>Welcome back, {userName}!</p>
        </div>

        {/* 3 Totals Cards */}
        <div className={styles.totalsGrid}>
          <div className={styles.totalCard}>
           <div className={styles.totalCardIcon}>💰</div>
            <div className={styles.totalCardInfo}>
              <span className={styles.totalCardLabel}>This Week</span>
              <span className={styles.totalCardAmount}>
                ${weeklyTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className={styles.totalCard}>
            <div className={styles.totalCardIcon}>💰</div>
            <div className={styles.totalCardInfo}>
              <span className={styles.totalCardLabel}>This Month</span>
              <span className={styles.totalCardAmount}>
                ${monthlyTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className={styles.totalCard}>
          <div className={styles.totalCardIcon}>💰</div>
            <div className={styles.totalCardInfo}>
              <span className={styles.totalCardLabel}>This Year</span>
              <span className={styles.totalCardAmount}>
                ${yearlyTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.infoBox}>
          <h3>
            📊 Click on Weekly, Monthly, or Yearly from the sidebar to see
            detailed breakdowns
          </h3>
          <p>Track your expenses in detail for each period</p>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardHome />
    </ProtectedRoute>
  );
}