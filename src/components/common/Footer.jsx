import React, { useState } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok, 
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* Decorative orange dots pattern bottom-right */}
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F47C20 2px, transparent 2px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3">
            <div className="mb-6 group cursor-pointer">
              <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <div className="h-10 w-10 rounded bg-orange-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,102,0,0.5)] group-hover:rotate-3" />
                <div>
                  <h3 className="text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--button-color)]">PHOENIX</h3>
                  <p className="text-[10px] tracking-wider text-gray-400">MARKETING SOLUTION</p>
                </div>
              </div>
            </div>
            
            <p className="mb-6 text-sm leading-relaxed text-gray-400 transition-colors duration-300 hover:text-gray-300">
              We are a digital marketing agency that helps businesses grow with smart strategies and real results.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaTiktok />} />
              <SocialIcon icon={<FaWhatsapp />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Service</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Useful Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#">Blogs</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Contacts</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="group flex items-start gap-3 cursor-pointer">
                <FaPhone className="mt-1 flex-shrink-0 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-white">+44 7469 011915</span>
              </li>
              <li className="group flex items-start gap-3 cursor-pointer">
                <FaEnvelope className="mt-1 flex-shrink-0 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-white break-all">info@phoenixmarketingsolution.uk</span>
              </li>
              <li className="group flex items-start gap-3 cursor-pointer">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-white">Manchester United Kingdom</span>
              </li>
              <li className="group flex items-start gap-3 cursor-pointer">
                <FaGlobe className="mt-1 flex-shrink-0 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="transition-colors duration-300 group-hover:text-white break-all">www.phoenixmarketingsolution.uk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get the latest updates and offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div 
                className="mt-6 flex overflow-hidden rounded-md bg-white transition-all duration-300 focus-within:ring-2 focus-within:ring-[var(--button-color)] focus-within:shadow-[0_0_20px_rgba(255,102,0,0.3)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[var(--button-color)] px-4 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                >
                  <FaPaperPlane className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                </button>
              </div>
            </form>

            <p className="mt-22 text-xs text-gray-500">
              © 2024 Phoenix Marketing Solution. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-[var(--button-color)] hover:text-white hover:scale-110 hover:rotate-6 hover:shadow-[0_0_15px_rgba(255,102,0,0.5)]"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center text-sm text-gray-400 transition-all duration-300 hover:text-[var(--button-color)] hover:pl-2"
      >
        <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 text-[var(--button-color)]">→</span>
        {children}
      </a>
    </li>
  );
}

export default Footer;