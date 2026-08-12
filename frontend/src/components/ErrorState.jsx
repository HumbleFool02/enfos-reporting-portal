export default function ErrorState({ message = "Something went wrong.", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 py-16 text-center">
      <p className="text-sm text-rose-700">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-muted"
        >
          Retry
        </button>
      )}
    </div>
  );
}
