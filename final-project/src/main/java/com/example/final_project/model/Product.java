package com.example.final_project.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "product")
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productID")
    private Integer productID;

    @Column(name = "productName", nullable = false)
    private String productName;

    @Column(name = "productPrice", nullable = false)
    private BigDecimal productPrice;

    @Column(name = "productDesc", nullable = false)
    private String productDesc;

    @Column(name = "stock", nullable = false)
    private Integer stock;

    @Column(name = "categoryID", nullable = false)
    private Integer categoryID;

    @Column(name = "imageUrl", nullable = true)
    private String imageUrl;

    public Product(){

    }

    public Product(Integer productID, String productName, String productDesc, BigDecimal productPrice, Integer stock, Integer categoryID,String imageUrl) {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDesc = productDesc;
        this.stock = stock;
        this.categoryID = categoryID;
        this.imageUrl = imageUrl;

    }

    public Integer getProductID() {return productID;
    }

    public void setProductID(Integer productID) {
        this.productID = productID;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public Integer getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(Integer categoryID) {
        this.categoryID = categoryID;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
