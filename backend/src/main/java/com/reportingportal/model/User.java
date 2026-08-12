package com.reportingportal.model;

import java.time.LocalDate;

public record User(
        String id,
        String name,
        String email,
        String role,
        String status,
        LocalDate createdDate
) {
}
