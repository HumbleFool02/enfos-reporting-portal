package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.exception.ReportNotFoundException;
import com.reportingportal.model.ReportMetadata;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReportMetadataService {

    private final List<ReportMetadata> reports;

    public ReportMetadataService(MockDataStore mockDataStore) {
        this.reports = List.of(
                new ReportMetadata(
                        "users",
                        "Users",
                        "People in the system - accounts, roles, and status.",
                        LocalDate.of(2026, 8, 1),
                        "/api/reports/users",
                        mockDataStore.getUsers().size()
                ),
                new ReportMetadata(
                        "departments",
                        "Departments",
                        "Org structure, managers, and headcount by department.",
                        LocalDate.of(2026, 7, 15),
                        "/api/reports/departments",
                        mockDataStore.getDepartments().size()
                ),
                new ReportMetadata(
                        "projects",
                        "Projects",
                        "Active and past project work across the org.",
                        LocalDate.of(2026, 8, 10),
                        "/api/reports/projects",
                        mockDataStore.getProjects().size()
                )
        );
    }

    public List<ReportMetadata> getAllReports() {
        return reports;
    }

    public ReportMetadata getReportById(String id) {
        return reports.stream()
                .filter(report -> report.id().equals(id))
                .findFirst()
                .orElseThrow(() -> new ReportNotFoundException(id));
    }
}
