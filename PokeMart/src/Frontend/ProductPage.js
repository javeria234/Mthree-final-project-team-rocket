import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductsByCategoryPage.css'
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";

function ProductPage() {
    const { productName } = useParams(); // Get product name from URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/product/${productName}`)
            .then(res => res.json())
            .then(data => {
                console.log("Product fetched:", data);
                setProduct(data);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
            });
    }, [productName]);

    const handleLogoutClick = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");
        navigate("/");
    };

    const increaseQty = () => setQuantity(prev => prev + 1);
    const decreaseQty = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

    if (!product) {
        return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading product...</p>;
    }

    return (
        <div className="productContainer">
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="productLogo" />
                <img src={logoutLogo} alt="Logout Logo" className="productLogout" onClick={handleLogoutClick} />
                <img src={cartLogo} alt="Cart Logo" className="productCart" />
            </div>
            <h1 className="productTitle">POKEMART</h1>
            <div className="productCard">
                <h3 className="productName">{product.productName}</h3>
                <div className="productImageContainer">
                    <img
                        src={`http://localhost:8080/images/${product.imageUrl}`}
                        alt={product.productName}
                        className="productImage"
                    />
                </div>
                <div className="productDescription">
                    <p>{product.productDesc}</p>
                    <p><strong>Price:</strong> ${product.productPrice}</p>
                    {product.stock < 5 && (
                      <p className="lowStockWarning">Only {product.stock} left in stock!</p>
                    )}
                </div>
                <div className="addToCartSection">
                    <div className="quantityControls">
                      <button
                        className="quantityButton"
                        onClick={decreaseQty}
                        disabled={quantity <= 0}
                      >
                        -
                      </button>

                      <span className="quantity">{quantity}</span>

                      <button
                        className="quantityButton"
                        onClick={increaseQty}
                        disabled={quantity >= product.stock}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="addToCartButton"
                      disabled={quantity === 0}
                    >
                      ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
