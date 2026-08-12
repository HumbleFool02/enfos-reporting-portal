// Reused for both the landing page's card grid and the detail page's table
// while data is in flight, so a single "loading" concept feels the same
// everywhere in the app.
export default function LoadingState({ variant = "cards", rows = 6 }) {
  if (variant === "table") {
    return (
      <div className="animate-pulse space-y-2" role="status" aria-label="Loading data">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="h-10 w-full rounded-lg bg-slate-200" />
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 gap-5 animate-pulse sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-label="Loading reports"
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-40 rounded-2xl bg-slate-200" />
      ))}
    </div>
  );
}
