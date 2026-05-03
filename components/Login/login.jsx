// app/login/page.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import styles from "./Auth.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Set cookie function
  const setCookie = (name, value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; path=/; expires=${expires.toUTCString()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find user
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (user) {
      // Set cookies
      setCookie("isAuthenticated", "true");
      setCookie("userName", user.name);
      setCookie("userEmail", user.email);
      setCookie("userId", user.id);

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  const handleGuestLogin = () => {
    // Set cookies for guest
    setCookie("isAuthenticated", "true");
    setCookie("userName", "Guest User");
    setCookie("userEmail", "guest@cashmind.com");
    setCookie("userId", "guest");

    router.push("/dashboard");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>Welcome Back 👋</h1>
            <p>Login to your account to continue</p>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className={styles.options}>
              <label className={styles.rememberMe}>
                <input type="checkbox" /> Remember me
              </label>
              <Link href="/forgot-password" className={styles.forgotPassword}>
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <button onClick={handleGuestLogin} className={styles.guestBtn}>
            Continue as Guest 🚀
          </button>

          <p className={styles.signupLink}>
            Don't have an account? <Link href="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
