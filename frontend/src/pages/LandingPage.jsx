import { useMemo, useState } from "react";
import { useReports } from "../hooks/useReports.js";
import ReportGrid from "../components/ReportGrid.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import LoadingState from "../components/LoadingState.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorState from "../components/ErrorState.jsx";

export default function LandingPage() {
  const { data: reports, loading, error, refetch } = useReports();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = useMemo(() => {
    if (!reports) return [];
    const term = searchTerm.trim().toLowerCase();
    if (!term) return reports;
    return reports.filter((report) => report.name.toLowerCase().includes(term));
  }, [reports, searchTerm]);

  return (
    <div className="mx-auto max-w-5xl animate-fade-slide-in px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reporting Portal</h1>
        <p className="mt-1 text-sm text-gray-500">Browse available reports and dive into their data.</p>
      </header>

      {!loading && !error && (
        <div className="mb-6">
          <SearchFilter value={searchTerm} onChange={setSearchTerm} />
        </div>
      )}

      {loading && <LoadingState variant="cards" />}

      {!loading && error && (
        <ErrorState message={error.message || "Failed to load reports."} onRetry={refetch} />
      )}

      {!loading && !error && filteredReports.length === 0 && (
        <EmptyState message={searchTerm ? `No reports match "${searchTerm}".` : "No reports available."} />
      )}

      {!loading && !error && filteredReports.length > 0 && <ReportGrid reports={filteredReports} />}
    </div>
  );
}
