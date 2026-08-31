package com.saurabh.portfolio.service;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    /*
     * This method will handle project-related business logic.
     *
     * For now, it returns a test response.
     * Later, this method will retrieve project data
     * from the repository/database.
     */
    public String getProjects() {

        return "Project Service is working!";
    }
}
