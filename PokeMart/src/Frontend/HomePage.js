import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import cartLogo from "../Images/cart.png";

function HomePage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        console.log("Retrieved userName from localStorage:", storedUserName); // Debugging

        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const handleFireClick = () => {
        navigate("/fire");
    };

    const handleLogout = () => {
        localStorage.removeItem("userName");
        navigate("/");
    };

    return (
        <div className="home-container">
            {/* Display username in top-left corner */}
            <div className="header">
                <h2 className="username">{userName ? `${userName}` : ""}</h2>
            </div>
            <div className="logo-icons-container">
                <img src={pokeballLogo} alt="Pokeball Logo" className="logo3" />
                <div className="icons-right">
                    <img src={logoutLogo} alt="Logout Logo" className="logoutLogo" />
                    <img src={cartLogo} alt="Cart Logo" className="cartLogo" />
                </div>
            </div>
            <h2 className="h2">POKEMON SHOP</h2>
            <p className="subtitle">Choose your type!</p>
            <div className="options">
                <div className="option" onClick={handleFireClick}>Fire</div>
                <div className="option">Water</div>
                <div className="option">Grass</div>
            </div>
        </div>
    );
}

export default HomePage;
