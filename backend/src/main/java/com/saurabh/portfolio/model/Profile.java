
package com.saurabh.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String role;

    @Column(length = 2000)
    private String description;

    private String email;

    private String phone;

    private String githubUrl;

    private String linkedinUrl;

    private String location;


    // Default Constructor
    public Profile() {
    }


    // Parameterized Constructor
    public Profile(
            String name,
            String role,
            String description,
            String email,
            String phone,
            String githubUrl,
            String linkedinUrl,
            String location) {

        this.name = name;
        this.role = role;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.githubUrl = githubUrl;
        this.linkedinUrl = linkedinUrl;
        this.location = location;
    }


    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }


    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
