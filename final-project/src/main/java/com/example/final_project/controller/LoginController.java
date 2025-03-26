package com.example.final_project.controller;

import com.example.final_project.dao.UserDao;
import com.example.final_project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private UserDao userDao;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {

        User user = userDao.findByEmail(email);

        if (user != null) {
            if (user.getPassword().equals(password)) {
                return ResponseEntity.ok(new LoginResponse("Logged in as " + user.getRoleName(), true, user.getUserID()));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse("Invalid password", false, null));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse("User not found", false, null));
        }
    }

    // Inner class to represent the login response
    static class LoginResponse {
        private String message;
        private boolean success;
        private Integer userId;

        public LoginResponse(String message, boolean success, Integer userId) {
            this.message = message;
            this.success = success;
            this.userId = userId;
        }

        public String getMessage() {
            return message;
        }

        public boolean isSuccess() {
            return success;
        }

        public Integer getUserId() {
            return userId;
        }
    }
}
