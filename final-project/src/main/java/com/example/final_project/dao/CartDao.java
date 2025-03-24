package com.example.final_project.dao;

import com.example.final_project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartDao extends JpaRepository<Cart, Integer> {
}
