package com.mthree.final_project.model;

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

    public Product() {}

    public Product(){}






}
