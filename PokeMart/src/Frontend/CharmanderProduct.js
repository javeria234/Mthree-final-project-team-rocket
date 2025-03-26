import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirePage.css'; // Renamed CSS file to ProductPage.css
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";

function ProductPage() {
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        navigate('/charmander-details');
    };

    const handleLogoutClick = () => {
        console.log('Logout button clicked!');
    };

    return (
        <div className="productContainer">
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="productLogo" />
                <img src={logoutLogo} alt="Logout Logo" className="productLogout" onClick={handleLogoutClick} />
                <img src={cartLogo} alt="Cart Logo" className="productCart" />
            </div>
            <h1 className="productTitle">POKEMON-SHOP</h1>
            <div className="productCard">
                <h3 className="productName">Charmander</h3>
                <div className="productImageContainer">
                    <img src={charmander} alt="Charmander" className="productImage" />
                </div>
                <div className="productDescription">
                    <p>This is a Charmander description</p>
                </div>
                <div className="addToCartSection">
                    <div className="quantityControls">
                        <button className="quantityButton">-</button>
                        <span className="quantity">0</span>
                        <button className="quantityButton">+</button>
                    </div>
                    <button className="addToCartButton">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;