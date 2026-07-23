import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoEditingCard({ p }) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal]);

  // Auto-play when modal opens, pause when it closes
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col"
      >
        {/* Video thumbnail */}
        <div className="relative aspect-[4/3] w-full bg-gray-900 overflow-hidden shrink-0">
          <video
            src={p.video}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[#F47C20]/0 group-hover:bg-[#F47C20]/10 transition-colors duration-300" />
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
              <svg className="w-6 h-6 text-[#F47C20]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Static play badge */}
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-white text-xs font-bold tracking-wide">VIDEO</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 transition-colors duration-300 group-hover:bg-white flex flex-col flex-1">
          <div className="mb-3 inline-flex self-start rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-gray-500 group-hover:border-orange-200 transition-colors duration-300">
            {p.category}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#F47C20] transition-colors duration-300">{p.title}</h3>
          <p className="mt-2 text-gray-500 line-clamp-2 flex-1">{p.subtitle}</p>

          {/* Only Preview button */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={openModal}
              className="group/preview relative overflow-hidden inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47C20]/50 border border-gray-300 bg-white text-gray-700 hover:border-[#F47C20] hover:bg-[#F47C20] hover:text-white hover:shadow-lg hover:-translate-y-0.5 flex-1"
              type="button"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 leading-none">
                Play Video
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/preview:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-[10000] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#F47C20] hover:border-[#F47C20] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Close video"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video player */}
            <motion.div
              className="relative z-[10000] w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <video
                ref={videoRef}
                src={p.video}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] rounded-lg shadow-2xl bg-black"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
