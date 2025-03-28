import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import RemoveConfirmationPage from './RemoveConfirmationPage';
import AddProductForm from './AddProductForm';
import axios from 'axios';

function AdminPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
    const [productToRemove, setProductToRemove] = useState(null);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {

        axios.get("http://localhost:8080/api/admin/products")
            .then(response => {
              setProducts(response.data);
            })
            .catch(error => {
              console.error("Error fetching products:", error);
            });
    }, []);



    const handleLogoutClick = () => {
        navigate("/login");
    };

    const handleEditClick = (productName) => {
        navigate(`/edit-product/${productName}`);
    };

    const handleRemoveClick = (productId) => {
        setProductToRemove(productId);
        setShowRemoveConfirmation(true);
    };

    const handleRemoveConfirmationYes = () => {
      axios.delete(`http://localhost:8080/api/admin/products/${productToRemove}`)
        .then(() => {
          // Refresh product list after deletion
          setProducts(prev => prev.filter(p => p.productName !== productToRemove));
          setShowRemoveConfirmation(false);
          setProductToRemove(null);
        })
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    };

    const handleRemoveConfirmationNo = () => {
        setShowRemoveConfirmation(false);
        setProductToRemove(null);
    };

    const handleAddProductClick = () => {
        navigate('/add-product'); // Navigate to AddProductForm page
    };

    const handleLogout = () => {
            localStorage.removeItem("userName");
            navigate("/");
        };

    return (
        <div className="adminContainer">
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="adminLogo1" />
                <img src={logoutLogo} alt="Logout Logo" className="adminLogout" onClick={handleLogoutClick} />
            </div>
            <h1 className="adminTitle1">POKEMART</h1>
            <h2 className="adminSubtitle">Products</h2>
            <button className="addProductButton" onClick={handleAddProductClick}>Add Product</button>
            <div className="adminProducts">
              {products.map(product => (
                <div key={product.productID} className="adminProduct">
                <h3 className="pokemonName">{product.productName}</h3>
                  <img
                    src={`http://localhost:8080/${product.imageUrl}`}
                    alt={product.productName}
                    className="productImage1"
                  />
                  <button className="editButton" onClick={() => handleEditClick(product.productName)}>Edit</button>
                  <button className="removeButton" onClick={() => handleRemoveClick(product.productName)}>Remove</button>
                </div>
              ))}
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