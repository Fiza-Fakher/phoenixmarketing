export const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/#pricing" },
  { name: "FAQs", path: "/#faq" },
  { name: "Contact", path: "/contact" }
];



import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const BRAND = {
  name: "PHOENIX",
  tagline: "MARKETING SOLUTION",
  desc: "We are a digital marketing agency that helps businesses grow with smart strategies and real results.",
};

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18hQtQ4gbz/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/phoenix_marktingsolutions?igsh=MTcxdzZ2OTYzemtobA==",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/phoenixmarketingsolutionuk/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhbYVaJPKRNa7%2FrAcAf1c3Q%3D%3D",
    icon: FaLinkedinIn,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@phoenix.marketing8?_r=1&_t=ZS-963ekUoAnZv",
    icon: FaTiktok,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/447469011915",
    icon: FaWhatsapp,
  },
];

export const FOOTER_GROUPS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Service", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "FAQs", href: "/#faq" },
      { label: "Contacts", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export const CONTACT = {
  phoneDisplay: "+44 7469 011915",
  phoneHref: "tel:+447469011915",
  emailDisplay: "info@phoenixmarketingsolution.uk",
  emailHref: "mailto:info@phoenixmarketingsolution.uk",
  locationDisplay: "London, United Kingdom",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=London%2C%20United%20Kingdom",
  websiteDisplay: "www.phoenixmarketingsolution.uk",
  websiteHref: "https://phoenixmarketingsolution.uk",
};

export const CATEGORIES = [
  "All",
  "Web Development",
  "Ads Campaigns",
  "Branding",
  "Graphic Design",
  "Video Editing",
  "Startegies",
];

export const projects = [
  {
    id: 1,
    slug: "e-commerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    subtitle: "45% increase in conversion rate",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1600&auto=format&fit=crop",
    client: "TechRetail Co.",
    industry: "E-Commerce & Retail",
    timeline: "4 months",
    services: ["UX/UI Design", "Web Development", "Performance Optimization"],
    tools: ["Figma", "React", "Tailwind CSS", "Analytics"],
    liveUrl: "https://example.com",
    problem:
      "The existing platform had high cart abandonment and confusing checkout flow, especially on mobile.",
    solution:
      "We redesigned the UX with a faster checkout, mobile-first layouts, and performance improvements driven by testing.",
    deliverables: [
      "Complete UI/UX redesign",
      "Responsive mobile experience",
      "Checkout flow optimization",
      "Performance improvements",
      "Analytics dashboard",
    ],
    results: [
      { label: "Conversion Rate", value: "45%", delta: "+45%" },
      { label: "Cart Abandonment", value: "22%", delta: "-56%" },
      { label: "Avg Order Value", value: "$185", delta: "+32%" },
      { label: "Session Duration", value: "4m 32s", delta: "+28%" },
    ],
    gallery: [
      {
        label: "Desktop View",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
      },
      {
        label: "Mobile View",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
      },
      {
        label: "Analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 2,
    slug: "tech-startup-brand-identity",
    title: "Tech Startup Brand Identity",
    category: "Branding",
    subtitle: "Complete visual identity system",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://example.com",
    client: "NovaLabs",
    industry: "SaaS",
    timeline: "6 weeks",
    services: ["Brand Strategy", "Logo Design", "Guidelines"],
    tools: ["Figma", "Illustrator"],
    problem: "Brand lacked consistency across touchpoints.",
    solution: "Built a scalable identity system with guidelines and assets.",
    deliverables: ["Logo suite", "Color system", "Typography", "Brand guide"],
    results: [
      { label: "Brand Recall", value: "+38%", delta: "+38%" },
      { label: "CTR", value: "+21%", delta: "+21%" },
      { label: "CAC", value: "-12%", delta: "-12%" },
      { label: "Time to Launch", value: "3w", delta: "-30%" },
    ],
    gallery: [
      {
        label: "Brand Board",
        img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 3,
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Ads Campaigns",
    subtitle: "2.5M impressions, 8% CTR",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    liveUrl: "https://example.com",
    client: "RetailX",
    industry: "Retail",
    timeline: "1 month",
    services: ["Paid Social", "Creative Testing", "Tracking"],
    tools: ["Meta Ads", "GA4"],
    problem: "Low reach and weak targeting across paid social.",
    solution: "Rebuilt audiences, creatives, and funnel tracking.",
    deliverables: ["Creative system", "Audience testing", "Reporting"],
    results: [
      { label: "Impressions", value: "2.5M", delta: "+2.5M" },
      { label: "CTR", value: "8%", delta: "+3.2%" },
      { label: "ROAS", value: "4.1x", delta: "+1.8x" },
      { label: "CPC", value: "$0.38", delta: "-42%" },
    ],
    gallery: [
      {
        label: "Creatives",
        img: "https://images.unsplash.com/photo-1553484771-047a44eee27d?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
];