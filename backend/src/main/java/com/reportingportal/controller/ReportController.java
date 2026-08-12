package com.reportingportal.controller;

import com.reportingportal.model.Department;
import com.reportingportal.model.Project;
import com.reportingportal.model.ReportMetadata;
import com.reportingportal.model.User;
import com.reportingportal.service.DepartmentReportService;
import com.reportingportal.service.ProjectReportService;
import com.reportingportal.service.ReportMetadataService;
import com.reportingportal.service.UserReportService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// @RestController = @Controller + @ResponseBody: every method's return value
// is serialized straight to the HTTP response body as JSON, rather than
// being resolved as a view name.
@RestController
// @RequestMapping sets a shared base path for every handler method below,
// so each one only needs to declare the part after /api/reports.
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportMetadataService reportMetadataService;
    private final UserReportService userReportService;
    private final DepartmentReportService departmentReportService;
    private final ProjectReportService projectReportService;

    public ReportController(
            ReportMetadataService reportMetadataService,
            UserReportService userReportService,
            DepartmentReportService departmentReportService,
            ProjectReportService projectReportService
    ) {
        this.reportMetadataService = reportMetadataService;
        this.userReportService = userReportService;
        this.departmentReportService = departmentReportService;
        this.projectReportService = projectReportService;
    }

    // @GetMapping is shorthand for @RequestMapping(method = GET) on a
    // specific sub-path.
    @GetMapping
    public List<ReportMetadata> getAllReports() {
        return reportMetadataService.getAllReports();
    }

    // Spring ranks this literal path ahead of the /{id} variable pattern
    // below for exact matches, so /api/reports/users always hits this
    // handler rather than being captured as id="users".
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

    // Deliberately not /api/reports/{id}: that would collide with the
    // literal /users, /departments, /projects mappings above (Spring always
    // prefers the more specific literal match), so a lookup for one of the
    // three real report ids would never reach this handler at all. A
    // distinct sub-path avoids the collision entirely.
    @GetMapping("/meta/{id}")
    public ReportMetadata getReportById(@PathVariable String id) {
        return reportMetadataService.getReportById(id);
    }
}
