export default function EmptyState({ message = "Nothing to show here." }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 py-16 text-center">
      <p className="text-sm text-slate-500">{message}</p>
    </div>
  );
}
