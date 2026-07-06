import React from "react";

const projects = [
  { id: 1, title: "Business Name", category: "Social Media Marketing" },
  { id: 2, title: "Company Name", category: "Social Media Marketing" },
  { id: 3, title: "Business Name", category: "Website Design" },
  { id: 4, title: "Business Name", category: "SEO & PPC Campaign" },
  { id: 5, title: "Business Name", category: "App UI/UX Design" },
  { id: 6, title: "Business Name", category: "Website Development" },
];

function Work() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
              OUR WORK
            </span>
            <br />
            <h2 className="relative mt-1 inline-block text-3xl font-bold text-gray-900">
              Recent Projects
              {/* Orange underline */}
              <span className="absolute -bottom-2 left-0 h-[3px] w-55 bg-[var(--button-color)]"></span>
            </h2>
          </div>

          <button className="rounded border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
            View All Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] w-full bg-gray-200">
                {/* <img src="/project.jpg" alt={project.title} className="h-full w-full object-cover" /> */}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;