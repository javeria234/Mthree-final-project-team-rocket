import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductsByCategoryPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import cartLogo from "../Images/cart.png";
import logoutLogo from "../Images/logout.png";
import axios from 'axios';

function ProductsByCategoryPage() {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8080/api/user/category")
            .then(res => {
                const categoryList = res.data;
                const matched = categoryList.find(cat => String(cat.categoryID) === categoryId);
                if (matched) setCategoryName(matched.categoryName);
            })
            .catch(err => console.error("Failed to load categories:", err));
    }, [categoryId]);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/api/products/category/${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [categoryId]);

    const handleCheckoutClick = (productName) => {
        navigate(`/product/${productName}`);
    };

    const handleHome= () => {
                navigate("/home");
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="pokemonTypeContainer">
            <div className="topBar">
            <button className="homeButton" onClick={handleHome}>
                HOME
            </button>
                <img src={pokeballLogo} alt="Pokeball Logo" className="pokemonTypeLogo" />
                <img src={logoutLogo} alt="Logout Logo" className="pokemonTypeLogout" onClick={handleLogoutClick} />
                <img src={cartLogo} alt="Cart Logo" className="pokemonTypeCart" onClick={() => navigate("/cart")} />
            </div>
            <h1 className="pokemonTypeTitle">POKEMART</h1>
            <h2 className="pokemonTypeSubtitle">Pokémon Type: {categoryName}</h2>

            <div className="categoryProducts">
                {loading ? (
                    <p className="noProductsMessage">Loading products...</p>
                ) : products.length === 0 ? (
                    <p className="noProductsMessage">No products available for the moment.</p>
                ) : (
                    products.map((product) => (
                        <div key={product.productID} className="categoryProduct">
                            <h3 className="pokemonName">{product.productName}</h3>
                            <div className="pokemonImageContainer">
                                <img
                                    src={`http://localhost:8080/${product.imageUrl}`}
                                    alt={product.productName}
                                    className={`pokemonImage ${product.stock === 0 ? "outOfStockImage" : ""}`}
                                />
                                {product.stock === 0 && <div className="outOfStockOverlay">Out of Stock</div>}
                            </div>
                            {product.stock > 0 ? (
                                <button className="checkOutButton" onClick={() => handleCheckoutClick(product.productName)}>
                                    Check it out
                                </button>
                            ) : (
                                <button className="checkOutButton disabledButton" disabled>
                                    Out of Stock
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductsByCategoryPage;
