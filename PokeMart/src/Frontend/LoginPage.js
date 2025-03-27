import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import pokeballLogo from "../Images/Pokeball.png";
import userIcon from "../Images/icon.png";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userName, setUserName] = useState(""); // State for storing user name

    const handleLoginClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                email,
                password
            });

            console.log("Login Response:", response.data); // Debugging

            if (response.data.success) {
                localStorage.setItem("userName", response.data.userName); // Store username
                console.log("Stored userName:", localStorage.getItem("userName")); // Verify storage
                navigate("/home");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Check console for details.");
        }
    };

    return (
        <div className="LoginPage">
            <header className="header">
                <h2 className="username">{userName ? `Welcome, ${userName}!` : ""}</h2>
            </header>
            <img src={pokeballLogo} alt="Pokeball Logo" className="logo2" />
            <h1 className="h1">POKEMART</h1>
            <div className="loginPageContainer">
                <img src={userIcon} alt="User Icon" className="userIcon" />
                <div className="loginForm">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="errorMessage">{error}</p>}
                    <button className="loginButton" onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
