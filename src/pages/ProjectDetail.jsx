import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import CardProject from "../components/CardProject";
import { projects } from "../constant";
import PageTransition from "../components/common/PageTransition";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-[#F47C20]">
      {children}
    </span>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [activeShot, setActiveShot] = useState(0);

  const related = useMemo(() => {
    if (!project) return [];
    return projects
      .filter((p) => p.slug !== project.slug)
      .slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <Container className="py-20">
        <p className="text-gray-500">Project not found.</p>
        <Link to="/portfolio" className="mt-4 inline-block underline text-gray-900">
          Back to projects
        </Link>
      </Container>
    );
  }

  const shot = project.gallery?.[activeShot];

  return (
    <PageTransition>
      <main className="bg-white min-h-screen">
        <Container className="pt-8">
          <div className="text-sm font-medium text-gray-500">
            <Link className="hover:text-[#F47C20] transition-colors" to="/">Home</Link>
            <span className="px-3">/</span>
            <Link className="hover:text-[#F47C20] transition-colors" to="/portfolio">Portfolio</Link>
            <span className="px-3">/</span>
            <span className="text-gray-900">{project.title}</span>
          </div>
        </Container>

        <section className="mt-6 border-y border-gray-200">
          <div className="h-[240px] sm:h-[340px] md:h-[420px] bg-gray-50 overflow-hidden relative group">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
        </section>

        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* left */}
            <div>
              <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                {project.category}
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">{project.title}</h1>

              <div className="mt-12 grid gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Problem</h3>
                  <p className="mt-3 text-lg text-gray-600 leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Solution</h3>
                  <p className="mt-3 text-lg text-gray-600 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Deliverables</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.deliverables?.map((d) => (
                      <div key={d} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all hover:border-[#F47C20] hover:shadow-md hover:-translate-y-1">
                        <span className="text-[#F47C20] shrink-0 text-xl leading-none">•</span> 
                        <span className="text-gray-700 font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Results</h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {project.results?.map((r) => (
                      <div key={r.label} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#F47C20] hover:shadow-xl hover:-translate-y-2 cursor-default">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-bold tracking-wider text-gray-500 uppercase">{r.label}</div>
                            <div className="mt-2 text-3xl font-bold text-gray-900 group-hover:text-[#F47C20] transition-colors">{r.value}</div>
                            <div className="mt-2 text-sm text-gray-600">{r.delta}</div>
                          </div>
                          <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-100 bg-gray-50 text-gray-400 group-hover:border-[#F47C20] group-hover:bg-orange-50 group-hover:text-[#F47C20] transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Project Gallery</h3>

                  <div className="mt-5 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm group">
                    {shot?.img ? (
                      <img src={shot.img} alt={shot.label} className="h-[300px] sm:h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="h-[300px] sm:h-[400px] w-full bg-gray-200 animate-pulse" />
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.gallery?.map((g, idx) => {
                      const active = idx === activeShot;
                      return (
                        <button
                          key={g.label}
                          onClick={() => setActiveShot(idx)}
                          className={[
                            "rounded-xl border px-5 py-2.5 text-sm font-bold transition-all shadow-sm hover:-translate-y-0.5 focus:outline-none",
                            active
                              ? "bg-[#F47C20] text-white border-[#F47C20]"
                              : "border-gray-300 bg-white text-gray-700 hover:border-[#F47C20] hover:bg-orange-50 hover:text-[#F47C20]",
                          ].join(" ")}
                        >
                          {g.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* right info card */}
            <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/40 sticky top-24">
              <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">CLIENT</div>
              <div className="mt-1.5 font-bold text-gray-900 text-lg">{project.client ?? "—"}</div>

              <div className="mt-6 text-xs font-bold tracking-widest text-gray-500 uppercase">INDUSTRY</div>
              <div className="mt-1.5 font-bold text-gray-900 text-lg">{project.industry ?? "—"}</div>

              <div className="mt-6 text-xs font-bold tracking-widest text-gray-500 uppercase">TIMELINE</div>
              <div className="mt-1.5 font-bold text-gray-900 text-lg">{project.timeline ?? "—"}</div>

              <div className="mt-6 text-xs font-bold tracking-widest text-gray-500 uppercase">SERVICES</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(project.services ?? []).map((s) => <Pill key={s}>{s}</Pill>)}
              </div>

              <div className="mt-6 text-xs font-bold tracking-widest text-gray-500 uppercase">TOOLS & TECH</div>
              <div className="mt-2 text-gray-600 leading-relaxed font-medium">
                {(project.tools ?? []).join(", ")}
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-8">
                <Button variant="light" href={project.liveUrl} className="w-full">Preview Live Project</Button>
                <Button variant="outline" to="/portfolio" className="w-full">Back to Portfolio</Button>
              </div>
            </aside>
          </div>

          {/* Related */}
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900">Related Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => <CardProject key={p.id} p={p} />)}
            </div>
          </div>

          {/* CTA bottom */}
          <div className="mt-24 relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-12 text-center shadow-2xl shadow-black/20">
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[#F47C20]/20 blur-[100px]" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,124,32,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
            </div>
            
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-[#F47C20] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                Start Your Project
              </span>
              <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Want similar results?</h3>
              <p className="mt-5 text-xl text-gray-400">Let’s discuss your project and create something amazing together.</p>
              
              <div className="mt-10 flex justify-center">
                <Button variant="light" to="/contact" className="px-8 py-4 text-base">
                  Get a Free Proposal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}