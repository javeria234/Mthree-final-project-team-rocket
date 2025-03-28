import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditProductPage.css';
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";
import ConfirmationPage from './SaveConfirmationPage';

function EditProductPage() {
    const { productName } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({
        productName: '',
        productDesc: '',
        productPrice: '',
        stock: '',
        image: null,
    });
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/api/admin/products/${productName}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setEditedProduct({
                    productName: data.productName,
                    productDesc: data.productDesc,
                    productPrice: data.productPrice,
                    stock: data.stock,
                    image: null,
                });
            })
            .catch(err => console.error(err));
    }, [productName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setEditedProduct(prev => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("productName", editedProduct.productName);
        formData.append("productDesc", editedProduct.productDesc);
        formData.append("productPrice", editedProduct.productPrice);
        formData.append("stock", editedProduct.stock);
        if (editedProduct.image) {
            formData.append("image", editedProduct.image);
        }

        try {
            const response = await fetch(`http://localhost:8080/api/admin/products/edit/${productName}`, {
                method: "PUT",
                body: formData,
            });

            if (response.ok) {
                setShowConfirmation(true);
            } else {
                alert("Failed to edit product");
            }
        } catch (err) {
            console.error("Error editing product:", err);
        }
    };

    const handleLogoutClick = () => {
        navigate("/");
    };

    const handleConfirmationYes = () => {
        setShowConfirmation(false);
        navigate('/admin');
    };

    const handleConfirmationNo = () => {
        setShowConfirmation(false);
    };

    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
        <div className="editProductContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="editProductLogo" />
            <h1 className="editProductTitle">POKEMON-SHOP</h1>
            <img src={logoutLogo} alt="Logout Logo" className="editProductLogout" onClick={handleLogoutClick} />

            <form className="productEditSection" onSubmit={handleSubmit}>
                <div className="editFormContent">
                    <div className="leftColumn">
                        <img
                            src={`http://localhost:8080/${product.imageUrl}`}
                            alt={product.productName}
                            className="productImage"
                        />
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="changeImageButton"
                        />
                    </div>
                    <div className="rightColumn">
                        <input
                            type="text"
                            name="productName"
                            value={editedProduct.productName}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Product Name"
                        />

                        <textarea
                            name="productDesc"
                            value={editedProduct.productDesc}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Description"
                        />

                        <input
                            type="number"
                            name="productPrice"
                            value={editedProduct.productPrice}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Price"
                        />

                        <input
                            type="number"
                            name="stock"
                            value={editedProduct.stock}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Stock"
                        />
                    </div>
                </div>
                <button type="submit" className="saveButton">Save</button>
            </form>

            {showConfirmation && (
                <ConfirmationPage
                    onYes={handleConfirmationYes}
                    onNo={handleConfirmationNo}
                />
            )}
        </div>
    );
}

export default EditProductPage;
