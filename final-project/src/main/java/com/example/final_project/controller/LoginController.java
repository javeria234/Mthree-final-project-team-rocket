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
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        User user = userDao.findByEmail(loginRequest.getEmail());

        if (user != null) {
            if (user.getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.ok(new LoginResponse(
                        "Welcome " + user.getFName() + "!",
                        true,
                        user.getUserID(),
                        user.getFName() // Include the username
                ));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new LoginResponse("Invalid password", false, null, null));
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("User not found", false, null, null));
        }
    }

    // Inner class to represent the login response
    static class LoginResponse {
        private String message;
        private boolean success;
        private Integer userId;
        private String fName;

        public LoginResponse(String message, boolean success, Integer userId, String fName) {
            this.message = message;
            this.success = success;
            this.userId = userId;
            this.fName = fName;
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

        public String getfName() {
            return fName;
        }
    }

    static class LoginRequest {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }


    }
}
