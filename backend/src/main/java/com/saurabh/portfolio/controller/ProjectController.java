package com.saurabh.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    /*
     * Test endpoint
     *
     * URL:
     * GET http://localhost:8080/api/projects
     */
    @GetMapping
    public String getProjects() {
        return "Projects API is working!";
    }
}

