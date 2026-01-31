import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/login.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://mindmine-academy.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
        toast.success("Logged in successfully!");
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(p => !p)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24">
                <path d="M3 3l18 18" />
                <path d="M10.58 10.58a2 2 0 002.83 2.83" />
                <path d="M9.24 5.09A10.94 10.94 0 0112 5c5 0 9.27 3.11 11 7-1 2.3-2.7 4.23-4.86 5.54" />
                <path d="M6.61 6.61C4.62 7.86 3.06 9.79 2 12c1.73 3.89 6 7 10 7 1.04 0 2.05-.16 3-.46" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        <button disabled={loading} className="login-btn">
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
