const STATUS_STYLES = {
  Active: "bg-mint-light text-mint-dark",
  Inactive: "bg-slate-100 text-slate-600",
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-sky-100 text-sky-700",
  Completed: "bg-mint-light text-mint-dark",
  Planned: "bg-violet-100 text-violet-700",
  "On Hold": "bg-orange-100 text-orange-700",
  Open: "bg-sky-100 text-sky-700",
  Resolved: "bg-mint-light text-mint-dark",
  Approved: "bg-mint-light text-mint-dark",
  Expired: "bg-rose-100 text-rose-700",
};

const DEFAULT_STYLE = "bg-slate-100 text-slate-600";

export default function StatusBadge({ status }) {
  const styles = STATUS_STYLES[status] ?? DEFAULT_STYLE;

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}
