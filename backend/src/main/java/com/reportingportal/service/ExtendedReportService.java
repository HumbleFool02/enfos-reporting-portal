package com.reportingportal.service;

import com.reportingportal.data.MockDataStore;
import com.reportingportal.exception.ReportNotFoundException;
import com.reportingportal.model.ExtendedRecord;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ExtendedReportService {

    private final MockDataStore mockDataStore;

    public ExtendedReportService(MockDataStore mockDataStore) {
        this.mockDataStore = mockDataStore;
    }

    public List<ExtendedRecord> getRows(String id) {
        List<ExtendedRecord> rows = mockDataStore.getExtendedReports().get(id);
        if (rows == null) {
            throw new ReportNotFoundException(id);
        }
        return rows;
    }

    public Set<String> getAvailableIds() {
        return mockDataStore.getExtendedReports().keySet();
    }
}
