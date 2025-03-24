package com.example.final_project.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "review")


public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private Integer userID;

    @Column(name = "productID", nullable = false)
    private Integer productID;

    @Column(name = "comment", nullable = false)
    private String comment;

    public Review(){}

    public Review(Integer userID, Integer productID, String comment) {
        this.userID = userID;
        this.productID = productID;
        this.comment = comment;
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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
