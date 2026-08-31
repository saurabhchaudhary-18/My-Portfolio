
package com.saurabh.portfolio.service;

import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    /*
     * This method will handle profile-related
     * business logic.
     *
     * For now, it returns a test response.
     * Later, profile information will be
     * retrieved from the database.
     */
    public String getProfile() {

        return "Saurabh Singh - Java & Spring Boot Backend Developer";
    }

    /*
     * Test method to check whether
     * ProfileService is working.
     */
    public String getProfileStatus() {

        return "Profile Service is working!";
    }
}

