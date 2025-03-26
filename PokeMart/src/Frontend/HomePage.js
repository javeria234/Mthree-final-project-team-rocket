import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import cartLogo from "../Images/cart.png";

function HomePage() {
    const navigate = useNavigate();

    const handleFireClick = () => {
        navigate('/fire'); // Navigate to FireTypePage
    };

    return (
        <div className="home-container">
            <div className="logo-icons-container">
                <img src={pokeballLogo} alt="Pokeball Logo" className="logo3" />
                <div className="icons-right">
                    <img src={logoutLogo} alt="Logout Logo" className="logoutLogo" />
                    <img src={cartLogo} alt="Cart Logo" className="cartLogo" />
                </div>
            </div>
            <div className="pokeball-icon"></div>
            <div className="cart-icon"></div>
            <h2 className="h2">POKEMON SHOP</h2>
            <p className="subtitle">Choose your type!</p>
            <div className="options">
                <div className="option" onClick={handleFireClick}>Fire</div> {/* Add onClick */}
                <div className="option">Water</div>
                <div className="option">Grass</div>
            </div>
        </div>
    );
}

export default HomePage;