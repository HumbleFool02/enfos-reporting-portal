package com.reportingportal.model;

import java.time.LocalDate;

public record ReportMetadata(
        String id,
        String name,
        String description,
        LocalDate lastUpdated,
        String endpoint,
        int rowCount
) {
}
