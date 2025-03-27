import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";
import charmeleon from "../Images/charmeleon.png";
import charizard from "../Images/charizard.png";
import RemoveConfirmationPage from './RemoveConfirmationPage';
import AddProductForm from './AddProductForm'; // Import AddProductForm

function AdminPage() {
    const navigate = useNavigate();
    const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
    const [productToRemove, setProductToRemove] = useState(null);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const handleLogoutClick = () => {
        console.log('Admin Logout button clicked!');
    };

    const handleEditClick = () => {
        navigate('/edit-product');
    };

    const handleRemoveClick = (productId) => {
        setProductToRemove(productId);
        setShowRemoveConfirmation(true);
    };

    const handleRemoveConfirmationYes = () => {
        console.log(`Removing product with ID: ${productToRemove}`);
        // Implement your remove logic here
        setShowRemoveConfirmation(false);
        setProductToRemove(null);
    };

    const handleRemoveConfirmationNo = () => {
        setShowRemoveConfirmation(false);
        setProductToRemove(null);
    };

    const handleAddProductClick = () => {
        navigate('/add-product'); // Navigate to AddProductForm page
    };

    return (
        <div className="adminContainer">
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="adminLogo1" />
                <img src={logoutLogo} alt="Logout Logo" className="adminLogout" onClick={handleLogoutClick} />
            </div>
            <h1 className="adminTitle1">POKEMON-SHOP</h1>
            <h2 className="adminSubtitle">Products</h2>
            <button className="addProductButton" onClick={handleAddProductClick}>Add Product</button>
            <div className="adminProducts">
                <div className="adminProduct">
                    <img src={charmander} alt="Charmander" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charmander')}>Remove</button>
                </div>
                <div className="adminProduct">
                    <img src={charmeleon} alt="Charmeleon" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charmeleon')}>Remove</button>
                </div>
                <div className="adminProduct">
                    <img src={charizard} alt="Charizard" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charizard')}>Remove</button>
                </div>
            </div>
            {showRemoveConfirmation && (
                <RemoveConfirmationPage
                    onYes={handleRemoveConfirmationYes}
                    onNo={handleRemoveConfirmationNo}
                />
            )}
        </div>
    );
}

export default AdminPage;