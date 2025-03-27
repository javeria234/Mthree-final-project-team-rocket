import React, { useState } from 'react';
<<<<<<<< HEAD:PokeMart/src/Frontend/CartPage.js
import './CartPage.css';
========
import { useNavigate } from 'react-router-dom';
import './FirePage.css';
>>>>>>>> a1a8766ba291dca79bdd490ac483173d31272edc:PokeMart/src/Frontend/CharmanderProduct.js
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";

<<<<<<<< HEAD:PokeMart/src/Frontend/CartPage.js
function CartPage() {
    const [quantity, setQuantity] = useState(1);
    const price = 10.99;
    const total = quantity * price;

========
function ProductPage() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCartClick = () => {
        if (quantity > 0) {
            navigate('/charmander-cart'); // Navigate to CartPage
        } else {
            alert("Please select a quantity greater than 0.");
        }
    };

>>>>>>>> a1a8766ba291dca79bdd490ac483173d31272edc:PokeMart/src/Frontend/CharmanderProduct.js
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
<<<<<<<< HEAD:PokeMart/src/Frontend/CartPage.js
        if (quantity > 1) {
========
        if (quantity > 0) {
>>>>>>>> a1a8766ba291dca79bdd490ac483173d31272edc:PokeMart/src/Frontend/CharmanderProduct.js
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
<<<<<<<< HEAD:PokeMart/src/Frontend/CartPage.js
                    <span className="totalLabel">Total</span>
                    <span className="totalPrice">£{total.toFixed(2)}</span>
========
                    <div className="quantityControls">
                        <button className="quantityButton" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantityButton" onClick={handleIncrement}>+</button>
                    </div>
                    <button className="addToCartButton" onClick={handleAddToCartClick}>ADD TO CART</button>
>>>>>>>> a1a8766ba291dca79bdd490ac483173d31272edc:PokeMart/src/Frontend/CharmanderProduct.js
                </div>
                <button className="checkOutButton">CHECKOUT</button>
            </div>
        </div>
    );
}

<<<<<<<< HEAD:PokeMart/src/Frontend/CartPage.js
export default CartPage;
========
export default ProductPage;
>>>>>>>> a1a8766ba291dca79bdd490ac483173d31272edc:PokeMart/src/Frontend/CharmanderProduct.js
