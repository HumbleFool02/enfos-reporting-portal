package com.reportingportal.data;

import com.reportingportal.model.Department;
import com.reportingportal.model.ExtendedRecord;
import com.reportingportal.model.Project;
import com.reportingportal.model.User;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Component
public class MockDataStore {

    private final List<User> users = List.of(
            new User("USR-1001", "Ava Thompson", "ava.thompson@example.com", "Admin", "Active", LocalDate.of(2024, 2, 14)),
            new User("USR-1002", "Priya Natarajan", "priya.natarajan@example.com", "Manager", "Active", LocalDate.of(2022, 6, 1)),
            new User("USR-1003", "Marcus Chen", "marcus.chen@example.com", "Manager", "Active", LocalDate.of(2022, 9, 12)),
            new User("USR-1004", "Elena Rodriguez", "elena.rodriguez@example.com", "Manager", "Active", LocalDate.of(2023, 1, 23)),
            new User("USR-1005", "Jordan Blake", "jordan.blake@example.com", "Manager", "Active", LocalDate.of(2023, 3, 30)),
            new User("USR-1006", "Sofia Novak", "sofia.novak@example.com", "Manager", "Active", LocalDate.of(2023, 5, 8)),
            new User("USR-1007", "David Okafor", "david.okafor@example.com", "Manager", "Active", LocalDate.of(2021, 11, 15)),
            new User("USR-1008", "Liam Garcia", "liam.garcia@example.com", "Employee", "Active", LocalDate.of(2024, 4, 2)),
            new User("USR-1009", "Noah Kim", "noah.kim@example.com", "Employee", "Active", LocalDate.of(2024, 6, 19)),
            new User("USR-1010", "Grace Muller", "grace.mueller@example.com", "Employee", "Inactive", LocalDate.of(2023, 8, 11)),
            new User("USR-1011", "Omar Farouk", "omar.farouk@example.com", "Employee", "Active", LocalDate.of(2025, 1, 5)),
            new User("USR-1012", "Isabella Ferreira", "isabella.ferreira@example.com", "Contractor", "Active", LocalDate.of(2025, 2, 20)),
            new User("USR-1013", "Ethan Walsh", "ethan.walsh@example.com", "Employee", "Pending", LocalDate.of(2026, 7, 1)),
            new User("USR-1014", "Mia Andersson", "mia.andersson@example.com", "Employee", "Active", LocalDate.of(2024, 11, 9)),
            new User("USR-1015", "Lucas Silva", "lucas.silva@example.com", "Contractor", "Inactive", LocalDate.of(2023, 12, 3))
    );

    private final List<Department> departments = List.of(
            new Department("DPT-100", "Engineering", "Priya Natarajan", 42, "Austin, TX"),
            new Department("DPT-200", "Product", "Marcus Chen", 18, "San Francisco, CA"),
            new Department("DPT-300", "Sales", "Elena Rodriguez", 27, "New York, NY"),
            new Department("DPT-400", "Marketing", "Jordan Blake", 14, "Chicago, IL"),
            new Department("DPT-500", "Customer Success", "Sofia Novak", 21, "Remote"),
            new Department("DPT-600", "Finance", "David Okafor", 9, "Denver, CO")
    );

    private final List<Project> projects = List.of(
            new Project("PRJ-2001", "Customer Portal Revamp", "Engineering", "Priya Natarajan", "In Progress", LocalDate.of(2025, 1, 10), null),
            new Project("PRJ-2002", "Mobile App Launch", "Product", "Marcus Chen", "In Progress", LocalDate.of(2025, 3, 1), null),
            new Project("PRJ-2003", "Q3 Sales Enablement", "Sales", "Elena Rodriguez", "Completed", LocalDate.of(2024, 7, 1), LocalDate.of(2024, 9, 30)),
            new Project("PRJ-2004", "Brand Refresh", "Marketing", "Jordan Blake", "Planned", LocalDate.of(2026, 9, 1), null),
            new Project("PRJ-2005", "Support Ticket Automation", "Customer Success", "Sofia Novak", "In Progress", LocalDate.of(2025, 5, 15), null),
            new Project("PRJ-2006", "Annual Budget Planning", "Finance", "David Okafor", "Completed", LocalDate.of(2025, 10, 1), LocalDate.of(2025, 12, 15)),
            new Project("PRJ-2007", "API Platform Migration", "Engineering", "Priya Natarajan", "On Hold", LocalDate.of(2024, 11, 1), null),
            new Project("PRJ-2008", "Onboarding Flow Redesign", "Product", "Marcus Chen", "Completed", LocalDate.of(2024, 2, 1), LocalDate.of(2024, 5, 20)),
            new Project("PRJ-2009", "Partner Referral Program", "Sales", "Elena Rodriguez", "Planned", LocalDate.of(2026, 10, 15), null),
            new Project("PRJ-2010", "Data Warehouse Upgrade", "Engineering", "David Okafor", "In Progress", LocalDate.of(2026, 2, 10), null)
    );

    // Keyed by the same id used in the URL and report metadata.
    private final Map<String, List<ExtendedRecord>> extendedReports = Map.of(
            "vendors", List.of(
                    new ExtendedRecord("VEN-100", "Waste Management Solutions", "Environmental Services", "Active", LocalDate.of(2026, 6, 15)),
                    new ExtendedRecord("VEN-101", "GeoTech Drilling Co.", "Field Services", "Active", LocalDate.of(2026, 5, 20)),
                    new ExtendedRecord("VEN-102", "Clarity Labs", "Laboratory Testing", "Active", LocalDate.of(2026, 7, 1)),
                    new ExtendedRecord("VEN-103", "Summit Logistics", "Transportation", "Inactive", LocalDate.of(2025, 11, 10)),
                    new ExtendedRecord("VEN-104", "Pioneer Remediation", "Environmental Services", "Active", LocalDate.of(2026, 4, 18)),
                    new ExtendedRecord("VEN-105", "BlueRiver Consulting", "Advisory", "Active", LocalDate.of(2026, 3, 22)),
                    new ExtendedRecord("VEN-106", "Ironclad Safety Supply", "Equipment", "Inactive", LocalDate.of(2025, 9, 5)),
                    new ExtendedRecord("VEN-107", "Terra Analytics", "Data Services", "Active", LocalDate.of(2026, 7, 10))
            ),
            "incidents", List.of(
                    new ExtendedRecord("INC-200", "Groundwater sample anomaly at Site 12", "High", "Resolved", LocalDate.of(2026, 6, 1)),
                    new ExtendedRecord("INC-201", "Spill containment breach", "Critical", "Resolved", LocalDate.of(2026, 5, 14)),
                    new ExtendedRecord("INC-202", "Air monitor calibration drift", "Medium", "Open", LocalDate.of(2026, 7, 20)),
                    new ExtendedRecord("INC-203", "Unauthorized site access", "Low", "Resolved", LocalDate.of(2026, 4, 2)),
                    new ExtendedRecord("INC-204", "Vapor intrusion threshold exceeded", "High", "Open", LocalDate.of(2026, 7, 28)),
                    new ExtendedRecord("INC-205", "Equipment malfunction - AST sensor", "Medium", "Resolved", LocalDate.of(2026, 3, 11)),
                    new ExtendedRecord("INC-206", "Soil boring permit lapse", "Low", "Open", LocalDate.of(2026, 8, 5))
            ),
            "assets", List.of(
                    new ExtendedRecord("AST-300", "Monitoring Well MW-14", "Well", "Active", LocalDate.of(2026, 6, 10)),
                    new ExtendedRecord("AST-301", "Underground Storage Tank #3", "UST", "Active", LocalDate.of(2026, 5, 28)),
                    new ExtendedRecord("AST-302", "Vapor Extraction System", "Remediation Equipment", "Active", LocalDate.of(2026, 7, 2)),
                    new ExtendedRecord("AST-303", "Site Fence - North Perimeter", "Infrastructure", "Active", LocalDate.of(2026, 2, 14)),
                    new ExtendedRecord("AST-304", "Legacy Pump Station", "Equipment", "Inactive", LocalDate.of(2025, 10, 19)),
                    new ExtendedRecord("AST-305", "Air Sparging Unit B", "Remediation Equipment", "Active", LocalDate.of(2026, 6, 30)),
                    new ExtendedRecord("AST-306", "Retired Storage Tank #1", "UST", "Inactive", LocalDate.of(2025, 8, 1))
            ),
            "audit-log", List.of(
                    new ExtendedRecord("AUD-400", "Quarterly compliance review", "Review", "Completed", LocalDate.of(2026, 7, 1)),
                    new ExtendedRecord("AUD-401", "Site data reconciliation", "Data Audit", "Completed", LocalDate.of(2026, 6, 15)),
                    new ExtendedRecord("AUD-402", "Permit renewal verification", "Permit Check", "Pending", LocalDate.of(2026, 8, 1)),
                    new ExtendedRecord("AUD-403", "Financial obligation reassessment", "Financial Review", "Completed", LocalDate.of(2026, 5, 20)),
                    new ExtendedRecord("AUD-404", "Vendor certification check", "Vendor Audit", "Pending", LocalDate.of(2026, 8, 8)),
                    new ExtendedRecord("AUD-405", "Annual ARO valuation", "Valuation", "Completed", LocalDate.of(2026, 4, 30))
            ),
            "budget-lines", List.of(
                    new ExtendedRecord("BUD-500", "Remediation Reserve FY26", "Capital", "Approved", LocalDate.of(2026, 7, 15)),
                    new ExtendedRecord("BUD-501", "Site Monitoring Contract", "Operating", "Approved", LocalDate.of(2026, 6, 1)),
                    new ExtendedRecord("BUD-502", "Emergency Response Fund", "Contingency", "Pending", LocalDate.of(2026, 8, 1)),
                    new ExtendedRecord("BUD-503", "Vendor Services Renewal", "Operating", "Approved", LocalDate.of(2026, 5, 10)),
                    new ExtendedRecord("BUD-504", "Closure Cost Estimate Update", "Capital", "Pending", LocalDate.of(2026, 7, 22)),
                    new ExtendedRecord("BUD-505", "Regulatory Filing Fees", "Administrative", "Approved", LocalDate.of(2026, 3, 18))
            ),
            "contracts", List.of(
                    new ExtendedRecord("CON-600", "Remediation Services Agreement", "Master Service Agreement", "Active", LocalDate.of(2026, 1, 15)),
                    new ExtendedRecord("CON-601", "Lab Testing Contract", "Testing Services", "Active", LocalDate.of(2026, 4, 1)),
                    new ExtendedRecord("CON-602", "Legacy Drilling Contract", "Field Services", "Expired", LocalDate.of(2025, 6, 30)),
                    new ExtendedRecord("CON-603", "Environmental Consulting Retainer", "Advisory", "Active", LocalDate.of(2026, 2, 10)),
                    new ExtendedRecord("CON-604", "Waste Disposal Agreement", "Disposal Services", "Active", LocalDate.of(2026, 5, 5)),
                    new ExtendedRecord("CON-605", "Prior Insurance Policy", "Insurance", "Expired", LocalDate.of(2025, 12, 1))
            )
    );

    public List<User> getUsers() {
        return users;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public Map<String, List<ExtendedRecord>> getExtendedReports() {
        return extendedReports;
    }
}
