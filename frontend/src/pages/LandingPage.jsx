import { useMemo, useState } from "react";
import { useReports } from "../hooks/useReports.js";
import ReportGrid from "../components/ReportGrid.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import Pagination from "../components/Pagination.jsx";
import LoadingState from "../components/LoadingState.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ErrorState from "../components/ErrorState.jsx";

const PAGE_SIZE = 6;

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "lastUpdated-desc", label: "Recently Updated" },
  { value: "rowCount-desc", label: "Most Rows" },
];

// Native <select> arrows crowd a fully-rounded pill's border; this replaces it with proper clearance.
function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-muted"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function sortReports(reports, sortValue) {
  const [key, direction] = sortValue.split("-");
  const sorted = [...reports].sort((a, b) => {
    if (key === "name") return a.name.localeCompare(b.name);
    if (key === "lastUpdated") return new Date(a.lastUpdated) - new Date(b.lastUpdated);
    if (key === "rowCount") return a.rowCount - b.rowCount;
    return 0;
  });
  return direction === "desc" ? sorted.reverse() : sorted;
}

export default function LandingPage() {
  const { data: reports, loading, error, refetch } = useReports();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortValue, setSortValue] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    if (!reports) return [];
    return ["All", ...new Set(reports.map((report) => report.category))];
  }, [reports]);

  const visibleReports = useMemo(() => {
    if (!reports) return [];
    let result = reports;
    if (category !== "All") {
      result = result.filter((report) => report.category === category);
    }
    const term = searchTerm.trim().toLowerCase();
    if (term) {
      result = result.filter((report) => report.name.toLowerCase().includes(term));
    }
    return sortReports(result, sortValue);
  }, [reports, category, searchTerm, sortValue]);

  const totalPages = Math.max(1, Math.ceil(visibleReports.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedReports = visibleReports.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function handleSearchChange(value) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
    setCurrentPage(1);
  }

  function handleSortChange(event) {
    setSortValue(event.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="mx-auto max-w-6xl animate-fade-slide-in px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-royal-blue-dark">Reporting Portal</span>
        <h1 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Explore your organization's data</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
          Browse available reports, drill into their data, and track what's changed across the org.
        </p>
      </header>

      {!loading && !error && reports && reports.length > 0 && (
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <SearchFilter value={searchTerm} onChange={handleSearchChange} />
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="appearance-none rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-9 text-sm text-navy focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
              >
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option === "All" ? "All Categories" : option}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
            <div className="relative">
              <select
                value={sortValue}
                onChange={handleSortChange}
                className="appearance-none rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-9 text-sm text-navy focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>
        </div>
      )}

      {loading && <LoadingState variant="cards" />}

      {!loading && error && <ErrorState message={error.message || "Failed to load reports."} onRetry={refetch} />}

      {!loading && !error && visibleReports.length === 0 && (
        <EmptyState message={searchTerm || category !== "All" ? "No reports match your filters." : "No reports available."} />
      )}

      {!loading && !error && paginatedReports.length > 0 && (
        <>
          <ReportGrid reports={paginatedReports} />
          <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </div>
  );
}
