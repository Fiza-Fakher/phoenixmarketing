export default function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        "rounded-full px-5 py-2.5 text-sm font-bold leading-none",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47C20]/30",
        active
          ? "border border-orange-200 bg-orange-50 text-[#F47C20] shadow-sm"
          : "border border-gray-200 bg-gray-50 text-gray-700 hover:border-[#F47C20] hover:text-[#F47C20]",
      ].join(" ")}
      aria-pressed={active}
      type="button"
    >
      {children}
    </button>
  );
}