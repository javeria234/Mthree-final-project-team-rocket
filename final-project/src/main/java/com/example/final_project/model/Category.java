package com.example.final_project.model;

import jakarta.persistence.*;


@Entity
@Table(name = "category")

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoryID")
    private Integer categoryID;

    @Column(name = "productID", nullable = false)
    private Integer productID;

    @Column(name = "categoryName", nullable = false)
    private String categoryName;


    public Category(){}

    public Category(Integer categoryID, Integer productID, String categoryName) {
        this.categoryID = categoryID;
        this.productID = productID;
        this.categoryName = categoryName;
    }

    public Integer getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(Integer categoryID) {
        this.categoryID = categoryID;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Integer getProductID() {
        return productID;
    }

    public void setProductID(Integer productID) {
        this.productID = productID;
    }
}
