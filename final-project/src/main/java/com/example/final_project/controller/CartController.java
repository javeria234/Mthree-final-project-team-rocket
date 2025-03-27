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
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:3000") // Adjust as needed
public class CartController {

    @Autowired
    private CartDao cartDao;

    @Autowired
    private ProductDao productDao;

    @GetMapping("/{userId}")
    public ResponseEntity<List<Cart>>getCartItemsByUserID(@PathVariable Integer userId) {
        List<Cart> allItems = cartDao.findAll();
        List<Cart> userItems = new ArrayList<>();
        for(Cart item : allItems){
            if(Objects.equals(item.getUserID(), userId)){
                userItems.add(item);
            }
        }
        return ResponseEntity.ok(userItems);
    }

    @GetMapping("/{userId}/{productId}")
    public ResponseEntity<Cart> getOneCartItem(@PathVariable Integer userId, @PathVariable Integer productId) {
        List<Cart> allItems = cartDao.findAll();
        List<Cart> userItems = new ArrayList<>();
        for(Cart item : allItems){
            if(Objects.equals(item.getUserID(), userId)){
               if(Objects.equals(item.getProductID(), productId)){
                   return ResponseEntity.ok(item);
               }
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

   @PutMapping("/{userId}/{productId}")
    public ResponseEntity<Cart> changeNumOfProducts(@PathVariable Integer userId, @PathVariable Integer productId, @RequestBody Cart editItem){

       Optional<Product> oProduct = productDao.findById(productId);
       if(oProduct.isPresent()){
           Product product = oProduct.get();

           List<Cart> allItems = cartDao.findAll();
           List<Cart> userItems = new ArrayList<>();
           for(Cart item : allItems){
               if(Objects.equals(item.getUserID(), userId)){
                   if(Objects.equals(item.getProductID(), productId)){
                       if(editItem.getNumOfProduct() != null){
                           item.setNumOfProduct(editItem.getNumOfProduct());
                           item.setTotalPrice(product.getProductPrice().multiply(BigDecimal.valueOf(item.getNumOfProduct())));
                       }
                       item.setCartItemID(item.getCartItemID());

                       Cart newItem = cartDao.save(item);
                       return new ResponseEntity<Cart>(newItem, HttpStatus.OK);

                   }
               }
           }
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);

       }
       else{
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }





    }

    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<Void> removeCartItem(@PathVariable Integer userId, @PathVariable Integer productId){

        List<Cart> allItems = cartDao.findAll();
        List<Cart> userItems = new ArrayList<>();
        for(Cart item : allItems){
            if(Objects.equals(item.getUserID(), userId)){
                if(Objects.equals(item.getProductID(), productId)){
                    cartDao.deleteById(item.getCartItemID());
                    return new ResponseEntity<Void>(HttpStatus.OK);
                }
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);


    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> checkout(@PathVariable Integer userId){
        Integer stockTaker = 0;
        List<Cart> allItems = cartDao.findAll();

        for(Cart item : allItems){
            Optional<Product> oProduct = productDao.findById(item.getProductID());
            if(Objects.equals(item.getUserID(), userId)){
                cartDao.deleteById(item.getCartItemID());
                stockTaker = item.getNumOfProduct();
            }
            if (oProduct.isPresent()){
                Product product = oProduct.get();
                product.setStock(product.getStock() - stockTaker);
                product.setProductID(product.getProductID());
                Product newProduct = productDao.save(product);
            }
        }

        return new ResponseEntity<Void>(HttpStatus.OK);
    }



}