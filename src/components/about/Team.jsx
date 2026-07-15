import React from "react";
import profilePicture from "./Profile Picture for booklet .PNG";
import saraImage from "./WhatsApp Image 2026-07-15 at 3.43.38 PM.jpeg";
import danielImage from "./WhatsApp Image 2026-07-15 at 12.02.50 PM (1).jpeg";
import ayaanImage from "./WhatsApp Image 2026-07-15 at 12.02.50 PM (2).jpeg";
import umairImage from "./WhatsApp Image 2026-07-15 at 12.02.51 PM (1).jpeg";
import saraGrowthImage from "./WhatsApp Image 2026-07-15 at 12.02.51 PM.jpeg";

const teamMembers = [
  { name: "Umair", role: "CEO & Founder", desc: "Visionary leader with a passion for innovation, strategic growth, and delivering exceptional digital solutions that help businesses thrive.", img: profilePicture },
  { name: "Sara Ahmad", role: "Head of Growth", desc: "Leads regional operations with a focus on business growth, strategic partnerships, client success, and building high-performing teams.", img: saraImage },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing", img: danielImage },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing", img: ayaanImage },
  { name: "Umair", role: "CEO & Founder", desc: "Growth strategist with a decade in performance marketing", img: umairImage },
  { name: "Sara Ahmad", role: "Head of Growth", desc: "Growth strategist with a decade in performance marketing", img: saraGrowthImage },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing", img: profilePicture },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing", img: profilePicture },
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