package com.example.final_project.controller;

import com.example.final_project.dao.CartDao;
import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Cart;
import com.example.final_project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.*;

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
        List<Product> products = productDao.findByCategoryID(categoryId);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/product/{productName}")
    public ResponseEntity<Product> getProductByName(@PathVariable("productName") String productName) {
        Product product= productDao.findByProductName(productName);
        return ResponseEntity.ok(product);
    }

    //Add to cart
    @PostMapping("/{productName}/{user_id}")
    public ResponseEntity<String> addProductToCart(
            @PathVariable("productName") String productName,
            @PathVariable("user_id") Integer user_id,
            @RequestBody Map<String, Integer> request) {

        Integer quantity = request.get("quantity");

        Product product = productDao.findByProductName(productName);
        if (product == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found.");
        }

        Optional<Cart> existingCartItem = cartDao.findAll().stream()
                .filter(c -> Objects.equals(c.getUserID(), user_id) && Objects.equals(c.getProductID(), product.getProductID()))
                .findFirst();

        if (existingCartItem.isPresent()) {
            Cart cartItem = existingCartItem.get();
            cartItem.setNumOfProduct(cartItem.getNumOfProduct() + quantity);
            cartItem.setTotalPrice(product.getProductPrice().multiply(BigDecimal.valueOf(cartItem.getNumOfProduct())));
            cartDao.save(cartItem);
        } else {
            // Add new cart item
            Cart newCartItem = new Cart();
            newCartItem.setProductID(product.getProductID());
            newCartItem.setNumOfProduct(quantity);
            newCartItem.setUserID(user_id);
            newCartItem.setTotalPrice(product.getProductPrice().multiply(BigDecimal.valueOf(quantity)));
            cartDao.save(newCartItem);
        }

        return ResponseEntity.ok("Product added to cart!");
    }

}
