package com.example.final_project.controller;

import com.example.final_project.dao.CategoryDao;
import com.example.final_project.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class CategoryController {

    @Autowired
    private CategoryDao categoryDao;

    @GetMapping("/category")
    public ResponseEntity<List<String>> getCategories(){

        List<Category> categoryList = categoryDao.findAll();
        List<String> categoryNames = new java.util.ArrayList<>(List.of());

        for (Category category : categoryList){
            categoryNames.add(category.getCategoryName());

        }
        return ResponseEntity.status(HttpStatus.OK).body(categoryNames);

    }




}
