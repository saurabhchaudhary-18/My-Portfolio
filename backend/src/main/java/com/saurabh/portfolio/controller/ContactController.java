
package com.saurabh.portfolio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5500")
public class ContactController {

    /*
     * Test endpoint
     *
     * URL:
     * GET http://localhost:8080/api/contact
     */
    @GetMapping
    public ResponseEntity<String> getContactStatus() {

        return ResponseEntity.ok(
                "Contact API is working!"
        );
    }


    /*
     * Contact form endpoint
     *
     * This will later receive:
     * name
     * email
     * message
     *
     * URL:
     * POST http://localhost:8080/api/contact
     */
    @PostMapping
    public ResponseEntity<String> submitContact(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String message) {

        return ResponseEntity.ok(
                "Thank you " + name +
                "! Your message has been received."
        );
    }
}
