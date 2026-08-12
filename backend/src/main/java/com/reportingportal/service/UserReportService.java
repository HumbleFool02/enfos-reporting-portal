package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserReportService {

    private final MockDataStore mockDataStore;

    public UserReportService(MockDataStore mockDataStore) {
        this.mockDataStore = mockDataStore;
    }

    public List<User> getUsers() {
        return mockDataStore.getUsers();
    }
}
