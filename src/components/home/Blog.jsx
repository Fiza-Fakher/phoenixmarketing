import React from "react";

const blogs = [
  {
    id: 1,
    day: "20",
    month: "May",
    title: "10 Social Media Tips to Boost Engagement",
    category: "Marketing",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    day: "22",
    month: "May",
    title: "SEO Strategies That Actually Work in 2024",
    category: "SEO",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    day: "28",
    month: "May",
    title: "How Paid Ads Can Grow Your Business",
    category: "Advertising",
    image: "/blog3.jpg",
  },
  {
    id: 4,
    day: "05",
    month: "June",
    title: "Content Marketing Trends to Follow",
    category: "Marketing",
    image: "/blog4.jpg",
  },
  {
    id: 5,
    day: "28",
    month: "May",
    title: "How Paid Ads Can Grow Your Business",
    category: "Advertising",
    image: "/blog5.jpg",
  },
];

function Blog() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
            LATEST BLOGS
          </span>
          <br />
          <h2 className="relative mt-1 inline-block text-3xl font-bold text-gray-900">
            Insights & Tips
            <span className="absolute -bottom-2 left-0 h-[3px] w-55 bg-[var(--button-color)]"></span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                {/* Date Badge */}
                <div className="absolute left-3 top-3 flex h-12 w-12 flex-col items-center justify-center rounded bg-[var(--button-color)] text-white shadow-md">
                  <span className="text-lg font-bold leading-none">{blog.day}</span>
                  <span className="text-xs font-medium uppercase">{blog.month}</span>
                </div>
                
                {/* Uncomment when you have images */}
                {/* <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                /> */}
              </div>

              {/* Content */}
              <div className="bg-gray-50 p-4">
                <h3 className="mb-2 line-clamp-2 text-base font-bold text-gray-900 transition group-hover:text-[var(--button-color)]">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;