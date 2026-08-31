
package com.saurabh.portfolio.service;

import org.springframework.stereotype.Service;

@Service
public class ContactService {

    /*
     * This method will handle contact-related
     * business logic.
     *
     * For now, it returns a test response.
     * Later, the contact information will be
     * passed to the repository and stored in MySQL.
     */
    public String submitContact(
            String name,
            String email,
            String message) {

        return "Thank you " + name +
                "! Your message has been received.";
    }


    /*
     * Test method to check whether
     * ContactService is working.
     */
    public String getContactStatus() {

        return "Contact Service is working!";
    }
}
