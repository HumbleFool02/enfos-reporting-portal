package com.reportingportal.data;

import com.reportingportal.model.Department;
import com.reportingportal.model.Project;
import com.reportingportal.model.User;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

// @Component registers this as a Spring-managed bean so services can have it
// injected instead of each one constructing/holding its own copy of the data.
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

    public List<User> getUsers() {
        return users;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public List<Project> getProjects() {
        return projects;
    }
}
