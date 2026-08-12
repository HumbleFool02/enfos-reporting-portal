package com.reportingportal.model;

import java.time.LocalDate;

// Shared row shape for the "extended" demo reports (Vendors, Incidents,
// Assets, etc.) - these exist purely to give the landing page enough cards
// to paginate, so one generic record covers all of them instead of six
// near-identical bespoke models. `category` is deliberately generic (its
// on-screen label differs per report - "Severity" for Incidents, "Industry"
// for Vendors - via each report's column config on the frontend).
public record ExtendedRecord(
        String id,
        String name,
        String category,
        String status,
        LocalDate updatedDate
) {
}
