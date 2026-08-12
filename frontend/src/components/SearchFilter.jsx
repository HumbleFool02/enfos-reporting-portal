export default function SearchFilter({ value, onChange, placeholder = "Search reports..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30 sm:max-w-xs"
    />
  );
}
