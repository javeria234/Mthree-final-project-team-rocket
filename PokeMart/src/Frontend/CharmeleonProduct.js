import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirePage.css';
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import charmeleon from "../Images/charmeleon.png"; // You need to have an image for Charmeleon

function CharmeleonProduct() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCartClick = () => {
        if (quantity > 0) {
            navigate('/charmander-cart'); // Navigate to CartPage
        } else {
            alert("Please select a quantity greater than 0.");
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleLogoutClick = () => {
        console.log('Logout button clicked!');
    };

    return (
        <div className="productContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="productLogo" />
            <img src={logoutLogo} alt="Logout Logo" className="productLogout" onClick={handleLogoutClick} />
            <img src={cartLogo} alt="Cart Logo" className="productCart" />
            <h1 className="productTitle">POKEMON-SHOP</h1>
            <div className="productCard">
                <h3 className="productName">Charmeleon</h3>
                <div className="productImageContainer">
                    <img src={charmeleon} alt="Charmeleon" className="productImage" />
                </div>
                <div className="productDescription">
                    <p>This is a Charmeleon description</p>
                </div>
                <div className="addToCartSection">
                    <div className="quantityControls">
                        <button className="quantityButton" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantityButton" onClick={handleIncrement}>+</button>
                    </div>
                    <button className="addToCartButton" onClick={handleAddToCartClick}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default CharmeleonProduct;
