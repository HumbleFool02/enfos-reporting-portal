import StatusBadge from "../components/StatusBadge.jsx";

function formatDate(isoDate) {
  if (!isoDate) return "—";
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Per-report column definitions consumed by DataTable. `key` is always the
// raw field to sort/search on; `render` (optional) only affects display.
export const reportColumns = {
  users: [
    { key: "id", header: "User ID" },
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "createdDate", header: "Created Date", render: (row) => formatDate(row.createdDate) },
  ],
  departments: [
    { key: "id", header: "Department ID" },
    { key: "name", header: "Department Name" },
    { key: "manager", header: "Manager" },
    { key: "employeeCount", header: "Employee Count" },
    { key: "location", header: "Location" },
  ],
  projects: [
    { key: "id", header: "Project ID" },
    { key: "name", header: "Project Name" },
    { key: "department", header: "Department" },
    { key: "owner", header: "Owner" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "startDate", header: "Start Date", render: (row) => formatDate(row.startDate) },
    { key: "endDate", header: "End Date", render: (row) => (row.endDate ? formatDate(row.endDate) : "Ongoing") },
  ],
};
