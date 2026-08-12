package com.reportingportal.model;

import java.time.LocalDate;

// A Java record: immutable, with constructor/getters/equals/hashCode/toString
// generated for us - a good fit for read-only API response data like this.
public record User(
        String id,
        String name,
        String email,
        String role,
        String status,
        LocalDate createdDate
) {
}
