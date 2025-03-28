import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import axios from 'axios';

function CartPage() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/cart/${userId}`);
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate("/");
    };

    const handleCheckout = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/cart/${userId}`);
            alert("Checkout successful!");
            setCartItems([]);
        } catch (error) {
            console.error("Checkout error:", error);
        }
    };

    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

    return (
        <div className="productContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="productLogo" />
            <img src={logoutLogo} alt="Logout Logo" className="productLogout" onClick={handleLogoutClick} />
            <h1 className="productTitle">Your Cart</h1>

            <div className="productCard">
                {cartItems.length > 0 ? (
                    <>
                        <div className="cartHeaders">
                            <span className="headerImage">Pokemon</span>
                            <span className="headerQuantity">Quantity</span>
                            <span className="headerTotal">Total</span>
                        </div>

                        {cartItems.map(item => (
                            <div key={item.cartItemID} className="cartItemRow">
                                <img
                                    src={`http://localhost:8080/${item.imageUrl}`}
                                    alt={item.productName}
                                    className="cartItemImage"
                                />
                                <span className="cartItemName">{item.productName}</span>
                                <span className="cartItemQuantity">{item.numOfProduct}</span>
                                <span className="cartItemTotal">£{item.totalPrice.toFixed(2)}</span>
                            </div>
                        ))}

                        <div className="addToCartSection">
                            <span className="totalLabel"><strong>Total:</strong></span>
                            <span className="totalPrice">£{total.toFixed(2)}</span>
                        </div>

                        <button className="checkOutButton" onClick={handleCheckout}>
                            CHECKOUT
                        </button>
                    </>
                ) : <p>No items in your cart.</p>}
            </div>
        </div>
    );
}

export default CartPage;
