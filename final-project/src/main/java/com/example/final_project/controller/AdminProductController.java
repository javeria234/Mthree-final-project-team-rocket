package com.example.final_project.controller;

import com.example.final_project.dao.CategoryDao;
import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminProductController {

    @Autowired
    private ProductDao productDao;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.status(HttpStatus.OK).body(productDao.findAll());
    }

    @GetMapping("/products/{product_name}")
    public ResponseEntity<Product> getProductByName(@PathVariable String product_name){
        return ResponseEntity.status(HttpStatus.FOUND).body(productDao.findByProductName(product_name));
    }

    @PostMapping("/products/create")
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        productDao.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);

    }

    @PutMapping("/products/edit/{product_name}")
    public ResponseEntity<Product> editProduct(@PathVariable String product_name, @RequestBody Product editInfo){
        Optional<Product> product = Optional.ofNullable(productDao.findByProductName(product_name));
        if(product.isPresent()) {
            Product oldProduct = product.get();
            if(editInfo.getProductName() != null){
                oldProduct.setProductName(editInfo.getProductName());
            }
            if(editInfo.getProductDesc() != null){
                oldProduct.setProductDesc(editInfo.getProductDesc());
            }
            if(editInfo.getProductPrice() != null){
                oldProduct.setProductPrice(editInfo.getProductPrice());
            }
            if(editInfo.getStock() != null){
                oldProduct.setStock(editInfo.getStock());
            }

            oldProduct.setProductID(oldProduct.getProductID()); //STOPS INCREMENT

            Product editProduct = productDao.save(oldProduct);

            return new ResponseEntity<Product>(editProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/products/{product_name}")
    public ResponseEntity<Void> removeProduct(@PathVariable String product_name){
        Product product = productDao.findByProductName(product_name);
        productDao.deleteById(product.getProductID());
        return new ResponseEntity<Void>(HttpStatus.OK);
    }












}
