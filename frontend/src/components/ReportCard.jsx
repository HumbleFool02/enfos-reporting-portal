import { Link } from "react-router-dom";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ReportCard({ report }) {
  return (
    <Link
      to={`/reports/${report.id}`}
      className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">{report.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{report.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>{report.rowCount} rows</span>
        <span>Updated {formatDate(report.lastUpdated)}</span>
      </div>
    </Link>
  );
}
