import React from "react";



const teamMembers = [
  { name: "Umair", role: "CEO & Founder", desc: "Visionary leader with a passion for innovation, strategic growth, and delivering exceptional digital solutions that help businesses thrive.", img: profilePicture, fallback: createAvatarSvg("Umair", "#1d4ed8") },
  { name: "Mutahir", role: "Head of Growth", desc: "Leads regional operations with a focus on business growth, strategic partnerships, client success, and building high-performing teams.", img: saraImage, fallback: createAvatarSvg("Mutahir", "#7c3aed") },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing", img: danielImage, fallback: createAvatarSvg("Daniel", "#0f766e") },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing", img: ayaanImage, fallback: createAvatarSvg("Ayaan", "#b45309") },
  { name: "Umair", role: "CEO & Founder", desc: "Growth strategist with a decade in performance marketing", img: umairImage, fallback: createAvatarSvg("Umair", "#dc2626") },
  { name: "Sara Ahmad", role: "Head of Growth", desc: "Growth strategist with a decade in performance marketing", img: saraGrowthImage, fallback: createAvatarSvg("Sara", "#be185d") },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing", img: profilePicture, fallback: createAvatarSvg("Daniel", "#2563eb") },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing", img: profilePicture, fallback: createAvatarSvg("Ayaan", "#4f46e5") },
];

function TeamSection() {
  return (
    <section id="team" className="w-full bg-white py-20 px-6">
      <style>{`
        @keyframes softGlow {
          0%,100% { opacity:.0; }
          50% { opacity:.55; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[var(--button-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet The People</h2>
          <div className="w-24 h-1 bg-[var(--button-color)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--button-color)]/25"
            >
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = member.fallback;
                  }}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* glow */}
                <div
                  className="absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--button-color)]/25 blur-[60px] opacity-0 group-hover:opacity-100"
                  style={{ animation: "softGlow 2.2s ease-in-out infinite" }}
                />
              </div>

              <div className="p-5 bg-black text-white">
                <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                <p className="text-[var(--button-color)] text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed mt-3">{member.desc}</p>

                <div className="mt-4 h-px w-0 bg-[var(--button-color)]/60 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;