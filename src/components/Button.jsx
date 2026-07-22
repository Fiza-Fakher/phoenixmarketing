import { Link } from "react-router-dom";

export default function Button({
  variant = "light",
  to,
  href,
  target,
  onClick,
  className = "",
  children,
}) {
  const isLight = variant === "light";
  
  const base = "group relative overflow-hidden inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47C20]/50";
  
  const styles = isLight
    ? "btn-sheen bg-[#F47C20] text-white shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
    : variant === "outline"
    ? "border border-gray-300 bg-white text-gray-700 hover:border-[#F47C20] hover:bg-[#F47C20] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
    : "bg-[#F47C20] text-white hover:bg-orange-600";

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2 leading-none">
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target ?? "_blank"} rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  );
}