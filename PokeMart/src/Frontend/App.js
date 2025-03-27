import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import pokeballLogo from '../Images/Pokeball.png';
import figurinesImage from '../Images/figurines_mainpage.png';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProductsByCategoryPage from './ProductsByCategoryPage';
import AdminPage from "./AdminPage";
import ProductPage from "./ProductPage";

function App() {
    const [showFigurines, setShowFigurines] = useState(false);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleShopNowClick = () => {
        setShowFigurines(true);
    };

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={
                    <div className="content">
                        <div className="logo-container">
                            <img src={pokeballLogo} alt="Pokemon Logo" className="logo" />
                            <button className="login" onClick={handleLoginClick}>LOG IN</button>
                        </div>
                        <h1 className="title">POKEMART</h1>
                        <div className="subBox">
                            <p className="sub">Get our figurines today</p>
                        </div>
                        <h2 className="catch">Gotta buy them all!</h2>
                        <div className="preview">
                            <img src={figurinesImage} alt="Pokemon Figurines Preview" />
                            <button className="shopButton" onClick={handleShopNowClick}>SHOP NOW</button>
                        </div>
                    </div>
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/category/:categoryId" element={<ProductsByCategoryPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/product/:productName" element={<ProductPage />} />
            </Routes>
        </div>
    );
}

function AppWithRouter() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWithRouter;