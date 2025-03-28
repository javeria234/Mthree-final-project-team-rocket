import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProductPage.css'; // Reuse same CSS
import pokeballLogo from "../Images/Pokeball.png";
import logoutLogo from "../Images/logout.png";

function AddProductForm() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        productName: '',
        productDesc: '',
        productPrice: '',
        stock: '',
        categoryID: '',
        image: null,
    });

    useEffect(() => {
        fetch("http://localhost:8080/api/user/category")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setProduct(prev => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("productName", product.productName);
        formData.append("productDesc", product.productDesc);
        formData.append("productPrice", product.productPrice);
        formData.append("stock", product.stock);
        formData.append("categoryID", product.categoryID);
        formData.append("image", product.image);

        try {
            const response = await fetch("http://localhost:8080/api/admin/products/create", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Product added successfully!");
                navigate("/admin");
            } else {
                alert("Failed to add product.");
            }
        } catch (err) {
            console.error("Error adding product:", err);
        }
    };

    const handleLogoutClick = () => {
        navigate("/");
    };

    return (
        <div className="editProductContainer">
            <img src={pokeballLogo} alt="Pokeball Logo" className="editProductLogo" />
            <h1 className="editProductTitle">POKEMON-SHOP</h1>
            <img src={logoutLogo} alt="Logout Logo" className="editProductLogout" onClick={handleLogoutClick} />

            <form className="productEditSection" onSubmit={handleSubmit}>
                <div className="editFormContent">
                    <div className="leftColumn">
                        <div className="productImage" style={{ backgroundColor: "white" }}>
                            {product.image ? (
                                <img
                                    src={URL.createObjectURL(product.image)}
                                    alt="Preview"
                                    className="productImage"
                                />
                            ) : (
                                <p style={{ color: "black" }}>No Image</p>
                            )}
                        </div>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="changeImageButton"
                            required
                        />
                    </div>
                    <div className="rightColumn">
                        <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Product Name"
                        />

                        <textarea
                            name="productDesc"
                            value={product.productDesc}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Description"
                        />

                        <input
                            type="number"
                            name="productPrice"
                            value={product.productPrice}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Price"
                        />

                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            required
                            className="inputField"
                            placeholder="Stock"
                        />

                        <select
                            name="categoryID"
                            value={product.categoryID}
                            onChange={handleChange}
                            required
                            className="inputField"
                        >
                            <option value="">Select Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.categoryID}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="saveButton">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
