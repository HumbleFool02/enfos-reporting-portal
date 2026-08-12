package com.reportingportal.controller;

import com.reportingportal.model.Department;
import com.reportingportal.model.ExtendedRecord;
import com.reportingportal.model.Project;
import com.reportingportal.model.ReportMetadata;
import com.reportingportal.model.User;
import com.reportingportal.service.DepartmentReportService;
import com.reportingportal.service.ExtendedReportService;
import com.reportingportal.service.ProjectReportService;
import com.reportingportal.service.ReportMetadataService;
import com.reportingportal.service.UserReportService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportMetadataService reportMetadataService;
    private final UserReportService userReportService;
    private final DepartmentReportService departmentReportService;
    private final ProjectReportService projectReportService;
    private final ExtendedReportService extendedReportService;

    public ReportController(
            ReportMetadataService reportMetadataService,
            UserReportService userReportService,
            DepartmentReportService departmentReportService,
            ProjectReportService projectReportService,
            ExtendedReportService extendedReportService
    ) {
        this.reportMetadataService = reportMetadataService;
        this.userReportService = userReportService;
        this.departmentReportService = departmentReportService;
        this.projectReportService = projectReportService;
        this.extendedReportService = extendedReportService;
    }

    @GetMapping
    public List<ReportMetadata> getAllReports() {
        return reportMetadataService.getAllReports();
    }

    // Literal paths like this one always win over the /{id} pattern below.
    @GetMapping("/users")
    public List<User> getUsers() {
        return userReportService.getUsers();
    }

    @GetMapping("/departments")
    public List<Department> getDepartments() {
        return departmentReportService.getDepartments();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return projectReportService.getProjects();
    }

    // Not /api/reports/{id} - that would collide with the literal mappings above.
    @GetMapping("/meta/{id}")
    public ReportMetadata getReportById(@PathVariable String id) {
        return reportMetadataService.getReportById(id);
    }

    // Only ever catches ids not already matched above (extended reports).
    @GetMapping("/{id}")
    public List<ExtendedRecord> getExtendedReportRows(@PathVariable String id) {
        return extendedReportService.getRows(id);
    }
}
