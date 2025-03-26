package com.example.final_project.dao;

import com.example.final_project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDao extends JpaRepository <Product, Integer>{
    List<Product> findByCategoryID(Integer categoryID);
    Product findByProductName(String productName);
}
