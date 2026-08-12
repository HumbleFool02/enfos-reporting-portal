package com.reportingportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication bundles component scanning, auto-configuration, and
// this class's own @Configuration into one annotation - the standard entry
// point for a Spring Boot app.
@SpringBootApplication
public class ReportingPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReportingPortalApplication.class, args);
    }
}
