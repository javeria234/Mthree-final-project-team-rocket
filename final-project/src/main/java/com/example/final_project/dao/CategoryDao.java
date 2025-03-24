package com.example.final_project.dao;

import com.example.final_project.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryDao extends JpaRepository<Category, Integer> {
    List<Category> findByCategoryName(String categoryName);


}
