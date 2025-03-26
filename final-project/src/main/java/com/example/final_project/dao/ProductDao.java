package com.example.final_project.dao;

import com.example.final_project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductDao extends JpaRepository <Product, Integer>{
    Product findByProductName(String productName);

    //void deleteByProductName(String productName);


}
