package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectReportService {

    private final MockDataStore mockDataStore;

    public ProjectReportService(MockDataStore mockDataStore) {
        this.mockDataStore = mockDataStore;
    }

    public List<Project> getProjects() {
        return mockDataStore.getProjects();
    }
}
