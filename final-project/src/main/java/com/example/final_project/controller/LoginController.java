package com.example.final_project.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        // For now, we'll use a simple hardcoded validation
        if ("admin".equals(username) && "password".equals(password)) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }

}
