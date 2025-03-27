import React, { useState } from 'react';
import './CartPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";

function CartPage() {
    const [quantity, setQuantity] = useState(1);
    const price = 10.99;
    const total = quantity * price;

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
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
                <div className="productImageContainer">
                    <img src={charmander} alt="Charmander" className="productImage" />
                </div>
                <div className="productDescription">
                    <p>Charmander</p>
                    <div className="quantityControls">
                        <button className="quantityButton" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantityButton" onClick={handleIncrement}>+</button>
                    </div>
                    <span>£{price.toFixed(2)}</span>
                </div>
                <div className="addToCartSection">
                    <span className="totalLabel">Total</span>
                    <span className="totalPrice">£{total.toFixed(2)}</span>
                </div>
                <button className="checkOutButton">CHECKOUT</button>
            </div>
        </div>
    );
}

export default CartPage;
