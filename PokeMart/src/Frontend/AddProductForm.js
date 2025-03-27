// AddProductForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProductForm.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";

function AddProductForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, price, stock, image });
        navigate('/admin');
    };

    const handleLogoutClick = () => {
        console.log('Admin Logout button clicked!');
        navigate('/admin');
    };

    return (
        <div className="addProductFormContainer">
            <div className="formContent">
                <div className="topBar">
                    <div className="logoAndTitle">
                        <img src={pokeballLogo} alt="Pokeball Logo" className="adminLogo2" />
                        <h1 className="adminTitle2">POKEMON-SHOP</h1>
                    </div>
                    <img src={logoutLogo} alt="Logout Logo" className="adminLogout" onClick={handleLogoutClick} />
                </div>
                <div className="addProductFormBox">
                    <h2>Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

                        <label htmlFor="stock">Stock:</label>
                        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />

                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" onChange={handleImageChange} accept="image/*" required />

                        <div className="addProductPageButtons">
                            <button type="submit">Add Product</button>
                            <button type="button" onClick={() => navigate('/admin')}>Back to Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProductForm;