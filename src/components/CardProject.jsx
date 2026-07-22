import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

export default function CardProject({ p }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate(`/projects/${p.slug}`)}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden shrink-0">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#F47C20]/0 group-hover:bg-[#F47C20]/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <svg className="w-6 h-6 text-[#F47C20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 transition-colors duration-300 group-hover:bg-white flex flex-col flex-1">
        <div className="mb-3 inline-flex self-start rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-gray-500 group-hover:border-orange-200 transition-colors duration-300">
          {p.category}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#F47C20] transition-colors duration-300">{p.title}</h3>
        <p className="mt-2 text-gray-500 line-clamp-2 flex-1">{p.subtitle}</p>

        <div className="mt-6 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <Button to={`/projects/${p.slug}`} variant="outline" className="flex-1">
            Details
          </Button>

          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group/eye grid h-[46px] w-[46px] shrink-0 place-items-center rounded-xl border border-gray-300 bg-white transition-all hover:border-[#F47C20] hover:bg-orange-50 hover:text-[#F47C20] hover:shadow-sm"
            title="Preview live"
          >
            <span className="text-lg transition-transform group-hover/eye:scale-110">◉</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}