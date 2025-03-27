import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProductPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";
import ConfirmationPage from './SaveConfirmationPage'; // Updated import

function EditProductPage() {
    const [quantity, setQuantity] = useState(0);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

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

    const handleSaveClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmationYes = () => {
        setShowConfirmation(false);
        navigate('/admin');
    };

    const handleConfirmationNo = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="editProductContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="editProductLogo" />
            <h1 className="editProductTitle">POKEMON-SHOP</h1>
            <img src={logoutLogo} alt="Logout Logo" className="editProductLogout" onClick={handleLogoutClick} />

            <div className="productEditSection">
                <div className="productImageEdit">
                    <img src={charmander} alt="Charmander" className="productImage" />
                    <div className="quantityControls">
                        <button className="quantityButton" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantityButton" onClick={handleIncrement}>+</button>
                    </div>
                    <button className="changeImageButton">Change Image</button>
                    <button className="saveButton" onClick={handleSaveClick}>Save</button>
                </div>
            </div>
            {showConfirmation && (
                <ConfirmationPage // Updated component name
                    onYes={handleConfirmationYes}
                    onNo={handleConfirmationNo}
                />
            )}
        </div>
    );
}

export default EditProductPage;