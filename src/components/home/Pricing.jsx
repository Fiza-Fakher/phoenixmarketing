import React from "react";
import { BsArrowRight, BsCheck } from "react-icons/bs";

const plans = [
  {
    name: "STARTER PACK",
    subtitle: "Perfect for Startup",
    price: "19,999",
    icon: <StarterIcon />,
    features: [
      "12 Posts /Month",
      "2 Social Media Platform",
      "Basic Graphic Designing",
      "Captions & Hashtags",
      "Monthly Reports",
      "Emails Support",
      "", // empty for dashed line
      "",
      "",
      "",
      "",
    ],
    isDark: false,
  },
  {
    name: "GROWTH PACK",
    subtitle: "Perfect for Growing Business",
    price: "29,999",
    icon: <GrowthIcon />,
    features: [
      "20 Posts /Month",
      "3 Social Media Platform",
      "Custom Graphic Designing",
      "4 Reels/Month (Video Editing)",
      "Competitor Research",
      "Lead Focused Caption",
      "Basic SEO (On-Pages)",
      "Youtube Marketing (Basic)",
      "Monthly Report",
      "Priority Support",
      "",
    ],
    isDark: false,
  },
  {
    name: "DOMINATION PACK",
    subtitle: "Perfect for Scaling Brands",
    price: "49,999",
    icon: <DominationIcon />,
    features: [
      "30 Posts /Month",
      "3-4 Social Platform",
      "Advance Video Editing",
      "Ads Setup (Basic)",
      "Weekly Strategy",
      "DM Handling",
      "SEO (On-Page + technical)",
      "Web Design (Landing Page)",
      "Business Automation",
      "AI Automation (Basic)",
      "Detailed Monthly Report",
      "Priority Support",
    ],
    isDark: false,
  },
  {
    name: "ELITE PACK",
    subtitle: "Perfect for Serious Businesses & Brands",
    price: "69,999",
    icon: <EliteIcon />,
    features: [
      "Everything In Scaling",
      "Paid Ads Management",
      "Full Web Development",
      "Advance AI Automation",
      "Business Automation",
      "(CRM, Chatbot)",
      "Youtube Marketing (Adv)",
      "Premium Graphic Design (Branding Level)",
      "Full Web Development",
      "Dedicated Account Manag",
      "Bi-Weekly Strategy Calls",
      "24/7 Priority Support",
    ],
    isDark: true,
  },
];

function Pricing() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50/50 to-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 ">
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-500">
            PRICING PLANS
          </span>
          <br />
          <h2 className="relative mt-2 inline-block text-3xl font-bold text-gray-900">
            Flexible Plans, Real Results
            <span className="absolute -bottom-2 left-0 h-[3px] w-95 bg-[var(--button-color)]"></span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                plan.isDark
                  ? "border-gray-800 bg-gray-900 text-white shadow-xl"
                  : "border-gray-200 bg-white shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Card Header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    plan.isDark ? "bg-yellow-500/20 text-yellow-500" : "bg-orange-100 text-[var(--button-color)]"
                  }`}
                >
                  {plan.icon}
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold tracking-wide ${
                      plan.isDark ? "text-[var(--button-color)]" : "text-[var(--button-color)]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className={`text-xs ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Starting From
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium">PKR</span>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    /Month
                  </span>
                </div>
                <div
                  className={`mt-3 h-px w-full ${
                    plan.isDark ? "bg-gray-700" : "bg-gray-200"
                  }`}
                ></div>
              </div>

              {/* Features */}
              <div className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature ? (
                      <>
                        <BsCheck
                          className={`mt-0.5 flex-shrink-0 text-lg ${
                            plan.isDark ? "text-[var(--button-color)]" : "text-[var(--button-color)]"
                          }`}
                        />
                        <span className={`text-sm ${plan.isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </>
                    ) : (
                      <div className="mt-2 h-px w-full border-b border-dashed border-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-lg font-semibold transition-all ${
                  plan.isDark
                    ? "border border-[var(--button-color)] bg-transparent text-[var(--button-color)] hover:bg-[var(--button-color)] hover:text-white"
                    : "border border-[var(--button-color)] text-[var(--button-color)] hover:bg-[var(--button-color)] hover:text-white"
                }`}
              >
                Choose Plan <BsArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Icons
function StarterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function DominationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function EliteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

export default Pricing;