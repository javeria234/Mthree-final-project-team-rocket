import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "./HomePage.css";
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import cartLogo from "../Images/cart.png";

function HomePage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [categories, setCategories] = useState([]); // Store category names

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            setUserName(storedUserName);
        }

        // Fetch categories from backend
        axios.get("http://localhost:8080/api/user/category")
                .then((response) => {
                    setCategories(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching categories:", error);
                });
        }, []);

    const handleCategoryClick = (categoryName) => {
        navigate(`/${categoryName.toLowerCase()}`); // Navigate dynamically
    };

    const handleLogout = () => {
        localStorage.removeItem("userName");
        navigate("/");
    };

    return (
        <div className="home-container">
            <div className="header">
                <h2 className="username">{userName ? `${userName}` : ""}</h2>
            </div>
            <div className="logo-icons-container">
                <img src={pokeballLogo} alt="Pokeball Logo" className="logo3" />
                <div className="icons-right">
                    <img src={logoutLogo} alt="Logout Logo" className="logoutLogo" onClick={handleLogout} />
                    <img src={cartLogo} alt="Cart Logo" className="cartLogo" />
                </div>
            </div>
            <h2 className="h2">POKEMART</h2>
            <p className="subtitle">Choose your type!</p>
            <div className="options">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div
                            key={category.categoryID}
                            className="option"
                            onClick={() => navigate(`/category/${category.categoryID}`)}
                        >
                            {category.categoryName}
                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;
