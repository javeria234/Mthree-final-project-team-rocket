package com.example.final_project.controller;

import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Adjust as needed
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<String>> getProductsByCategory(@PathVariable("categoryId") Integer categoryId) {
        List<Product> products = productDao.findByCategoryID(categoryId);
        List<String> productName = new ArrayList<>();
        for (Product product : products){
            productName.add(product.getProductName());
        }
        return ResponseEntity.ok(productName);
    }

    @GetMapping("/product/{productName}")
    public ResponseEntity<Product> getProductByName(@PathVariable("productName") String productName) {
        Product product= productDao.findByProductName(productName);
        return ResponseEntity.ok(product);
    }
}
