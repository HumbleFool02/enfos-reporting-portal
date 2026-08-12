package com.reportingportal.exception;

public class ReportNotFoundException extends RuntimeException {

    public ReportNotFoundException(String reportId) {
        super("No report found with id '" + reportId + "'");
    }
}
