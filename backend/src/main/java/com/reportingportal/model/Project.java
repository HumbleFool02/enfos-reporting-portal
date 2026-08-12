package com.reportingportal.model;

import java.time.LocalDate;

public record Project(
        String id,
        String name,
        String department,
        String owner,
        String status,
        LocalDate startDate,
        LocalDate endDate
) {
}
