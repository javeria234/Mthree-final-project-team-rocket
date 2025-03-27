package com.example.final_project.model;

import com.example.final_project.dao.ProductDao;
import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "shoppingcart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartItemID")
    private Integer cartItemID;

    @Column (name = "userID", nullable = false)
    private Integer userID;

    @Column (name = "ProductID", nullable = false)
    private Integer productID;

    @Column(name = "numOfProduct", nullable = false)
    private Integer numOfProduct;

    @Column(name = "totalPrice", nullable = false)
    private BigDecimal totalPrice;

    public Cart(){

    }

    public Cart(Integer cartItemID, Integer userID, Integer numOfProduct, Integer productID, BigDecimal totalPrice) {
        this.cartItemID = cartItemID;
        this.userID = userID;
        this.numOfProduct = numOfProduct;
        this.productID = productID;
        this.totalPrice = totalPrice;

    }

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

    //product.getProductPrice().multiply(BigDecimal.valueOf(numOfProduct));
}

