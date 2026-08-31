
package com.saurabh.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5500")
public class ProfileController {

    /*
     * Test endpoint
     *
     * URL:
     * GET http://localhost:8080/api/profile
     */
    @GetMapping
    public ResponseEntity<String> getProfile() {

        return ResponseEntity.ok(
                "Saurabh Singh - Java & Spring Boot Backend Developer"
        );
    }
}
