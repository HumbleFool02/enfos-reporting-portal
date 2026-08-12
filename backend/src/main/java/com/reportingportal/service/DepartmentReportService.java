package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.model.Department;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentReportService {

    private final MockDataStore mockDataStore;

    public DepartmentReportService(MockDataStore mockDataStore) {
        this.mockDataStore = mockDataStore;
    }

    public List<Department> getDepartments() {
        return mockDataStore.getDepartments();
    }
}
