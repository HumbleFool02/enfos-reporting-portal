const STATUS_STYLES = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-gray-100 text-gray-600",
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Planned: "bg-violet-100 text-violet-700",
  "On Hold": "bg-orange-100 text-orange-700",
};

const DEFAULT_STYLE = "bg-gray-100 text-gray-600";

export default function StatusBadge({ status }) {
  const styles = STATUS_STYLES[status] ?? DEFAULT_STYLE;

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}
