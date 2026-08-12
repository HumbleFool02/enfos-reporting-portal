import { Link } from "react-router-dom";

const CATEGORY_STYLES = {
  Core: "bg-navy/10 text-navy",
  Operations: "bg-mint-light text-mint-dark",
  Governance: "bg-violet-100 text-violet-700",
  Finance: "bg-amber-100 text-amber-700",
};

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ReportCard({ report }) {
  const categoryStyle = CATEGORY_STYLES[report.category] ?? "bg-slate-100 text-slate-600";

  return (
    <Link
      to={`/reports/${report.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-turquoise-blue-dark hover:shadow-lg hover:shadow-turquoise-blue/10"
    >
      <div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryStyle}`}
        >
          {report.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-navy transition-colors group-hover:text-turquoise-blue-dark">
          {report.name}
        </h3>
        <p className="mt-1.5 text-sm text-slate-500">{report.description}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
        <span>{report.rowCount} rows</span>
        <span>Updated {formatDate(report.lastUpdated)}</span>
      </div>
    </Link>
  );
}
