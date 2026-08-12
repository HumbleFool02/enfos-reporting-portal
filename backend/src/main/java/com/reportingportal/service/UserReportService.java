package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service marks this as the business-logic layer - functionally identical
// to @Component, but the name signals intent (this bean holds report logic,
// not just plain data or a web-facing controller).
@Service
public class UserReportService {

    private final MockDataStore mockDataStore;

    // Constructor injection: Spring sees this is the class's only
    // constructor and wires MockDataStore in automatically - no @Autowired
    // annotation needed.
    public UserReportService(MockDataStore mockDataStore) {
        this.mockDataStore = mockDataStore;
    }

    public List<User> getUsers() {
        return mockDataStore.getUsers();
    }
}
