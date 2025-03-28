import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProductPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import axios from "axios";


function ProductPage() {
    const { productName } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/product/${productName}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching product:", err));
    }, [productName]);

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate("/");
    };

    const increaseQty = () => {
        if (quantity < product.stock) {
            setQuantity(prev => prev + 1);
        }
    };

    const decreaseQty = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = async () => {
        if (quantity === 0) {
            alert("Please select at least one item to add to cart.");
            return;
        }

        const userId = localStorage.getItem('userId');

        try {
            const response = await axios.post(`http://localhost:8080/api/products/${product.productName}/${userId}`, {
                quantity: quantity
            });

            if (response.status === 200) {
                alert("Product successfully added to cart!");
            } else {
                alert("Failed to add product to cart.");
            }

        } catch (err) {
            console.error("Error adding to cart:", err);
            alert("An error occurred while adding product to cart.");
        }
    };



    if (!product) {
        return <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>Loading product...</p>;
    }

    return (
        <div className="editProductContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="editProductLogo" />
            <img src={logoutLogo} alt="Logout Logo" className="editProductLogout" onClick={handleLogoutClick} />
            <img src={cartLogo} alt="Cart Logo" className="editProductCart" onClick={() => navigate('/cart')} />
            <h1 className="editProductTitle">POKEMART</h1>

            <div className="productEditSection">
                <div className="editFormContent">
                    <div className="leftColumn">
                        <img
                            src={`http://localhost:8080/${product.imageUrl}`}
                            alt={product.productName}
                            className="productImage"
                        />

                        <div className="quantityControls">
                            <button className="qtyBtnSmall" onClick={decreaseQty} disabled={quantity <= 0}>-</button>
                            <span className="qtyDisplaySmall">{quantity}</span>
                            <button className="qtyBtnSmall" onClick={increaseQty} disabled={quantity >= product.stock}>+</button>
                        </div>

                        <button className="saveButton" onClick={handleAddToCart} disabled={quantity === 0}>
                            Add to Cart
                        </button>
                    </div>

                    <div className="rightColumn">
                        <h2 style={{ marginBottom: "10px" }}>{product.productName}</h2>
                        <textarea
                            className="inputField"
                            value={product.productDesc}
                            readOnly
                        />
                        <input
                            className="inputField"
                            type="text"
                            value={`Price: $${product.productPrice}`}
                            readOnly
                        />
                        {product.stock < 5 && (
                            <p style={{ color: "yellow", fontWeight: "bold", marginTop: "10px" }}>
                                Only {product.stock} left in stock!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductPage;
