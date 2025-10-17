import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const result = await fetch("https://686d0b9d14219674dcca3598.mockapi.io/api/users");
      const users = await result.json();

      const matchedUser = users.find(
        (user) => user.myEmail === email && user.myPassword === password
      );

      if (matchedUser) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Login failed. Check your email or password.");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert("An error occurred during login.");
      console.error("Login error:", error);
    }
  }

  return (
    <div className="login-container">
      <label className="login-label">Enter Email</label>
      <input
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <label className="login-label">Enter Password</label>
      <input
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" />

      <button className="login-button" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default Login;
