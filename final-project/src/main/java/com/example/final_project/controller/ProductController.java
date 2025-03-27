package com.example.final_project.controller;

import com.example.final_project.dao.CartDao;
import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Cart;
import com.example.final_project.model.Product;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Adjust as needed
public class ProductController {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private CartDao cartDao;

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable("categoryId") Integer categoryId) {
        return ResponseEntity.status(HttpStatus.OK).body(productDao.findByCategoryID(categoryId));
        /*List<Product> products = productDao.findByCategoryID(categoryId);
        List<String> productName = new ArrayList<>();
        for (Product product : products){
            productName.add(product.getProductName());
        }
        return ResponseEntity.ok(productName);*/
    }

    @GetMapping("/{productName}")
    public ResponseEntity<Product> getProductByName(@PathVariable("productName") String productName) {
        Product product= productDao.findByProductName(productName);
        return ResponseEntity.status(HttpStatus.FOUND).body(product);
    }


    //product.getProductPrice().multiply(BigDecimal.valueOf(cartItem.getNumOfProduct()))
    //Add to cart
    @PostMapping("/{productName}/{user_id}")
    public ResponseEntity<String> addProductToCart(@PathVariable("productName") String productName, @PathVariable("user_id") Integer user_id) {
        Product product= productDao.findByProductName(productName);
        Cart cartItem = new Cart();
        cartItem.setProductID(product.getProductID());
        cartItem.setNumOfProduct(1);
        cartItem.setUserID(user_id);
        cartItem.setTotalPrice(product.getProductPrice());
        cartDao.save(cartItem);
        return ResponseEntity.ok("Product added to cart!");
    }
}
