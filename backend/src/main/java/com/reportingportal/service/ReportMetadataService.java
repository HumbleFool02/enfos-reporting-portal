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
                        "Core",
                        LocalDate.of(2026, 8, 1),
                        "/api/reports/users",
                        mockDataStore.getUsers().size()
                ),
                new ReportMetadata(
                        "departments",
                        "Departments",
                        "Org structure, managers, and headcount by department.",
                        "Core",
                        LocalDate.of(2026, 7, 15),
                        "/api/reports/departments",
                        mockDataStore.getDepartments().size()
                ),
                new ReportMetadata(
                        "projects",
                        "Projects",
                        "Active and past project work across the org.",
                        "Core",
                        LocalDate.of(2026, 8, 10),
                        "/api/reports/projects",
                        mockDataStore.getProjects().size()
                ),
                new ReportMetadata(
                        "vendors",
                        "Vendors",
                        "Approved vendor directory across environmental services.",
                        "Operations",
                        LocalDate.of(2026, 7, 10),
                        "/api/reports/vendors",
                        mockDataStore.getExtendedReports().get("vendors").size()
                ),
                new ReportMetadata(
                        "incidents",
                        "Incidents",
                        "Environmental and safety incidents by severity and status.",
                        "Operations",
                        LocalDate.of(2026, 8, 5),
                        "/api/reports/incidents",
                        mockDataStore.getExtendedReports().get("incidents").size()
                ),
                new ReportMetadata(
                        "assets",
                        "Assets",
                        "Site equipment and infrastructure asset registry.",
                        "Operations",
                        LocalDate.of(2026, 7, 2),
                        "/api/reports/assets",
                        mockDataStore.getExtendedReports().get("assets").size()
                ),
                new ReportMetadata(
                        "audit-log",
                        "Audit Log",
                        "Compliance and governance review activity.",
                        "Governance",
                        LocalDate.of(2026, 8, 8),
                        "/api/reports/audit-log",
                        mockDataStore.getExtendedReports().get("audit-log").size()
                ),
                new ReportMetadata(
                        "budget-lines",
                        "Budget Lines",
                        "Fund allocations for remediation and site operations.",
                        "Finance",
                        LocalDate.of(2026, 7, 22),
                        "/api/reports/budget-lines",
                        mockDataStore.getExtendedReports().get("budget-lines").size()
                ),
                new ReportMetadata(
                        "contracts",
                        "Contracts",
                        "Active and expired vendor and service contracts.",
                        "Finance",
                        LocalDate.of(2026, 5, 5),
                        "/api/reports/contracts",
                        mockDataStore.getExtendedReports().get("contracts").size()
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
