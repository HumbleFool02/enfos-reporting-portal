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
    <div className="mx-auto max-w-6xl animate-fade-slide-in px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
      >
        ← Back to all reports
      </Link>

      {loading && (
        <>
          <div className="mb-6 h-8 w-64 animate-pulse rounded bg-gray-200" />
          <LoadingState variant="table" />
        </>
      )}

      {!loading && error && (
        <ErrorState message={error.message || "Failed to load this report."} onRetry={refetch} />
      )}

      {!loading && !error && data && (
        <>
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{data.meta.name}</h1>
            <p className="mt-1 text-sm text-gray-500">{data.meta.description}</p>
            <p className="mt-1 text-xs text-gray-400">Last updated {formatDate(data.meta.lastUpdated)}</p>
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
