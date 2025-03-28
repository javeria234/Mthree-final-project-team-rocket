package com.example.final_project.controller;

import com.example.final_project.dao.CategoryDao;
import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
    public ResponseEntity<Product> createProduct(
            @RequestParam("productName") String productName,
            @RequestParam("productDesc") String productDesc,
            @RequestParam("productPrice") BigDecimal productPrice,
            @RequestParam("stock") Integer stock,
            @RequestParam("categoryID") Integer categoryID,
            @RequestParam("image") MultipartFile image
    ) {
        try {
            String uploadDir = "C:/Users/promo/final-project-team-rocket/final-project/imageUploads";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = image.getOriginalFilename();
            assert fileName != null;
            Path filePath = uploadPath.resolve(fileName);
            Files.write(filePath, image.getBytes());

            Product product = new Product();
            product.setProductName(productName);
            product.setProductDesc(productDesc);
            product.setProductPrice(productPrice);
            product.setStock(stock);
            product.setCategoryID(categoryID);
            product.setImageUrl(fileName);

            productDao.save(product);
            return ResponseEntity.status(HttpStatus.CREATED).body(product);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/products/edit/{product_name}")
    public ResponseEntity<Product> editProduct(
            @PathVariable String product_name,
            @RequestParam("productName") String newName,
            @RequestParam("productDesc") String productDesc,
            @RequestParam("productPrice") BigDecimal productPrice,
            @RequestParam("stock") Integer stock,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        Optional<Product> product = Optional.ofNullable(productDao.findByProductName(product_name));
        if (product.isPresent()) {
            Product oldProduct = product.get();

            // Update fields
            oldProduct.setProductName(newName);
            oldProduct.setProductDesc(productDesc);
            oldProduct.setProductPrice(productPrice);
            oldProduct.setStock(stock);

            if (image != null && !image.isEmpty()) {
                try {
                    String uploadDir = "C:/Users/promo/final-project-team-rocket/final-project/imageUploads";
                    Path uploadPath = Paths.get(uploadDir);
                    if (!Files.exists(uploadPath)) {
                        Files.createDirectories(uploadPath);
                    }
                    String fileName = image.getOriginalFilename();
                    assert fileName != null;
                    Path filePath = uploadPath.resolve(fileName);
                    Files.write(filePath, image.getBytes());
                    oldProduct.setImageUrl(fileName);
                } catch (IOException e) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
                }
            }

            Product editedProduct = productDao.save(oldProduct);
            return new ResponseEntity<>(editedProduct, HttpStatus.OK);
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
