import { useState, useEffect } from 'react';

function Loader({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: initial, 1: logo glow, 2: text zoom, 3: exit

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),    // Logo glow starts
      setTimeout(() => setStage(2), 1500),   // Text zooms in
      setTimeout(() => setStage(3), 3000),   // Exit starts
      setTimeout(() => onComplete?.(), 3800) // Remove loader
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-800 ${
        stage === 3 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo with Glow Effect */}
      <div className="relative">
        {/* Pulsing Glow Behind Logo */}
        <div className={`absolute inset-0 bg-[var(--button-color)] rounded-full blur-3xl transition-all duration-1000 ${
          stage >= 1 ? 'opacity-50 scale-150' : 'opacity-0 scale-100'
        }`} />
        
        {/* Second pulsing ring */}
        <div className="absolute inset-0 bg-[var(--button-color)] rounded-full blur-2xl animate-pulse opacity-40" />
        
        {/* Logo Image */}
        <img 
          src="/logo.png" 
          alt="Phoenix" 
          className={`relative z-10 h-20 w-auto drop-shadow-[0_0_30px_rgba(244,124,32,0.6)] transition-all duration-700 ${
            stage >= 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        />
      </div>

      {/* Text Container */}
      <div className={`mt-8 text-center transition-all duration-700 ${
        stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Main Text - Zoom In Effect */}
        <h1 
          className={`text-[var(--button-color)] text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase transition-transform duration-1000 ease-out ${
            stage >= 2 ? 'scale-[1.4] sm:scale-[1.6]' : 'scale-100'
          }`}
          style={{ 
            textShadow: '0 0 20px rgba(244,124,32,0.8), 0 0 40px rgba(244,124,32,0.4)',
            fontFamily: 'DM Sans, sans-serif'
          }}
        >
          PHOENIX
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`text-[var(--button-color)]/70 text-xs sm:text-sm tracking-[0.4em] mt-3 uppercase transition-all duration-1000 delay-100 ${
            stage >= 2 ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
          }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Marketing Solution
        </p>
      </div>

      {/* Loading Progress Bar (Optional) */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-[var(--button-color)] transition-all duration-[2500ms] ease-out ${
            stage >= 2 ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1.2); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Loader;