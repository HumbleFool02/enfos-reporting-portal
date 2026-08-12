package com.reportingportal.model;

import java.time.LocalDate;

// Shared row shape for the extended demo reports (Vendors, Incidents, Assets, etc.) - one generic record
public record ExtendedRecord(
        String id,
        String name,
        String category,
        String status,
        LocalDate updatedDate
) {
}
