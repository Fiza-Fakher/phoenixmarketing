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
      "src/img/WhatsApp Image 2026-07-23 at 12.40.30 AM.jpeg",
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
        img: "src/img/WhatsApp Image 2026-07-23 at 12.40.29 AM.jpeg",
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

  {
    id: 4,
    slug: "brand-promo-reel",
    title: "Brand Promotion Reel",
    category: "Video Editing",
    subtitle: "Dynamic brand showcase with smooth transitions and engaging motion graphics",
    video: "/home-video/video-1.mp4",
    image: "/home-video/video-1.mp4",
  },
  {
    id: 5,
    slug: "social-media-ad-clip",
    title: "Social Media Ad Clip",
    category: "Video Editing",
    subtitle: "Short-form ad video optimized for Instagram Reels and TikTok engagement",
    video: "/home-video/video-2.mp4",
    image: "/home-video/video-2.mp4",
  },
  {
    id: 6,
    slug: "product-showcase-video",
    title: "Product Showcase Video",
    category: "Video Editing",
    subtitle: "Cinematic product highlight with professional color grading and typography",
    video: "/home-video/video-3.mp4",
    image: "/home-video/video-3.mp4",
  },
  {
    id: 25,
    slug: "corporate-intro-video",
    title: "Corporate Introduction Video",
    category: "Video Editing",
    subtitle: "Professional company overview with motion graphics and branded visual identity",
    video: "/home-video/video-4.mp4",
    image: "/home-video/video-4.mp4",
  },
  {
    id: 26,
    slug: "event-highlight-reel",
    title: "Event Highlight Reel",
    category: "Video Editing",
    subtitle: "Fast-paced event recap with dynamic cuts, music sync and visual effects",
    video: "/home-video/video-5.mp4",
    image: "/home-video/video-5.mp4",
  },
  {
    id: 27,
    slug: "testimonial-video-edit",
    title: "Client Testimonial Video",
    category: "Video Editing",
    subtitle: "Polished testimonial edit with lower thirds, subtitles and clean transitions",
    video: "/home-video/video-6.mp4",
    image: "/home-video/video-6.mp4",
  },
  {
    id: 28,
    slug: "motion-graphics-short",
    title: "Motion Graphics Short",
    category: "Video Editing",
    subtitle: "Eye-catching animated short with kinetic typography and branded elements",
    video: "/home-video/video-7.mp4",
    image: "/home-video/video-7.mp4",
  },

  {
    id: 7,
    slug: "youm-e-iqbal-poster",
    title: "Youm-e-Iqbal Tribute Poster",
    category: "Graphic Design",
    subtitle: "Commemorative social media post honoring Allama Iqbal with elegant Urdu calligraphy",
    image: "/home-images/1.jpg.jpeg",
  },
  {
    id: 8,
    slug: "eid-al-adha-greeting",
    title: "Eid Al-Adha Greeting Design",
    category: "Graphic Design",
    subtitle: "Vibrant festive social media graphic with playful illustration and Arabic calligraphy",
    image: "/home-images/2.jpg.jpeg",
  },
  {
    id: 9,
    slug: "hajj-mubarak-post",
    title: "Hajj Mubarak Social Post",
    category: "Graphic Design",
    subtitle: "Premium Hajj greeting featuring golden calligraphy and Kaaba imagery",
    image: "/home-images/3.jpg.jpeg",
  },
  {
    id: 11,
    slug: "quaid-e-azam-tribute",
    title: "Quaid-e-Azam Death Anniversary",
    category: "Graphic Design",
    subtitle: "Memorial collage poster with framed historical portraits and Urdu typography",
    image: "/home-images/4.jpg.jpeg",
  },
  {
    id: 12,
    slug: "world-environment-day",
    title: "World Environment Day Post",
    category: "Graphic Design",
    subtitle: "Eco-themed social media creative with nature imagery for June 5th awareness campaign",
    image: "/home-images/5.jpg.jpeg",
  },
  {
    id: 13,
    slug: "turkey-work-visa-flyer",
    title: "Turkey Work Visa Opportunity Flyer",
    category: "Graphic Design",
    subtitle: "Euro Star Travels promotional flyer for Turkey employment visa with bold typography",
    image: "/home-images/6.jpg.jpeg",
  },
  {
    id: 14,
    slug: "time-to-travel-ad",
    title: "Time to Travel — Social Ad",
    category: "Graphic Design",
    subtitle: "Eye-catching travel agency social media ad with vibrant 3D elements and cloud imagery",
    image: "/home-images/7.jpg.jpeg",
  },
  {
    id: 15,
    slug: "euro-star-travel-poster",
    title: "Euro Star Travels & Tour Poster",
    category: "Graphic Design",
    subtitle: "Clean travel agency promotional poster with adventure photography and booking details",
    image: "/home-images/8.jpg.jpeg",
  },
  {
    id: 16,
    slug: "dubai-work-visa-ad",
    title: "Dubai Carpenter Job Vacancy Ad",
    category: "Graphic Design",
    subtitle: "Euro Star Travels recruitment flyer for Dubai construction jobs with teal color scheme",
    image: "/home-images/9.jpg.jpeg",
  },
  {
    id: 17,
    slug: "dubai-visit-visa-ad",
    title: "Dubai Visit Visa Promotion",
    category: "Graphic Design",
    subtitle: "Travel agency social media post promoting Dubai visit visa packages with skyline imagery",
    image: "/home-images/10.jpg.jpeg",
  },
  {
    id: 18,
    slug: "learn-shopify-ad",
    title: "Learn Shopify — Course Ad",
    category: "Graphic Design",
    subtitle: "Global Age e-commerce course promotional graphic with modern store mockup design",
    image: "/home-images/12.jpg.jpeg",
  },
  {
    id: 19,
    slug: "top-courses-abroad",
    title: "Top Courses Abroad Post",
    category: "Graphic Design",
    subtitle: "Global Age education consultancy social post highlighting IT, Business & Healthcare courses",
    image: "/home-images/13.jpg.jpeg",
  },
  {
    id: 20,
    slug: "study-in-uk-poster",
    title: "Study in the UK — Step Into Success",
    category: "Graphic Design",
    subtitle: "Premium study abroad poster with Big Ben imagery and key benefits for UK education",
    image: "/home-images/14.jpg.jpeg",
  },
  {
    id: 21,
    slug: "liverpool-john-moores-ad",
    title: "Liverpool John Moores University Ad",
    category: "Graphic Design",
    subtitle: "University spotlight post featuring popular courses and campus photography",
    image: "/home-images/15.jpg.jpeg",
  },
  {
    id: 22,
    slug: "study-abroad-january-intake",
    title: "Study Abroad — January 2026 Intake",
    category: "Graphic Design",
    subtitle: "Bold dark-themed enrollment announcement with European university photography",
    image: "/home-images/16.jpg.jpeg",
  },
  {
    id: 23,
    slug: "student-visa-mistakes",
    title: "Common Student Visa Mistakes",
    category: "Graphic Design",
    subtitle: "Informational social post warning about weak SOPs, missing documents & late submissions",
    image: "/home-images/17.jpg.jpeg",
  },
  {
    id: 24,
    slug: "study-in-australia",
    title: "Benefits of Studying in Australia",
    category: "Graphic Design",
    subtitle: "Global Age educational poster highlighting scholarships, PR pathways & quality education",
    image: "/home-images/18.jpg.jpeg",
  },

  {
    id: 10,
    slug: "ecommerce-seasonal-campaign",
    title: "E-Commerce Seasonal Campaign",
    category: "Ads Campaigns",
    subtitle: "Multi-channel holiday campaign generating $2.4M in revenue",
    image:
      "src/img/WhatsApp Image 2026-07-22 at 11.18.06 PM.jpeg",
    liveUrl: "src/img/WhatsApp Image 2026-07-22 at 11.18.06 PM.jpeg",
    client: "StyleHub Online",
    industry: "E-Commerce & Retail",
    timeline: "6 weeks",
    services: ["Paid Social", "Google Ads", "Email Marketing", "Retargeting"],
    tools: ["Google Ads", "Meta Ads Manager", "Klaviyo", "GA4"],
    problem: "Seasonal sales underperformed previous year with scattered ad strategy across channels.",
    solution: "Built integrated multi-channel campaign with cohesive creative, audience segmentation, and dynamic retargeting that maximized holiday sales.",
    deliverables: ["Campaign strategy", "Creative assets", "Email sequences", "Audience segments", "Performance dashboard"],
    results: [
      { label: "Campaign Revenue", value: "$2.4M", delta: "+$2.4M" },
      { label: "ROI", value: "580%", delta: "+580%" },
      { label: "Conversion Rate", value: "4.8%", delta: "+2.3%" },
      { label: "Customer Acquisition Cost", value: "$12.50", delta: "-68%" },
    ],
    gallery: [
      {
        label: "Campaign Creative",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
      },
      {
        label: "Email Templates",
        img: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?q=80&w=1600&auto=format&fit=crop",
      },
      {
        label: "Performance Analytics",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
];