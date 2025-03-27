package com.example.final_project.dao;

import com.example.final_project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {

    Optional<Cart> findByUserID(Integer userID);


}
