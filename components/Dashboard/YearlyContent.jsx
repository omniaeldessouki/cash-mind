// app/dashboard/yearly/page.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";

function YearlyContent() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    category: "food",
    date: new Date().toISOString().split("T")[0],
  });

  const categories = [
    { id: "food", name: "🍔 Food", color: "#22c55e" },
    { id: "transport", name: "🚗 Transport", color: "#3b82f6" },
    { id: "shopping", name: "🛍️ Shopping", color: "#f59e0b" },
    { id: "bills", name: "📄 Bills", color: "#ef4444" },
    { id: "entertainment", name: "🎬 Entertainment", color: "#8b5cf6" },
    { id: "health", name: "🏥 Health", color: "#06b6d4" },
    { id: "other", name: "📌 Other", color: "#64748b" },
  ];

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

  const saveExpenses = (newExpenses) => {
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
    setExpenses(newExpenses);
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (!newExpense.name || !newExpense.amount) return;

    const expense = {
      id: Date.now(),
      ...newExpense,
      amount: parseFloat(newExpense.amount),
    };
    saveExpenses([...expenses, expense]);
    setNewExpense({ ...newExpense, name: "", amount: "" });
  };

  const deleteExpense = (id) => {
    const updated = expenses.filter((exp) => exp.id !== id);
    saveExpenses(updated);
  };

  // Get yearly expenses
  const getYearlyExpenses = () => {
    const now = new Date();
    return expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getFullYear() === now.getFullYear();
    });
  };

  const yearlyExpenses = getYearlyExpenses();
  const yearlyTotal = yearlyExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  const getCategoryTotals = () => {
    const totals = {};
    categories.forEach((cat) => {
      totals[cat.id] = 0;
    });
    yearlyExpenses.forEach((exp) => {
      totals[exp.category] = (totals[exp.category] || 0) + exp.amount;
    });
    return totals;
  };

  const categoryTotals = getCategoryTotals();

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
      <Sidebar userName={userName} onLogout={handleLogout} />

      <main className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h1>Yearly Expenses</h1>
          <p>Track your expenses for this year</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Yearly Total</span>
              <span className={styles.statValue}>
                ${yearlyTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Transactions</span>
              <span className={styles.statValue}>{yearlyExpenses.length}</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📅</div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Average/Month</span>
              <span className={styles.statValue}>
                ${(yearlyTotal / 12).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Spending by Category</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((cat) => {
              const amount = categoryTotals[cat.id] || 0;
              const percentage =
                yearlyTotal > 0 ? (amount / yearlyTotal) * 100 : 0;
              return (
                <div key={cat.id} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <span className={styles.categoryName}>{cat.name}</span>
                    <span className={styles.categoryAmount}>
                      ${amount.toFixed(2)}
                    </span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: cat.color,
                      }}
                    />
                  </div>
                  <span className={styles.categoryPercent}>
                    {percentage.toFixed(1)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Add New Expense</h2>
          <form onSubmit={addExpense} className={styles.expenseForm}>
            <input
              type="text"
              placeholder="Expense name"
              value={newExpense.name}
              onChange={(e) =>
                setNewExpense({ ...newExpense, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: e.target.value })
              }
              required
            />
            <select
              value={newExpense.category}
              onChange={(e) =>
                setNewExpense({ ...newExpense, category: e.target.value })
              }
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={newExpense.date}
              onChange={(e) =>
                setNewExpense({ ...newExpense, date: e.target.value })
              }
            />
            <button type="submit">+ Add Expense</button>
          </form>
        </div>

        <div className={styles.section}>
          <h2>Recent Yearly Expenses</h2>
          {yearlyExpenses.length === 0 ? (
            <div className={styles.emptyState}>
              <span>📭</span>
              <p>No expenses this year</p>
            </div>
          ) : (
            <div className={styles.expensesList}>
              {yearlyExpenses.map((expense) => {
                const category = categories.find(
                  (c) => c.id === expense.category,
                );
                return (
                  <div key={expense.id} className={styles.expenseItem}>
                    <div className={styles.expenseInfo}>
                      <div
                        className={styles.expenseCategory}
                        style={{ backgroundColor: category?.color }}
                      >
                        {category?.name}
                      </div>
                      <span className={styles.expenseName}>{expense.name}</span>
                      <span className={styles.expenseDate}>{expense.date}</span>
                    </div>
                    <div className={styles.expenseActions}>
                      <span className={styles.expenseAmount}>
                        ${expense.amount.toFixed(2)}
                      </span>
                      <button
                        onClick={() => deleteExpense(expense.id)}
                        className={styles.deleteBtn}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function YearlyPage() {
  return (
    <ProtectedRoute>
      <YearlyContent />
    </ProtectedRoute>
  );
}
