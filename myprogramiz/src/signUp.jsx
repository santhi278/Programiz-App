import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const day = new Date();
  const date = day.toLocaleDateString();
  const time = day.toLocaleTimeString();
  const navigate = useNavigate();

  async function handleUser() {
    if (!name || !email || !number || !password) {
      alert("Please fill all fields.");
      return;
    }

    const formData = {
      myName: name,
      myEmail: email,
      myNumber: number,
      myPassword: password,
      createDate: date,
      createTime: time,
    };

    try {
      const response = await fetch(
        "https://686d0b9d14219674dcca3598.mockapi.io/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Account created successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
        navigate("/login");
      } else {
        alert("Failed to create account.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Sign-up error:", error);
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create Account</h2>

      <label className="signup-label">Enter Name</label>
      <input className="signup-input" value={name} onChange={(e) => setName(e.target.value)} type="text" />

      <label className="signup-label">Enter Email</label>
      <input className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

      <label className="signup-label">Enter Number</label>
      <input className="signup-input" value={number} onChange={(e) => setNumber(e.target.value)} type="tel" />

      <label className="signup-label">Enter Password</label>
      <input className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

      <button className="signup-button" onClick={handleUser}>Sign Up</button>
    </div>
  );
}

export default SignUp;
