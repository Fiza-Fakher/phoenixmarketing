import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaHeadset } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: "What service do you offer?",
    answer: "We offer comprehensive digital marketing services including social media management, SEO optimization, paid advertising, web design, content creation, and AI automation solutions tailored to your business needs."
  },
  {
    id: 2,
    question: "How long does it take to see results?",
    answer: "Results vary by service. Social media growth typically shows within 2-4 weeks, while SEO results may take 3-6 months. Paid advertising can generate immediate traffic, and we provide monthly reports to track progress."
  },
  {
    id: 3,
    question: "Do you offer customized packages?",
    answer: "Yes! We understand every business is unique. We offer flexible, customizable packages that can be tailored to your specific goals, budget, and industry requirements."
  },
  {
    id: 4,
    question: "What industries do you work with?",
    answer: "We work with diverse industries including e-commerce, healthcare, real estate, education, hospitality, and technology startups. Our strategies are adapted to suit your specific market."
  }
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Left Side - FAQ Accordion */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
                FAQS
              </span>
              <br />
              <h2 className="relative mt-1 inline-block text-3xl font-bold text-gray-900">
                Frequently Asked Questions
                <span className="absolute -bottom-2 left-0 h-[3px] w-100 bg-[var(--button-color)]"></span>
              </h2>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-lg border border-gray-200 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between bg-white px-5 py-4 text-left transition hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition-transform duration-200 ${openId === faq.id ? 'rotate-45' : ''}`}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openId === faq.id ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="border-t border-gray-100 bg-gray-50 px-5 py-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="flex items-start lg:justify-end">
            <div className="w-full rounded-xl bg-[var(--button-color)] p-6 text-white shadow-lg lg:w-[280px]">
              {/* Icon + Text Row */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <FaHeadset className="text-4xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight mb-1">
                    Have a Project<br />in Mind?
                  </h3>
                  <p className="text-sm text-white/90">
                    Let's build something amazing<br />together
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-gray-900">
                Contact Us <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;