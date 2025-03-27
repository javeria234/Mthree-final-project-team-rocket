import React, { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import charmander from "../Images/charmander.png";
import charmeleon from "../Images/charmeleon.png";
import charizard from "../Images/charizard.png";
import RemoveConfirmationPage from './RemoveConfirmationPage'; // Import RemoveProductConfirmation

function AdminPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
    const [productToRemove, setProductToRemove] = useState(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        const userRole = localStorage.getItem("userRole");

        if (!storedUserName || userRole !== "Admin") {
            navigate("/login"); // Redirect unauthorized users
        } else {
            setUserName(storedUserName);
        }
    }, []);

    const handleLogoutClick = () => {
         navigate("/login");
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

    return (
        <div className="adminContainer">
        <div className="header">
            <h2 className="username">{userName ? `${userName}` : ""}</h2>
        </div>
            <div className="topBar">
                <img src={pokeballLogo} alt="Pokeball Logo" className="adminLogo" />
                <img src={logoutLogo} alt="Logout Logo" className="adminLogout" onClick={handleLogoutClick} />
            </div>
            <h1 className="adminTitle">POKEMON-SHOP</h1>
            <h2 className="adminSubtitle">Products</h2>
            <div className="adminProducts">
                <div className="adminProduct">
                    <img src={charmander} alt="Charmander" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit &gt;</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charmander')}>Remove &gt;</button>
                </div>
                <div className="adminProduct">
                    <img src={charmeleon} alt="Charmeleon" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit &gt;</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charmeleon')}>Remove &gt;</button>
                </div>
                <div className="adminProduct">
                    <img src={charizard} alt="Charizard" className="productImage1" />
                    <button className="editButton" onClick={handleEditClick}>Edit &gt;</button>
                    <button className="removeButton" onClick={() => handleRemoveClick('charizard')}>Remove &gt;</button>
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