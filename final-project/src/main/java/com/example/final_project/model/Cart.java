package com.example.final_project.model;

import com.example.final_project.dao.ProductDao;
import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "shoppingcart")
@IdClass(CartId.class)
public class Cart {

    @Id
    @Column(name = "userID")
    private Integer userID;

    @Id
    @ManyToOne
    @JoinColumn(name = "productID", referencedColumnName = "productID")
    private Product product;

    @Column(name = "numOfProduct", nullable = false)
    private Integer numOfProduct;

    public Cart(){

    }

    public Cart(Integer userID, Integer numOfProduct, Product product, BigDecimal totalPrice) {
        this.userID = userID;
        this.numOfProduct = numOfProduct;
        this.product = product;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Integer productID) {
        this.product = product;
    }

    public Integer getNumOfProducts() {
        return numOfProduct;
    }

    public void setNumOfProducts(Integer numOfProducts) {
        this.numOfProduct = numOfProducts;
    }

    public BigDecimal getTotalPrice() {
        return product.getProductPrice().multiply(BigDecimal.valueOf(numOfProduct));
    }



}

