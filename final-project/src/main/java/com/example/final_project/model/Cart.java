package com.example.final_project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name = "cart")

public class Cart {

    @Id
    @Column(name = "userID")
    private Integer userID;

    @Id
    @Column(name = "productID")
    private Integer productID;

    @Column(name = "numOfProducts", nullable = false)
    private Integer numOfProducts;

    @Column(name = "totalPrice", nullable = false)
    private BigDecimal totalPrice;


    public Cart(){

    }

    public Cart(Integer userID, Integer numOfProducts, Integer productID, BigDecimal totalPrice) {
        this.userID = userID;
        this.numOfProducts = numOfProducts;
        this.productID = productID;
        this.totalPrice = totalPrice;
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

    public Integer getNumOfProducts() {
        return numOfProducts;
    }

    public void setNumOfProducts(Integer numOfProducts) {
        this.numOfProducts = numOfProducts;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }
}
