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
  // Extended reports all share the same ExtendedRecord shape on the backend
  // (id, name, category, status, updatedDate) - only the on-screen labels
  // differ here, so "category" reads as "Industry" for Vendors, "Severity"
  // for Incidents, etc.
  vendors: [
    { key: "id", header: "Vendor ID" },
    { key: "name", header: "Vendor Name" },
    { key: "category", header: "Industry" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Last Updated", render: (row) => formatDate(row.updatedDate) },
  ],
  incidents: [
    { key: "id", header: "Incident ID" },
    { key: "name", header: "Description" },
    { key: "category", header: "Severity" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Reported Date", render: (row) => formatDate(row.updatedDate) },
  ],
  assets: [
    { key: "id", header: "Asset ID" },
    { key: "name", header: "Asset Name" },
    { key: "category", header: "Type" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Last Updated", render: (row) => formatDate(row.updatedDate) },
  ],
  "audit-log": [
    { key: "id", header: "Audit ID" },
    { key: "name", header: "Action" },
    { key: "category", header: "Type" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Date", render: (row) => formatDate(row.updatedDate) },
  ],
  "budget-lines": [
    { key: "id", header: "Budget ID" },
    { key: "name", header: "Line Item" },
    { key: "category", header: "Category" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Last Updated", render: (row) => formatDate(row.updatedDate) },
  ],
  contracts: [
    { key: "id", header: "Contract ID" },
    { key: "name", header: "Contract Name" },
    { key: "category", header: "Type" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "updatedDate", header: "Effective Date", render: (row) => formatDate(row.updatedDate) },
  ],
};
