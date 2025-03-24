package com.example.final_project.dao;

import com.example.final_project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao  extends JpaRepository<User, Integer> {
}
