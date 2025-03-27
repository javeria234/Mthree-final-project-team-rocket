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
        setLoading(true); // Start loading
        fetch(`http://localhost:8080/api/products/category/${categoryId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Products:", data);
                setProducts(data);
                setLoading(false); // Done loading
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [categoryId]);

    const handleCheckoutClick = (productName) => {
        navigate(`/product/${productName}`);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");
        navigate("/");
    };

    return (
        <div className="pokemonTypeContainer">
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="pokemonTypeLogo" />
                <img src={logoutLogo} alt="Logout Logo" className="pokemonTypeLogout" onClick={handleLogoutClick} />
                <img src={cartLogo} alt="Cart Logo" className="pokemonTypeCart" />
            </div>
            <h1 className="pokemonTypeTitle">POKEMART</h1>
            <h2 className="pokemonTypeSubtitle">Pokèmon Type: {categoryName}</h2>

            <div className="pokemonGrid">
                {loading ? (
                    <p className="noProductsMessage">Loading products...</p>
                ) : products.length === 0 ? (
                    <p className="noProductsMessage">No products available for the moment.</p>
                ) : (
                    products.map((product) => (
                        <div key={product.productID} className="pokemonCard">
                            <h3 className="pokemonName">{product.productName}</h3>
                            <div className="pokemonImageContainer">
                                <img
                                    src={`http://localhost:8080/images/${product.imageUrl}`}
                                    alt={product.productName}
                                    className="pokemonImage"
                                />
                            </div>
                            <button className="checkOutButton" onClick={() => handleCheckoutClick(product.productName)}>
                                Check it out
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductsByCategoryPage;
