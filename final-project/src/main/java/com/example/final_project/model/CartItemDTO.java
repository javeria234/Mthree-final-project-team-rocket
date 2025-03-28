package com.example.final_project.model;

import java.math.BigDecimal;

public class CartItemDTO {

    private Integer cartItemID;
    private Integer userID;
    private Integer productID;
    private Integer numOfProduct;
    private BigDecimal totalPrice;
    private String productName;
    private String imageUrl;

    public CartItemDTO() {}

    public CartItemDTO(Integer cartItemID, Integer userID, Integer productID, Integer numOfProduct, BigDecimal totalPrice, String productName, String imageUrl) {
        this.cartItemID = cartItemID;
        this.userID = userID;
        this.productID = productID;
        this.numOfProduct = numOfProduct;
        this.totalPrice = totalPrice;
        this.productName = productName;
        this.imageUrl = imageUrl;
    }

    // Getters and setters

    public Integer getCartItemID() {
        return cartItemID;
    }

    public void setCartItemID(Integer cartItemID) {
        this.cartItemID = cartItemID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Integer getProductID() {
        return productID;
    }

    public void setProductID(Integer productID) {
        this.productID = productID;
    }

    public Integer getNumOfProduct() {
        return numOfProduct;
    }

    public void setNumOfProduct(Integer numOfProduct) {
        this.numOfProduct = numOfProduct;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
