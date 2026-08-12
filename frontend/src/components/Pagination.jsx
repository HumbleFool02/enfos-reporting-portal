// Shared by DataTable and LandingPage instead of two hand-rolled copies.
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-between text-sm text-navy-muted">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="rounded-full border border-slate-300 px-4 py-1.5 font-medium transition hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:text-navy-muted"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="rounded-full border border-slate-300 px-4 py-1.5 font-medium transition hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:text-navy-muted"
        >
          Next
        </button>
      </div>
    </div>
  );
}
