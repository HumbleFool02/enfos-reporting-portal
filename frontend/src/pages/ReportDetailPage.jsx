import { Link, useParams } from "react-router-dom";
import { useReportData } from "../hooks/useReportData.js";
import { reportColumns } from "../config/reportColumns.jsx";
import DataTable from "../components/DataTable.jsx";
import LoadingState from "../components/LoadingState.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorState from "../components/ErrorState.jsx";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ReportDetailPage() {
  // useParams reads the dynamic :reportId segment from the current route.
  const { reportId } = useParams();
  const { data, loading, error, refetch } = useReportData(reportId);
  const columns = reportColumns[reportId] ?? [];

  return (
    <div className="mx-auto max-w-6xl animate-fade-slide-in px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-navy-muted transition hover:text-mint-dark"
      >
        ← Back to all reports
      </Link>

      {loading && (
        <>
          <div className="mb-8 h-9 w-72 animate-pulse rounded-lg bg-slate-200" />
          <LoadingState variant="table" />
        </>
      )}

      {!loading && error && (
        <ErrorState message={error.message || "Failed to load this report."} onRetry={refetch} />
      )}

      {!loading && !error && data && (
        <>
          <header className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-mint-dark">{data.meta.category}</span>
            <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">{data.meta.name}</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">{data.meta.description}</p>
            <p className="mt-2 text-xs text-slate-400">Last updated {formatDate(data.meta.lastUpdated)}</p>
          </header>

          {data.rows.length === 0 ? (
            <EmptyState message="This report has no data yet." />
          ) : (
            // key={reportId} forces a clean remount when switching reports,
            // so DataTable's internal search/sort/page state doesn't carry
            // over from the previous report's table.
            <DataTable key={reportId} columns={columns} rows={data.rows} />
          )}
        </>
      )}
    </div>
  );
}
