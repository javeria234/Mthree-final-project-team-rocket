package com.example.final_project.controller;

import com.example.final_project.dao.CartDao;
import com.example.final_project.dao.ProductDao;
import com.example.final_project.model.Cart;
import com.example.final_project.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000") // Adjust as needed
public class CartController {

    @Autowired
    private CartDao cartDao;

    @GetMapping("/{userId}")
    public ResponseEntity<Optional<Cart>> getCartItems(@PathVariable Integer userId) {
        Optional<Cart> cartItems = cartDao.findByUserID(userId);
        return ResponseEntity.ok(cartItems);
    }
}