export default function EmptyState({ message = "Nothing to show here." }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-16 text-center">
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}
