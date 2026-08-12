import { useMemo, useState } from "react";
import Pagination from "./Pagination.jsx";

const PAGE_SIZE = 8;

function compareValues(a, b) {
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
}

// Config-driven table: caller supplies `columns` ({ key, header, render? })
// and `rows`; search, sort, and pagination are all handled internally as
// presentation state, kept separate from whatever fetched the data.
export default function DataTable({ columns, rows }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  // useMemo re-runs the filter/sort pipeline only when its inputs actually
  // change, instead of on every render (e.g. from unrelated parent updates).
  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return rows;
    const term = searchTerm.toLowerCase();
    return rows.filter((row) =>
      columns.some((column) => String(row[column.key] ?? "").toLowerCase().includes(term))
    );
  }, [rows, columns, searchTerm]);

  const sortedRows = useMemo(() => {
    if (!sortKey) return filteredRows;
    const sorted = [...filteredRows].sort((a, b) => compareValues(a[sortKey], b[sortKey]));
    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [filteredRows, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedRows = sortedRows.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  function handleSort(columnKey) {
    if (sortKey === columnKey) {
      setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(columnKey);
      setSortDirection("asc");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search this table..."
        className="mb-4 w-full max-w-sm rounded-full border border-slate-300 px-4 py-2 text-sm text-navy placeholder:text-slate-400 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
      />

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-navy/[0.04]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="cursor-pointer select-none whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-navy-muted hover:text-navy"
                >
                  {column.header}
                  {sortKey === column.key && (
                    <span className="ml-1 text-mint-dark">{sortDirection === "asc" ? "↑" : "↓"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedRows.map((row, rowIndex) => (
              <tr key={row.id ?? rowIndex} className="odd:bg-white even:bg-slate-50/60 hover:bg-mint-light/60">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-4 py-3 text-slate-700">
                    {column.render ? column.render(row) : row[column.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {paginatedRows.length === 0 && (
          <div className="py-10 text-center text-sm text-slate-500">No rows match your search.</div>
        )}
      </div>

      <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
