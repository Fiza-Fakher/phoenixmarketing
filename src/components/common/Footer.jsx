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
        {/* Grid: items-start added for top alignment */}
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          
          {/* Brand Column: md pe 2 cols, lg pe 3 */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded bg-orange-500">
                  {/* <img src="/logo.png" alt="Phoenix" className="h-full w-full" /> */}
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">PHOENIX</h3>
                  <p className="text-[10px] tracking-wider text-gray-400">MARKETING SOLUTION</p>
                </div>
              </div>
            </div>
            
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
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

          {/* Quick Links: md pe 2 cols */}
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

          {/* Useful Links: md pe 2 cols */}
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

          {/* Contact Info: md pe 3 cols (half width) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 flex-shrink-0 text-[var(--button-color)]" />
                <span>+44 7469 011915</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0 text-[var(--button-color)]" />
                <span>info@phoenixmarketingsolution.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[var(--button-color)]" />
                <span>Manchester United Kingdom</span>
              </li>
              <li className="flex items-start gap-3">
                <FaGlobe className="mt-1 flex-shrink-0 text-[var(--button-color)]" />
                <span>www.phoenixmarketingsolution.uk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter: md pe 3 cols (half width) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get the latest updates and offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className=" mt-6 flex overflow-hidden rounded-md bg-white">
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
                  className="flex items-center justify-center bg-[var(--button-color)] px-4 text-white transition hover:opacity-90"
                >
                  <FaPaperPlane />
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
      className="flex h-9 w-9 items-center justify-center rounded bg-gray-800 text-gray-400 transition hover:bg-[var(--button-color)] hover:text-white"
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
        className="text-sm text-gray-400 transition hover:text-[var(--button-color)] hover:pl-1"
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;