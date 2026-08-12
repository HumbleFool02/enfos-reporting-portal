package com.reportingportal.model;

public record Department(
        String id,
        String name,
        String manager,
        int employeeCount,
        String location
) {
}
