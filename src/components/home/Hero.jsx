import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Hero() {
  return (
    <div className="relative w-full bg-white font-sans overflow-hidden px-8 md:px-16 lg:px-20 pt-16 pb-12 flex flex-col justify-between select-none">
      
      {/* 1. Top Right - Get Free Consultation Button */}
      <div className="absolute top-4 right-8 md:right-16 lg:right-20">
        <button className="bg-[#FF6600] text-white font-medium px-6 py-[11px] rounded-xl flex items-center gap-3 transition-colors duration-200 text-[15px]">
          Get Free Consultation <BsArrowRight className="text-base stroke-[0.5]" />
        </button>
      </div>

      {/* 2. Main Content Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center pt-10 w-full">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col pr-4">
          {/* Subheading Text */}
          <div className="mb-[26px]">
            <h6 className="text-[#64748b] font-bold text-[15px] tracking-[0.18em] uppercase inline-block border-b-2 border-[#FF6600] pb-[2px]">
              DIGITAL MARKETING AGENCY
            </h6>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-5xl md:text-[62px] font-[850] text-[#111111] leading-[1.12] tracking-tight mb-7">
            We Bring <span className="text-[#FF6600]">Customers,</span>
            <br />
            Not Just Content.
          </h1>

          {/* Core Subtitle Paragraph */}
          <p className="text-gray-500 text-xl max-w-xl leading-relaxed mb-10 flex flex-col">
            <span>Smart marketing strategies that attract,</span><span> engage and convert to real customer.</span>
          </p>

          {/* Primary Action Row */}
          <div className="flex items-center gap-5">
            <button className="h-12 px-7 text-white bg-[#FF6600] font-semibold rounded-lg flex gap-4 justify-center items-center shadow-[0_4px_12px_rgba(255,102,0,0.2)]">
              Our Services <BsArrowRight size={22} />
            </button>
            <button className="h-12 px-7 text-[#334155] font-semibold border border-gray-400 rounded-lg flex gap-4 justify-center items-center bg-white">
              View Porfolio <BsArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Right Side Complex Graphic Area */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[460px] mt-10 lg:mt-0">
          
          {/* Circular Warm Subtle Backdrop Mask */}
          <div className="absolute w-[370px] h-[370px] bg-[#FFF1E6] rounded-full -z-10 translate-x-8"></div>
          
          {/* Centerpiece Vector Brand Artwork */}
          <img 
            src="/home/home_img.png" 
            alt="Phoenix Mascot" 
            className="w-[290px] h-auto object-contain z-0 mr-8"
          />

          
          <div className="absolute top-2 right-4 bg-white p-[18px] rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/70 w-[200px] flex flex-col">
            <span className="text-[12px] text-gray-400 font-medium">Leads Generated</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <h3 className="text-[28px] font-extrabold text-black tracking-tight">2,450+</h3>
              <span className="text-[11px] text-gray-500 font-medium flex items-center gap-0.5 self-center pb-1">
                ↑ <span className="text-[10px]">180%</span>
              </span>
            </div>
            <div className="text-[10px] text-gray-400 leading-tight mt-1 space-y-0.5">
              <p>vs lost</p>
              <p>vs lost month</p>
            </div>
            
           
          </div>

          {/* Card Component 2: Performance Rates */}
          <div className="absolute bottom-4 right-[-12px] bg-white p-[18px] rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/70 w-[200px] flex flex-col">
            <span className="text-[12px] text-gray-400 font-medium">Conversion Rate</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <h3 className="text-[28px] font-extrabold text-black tracking-tight">180+</h3>
              <span className="text-[11px] text-gray-500 font-medium flex items-center gap-0.5 self-center pb-1">
                ↑ <span className="text-[10px]">750%</span>
              </span>
            </div>
            <div className="text-[10px] text-gray-400 leading-tight mt-1 space-y-0.5">
              <p>vs 750%</p>
              <p>vs lost month</p>
            </div>
           
          </div>

          
          <div className="absolute right-[-40px] bottom-[-30px] w-60 h-60 bg-[radial-gradient(#fdba74_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-40 -z-20 pointer-events-none"></div>
        </div>

      </div>

      
      <div className="w-200 border border-gray-200/90 rounded-2xl py-5 px-4 bg-white grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 items-center shadow-[0_2px_15px_rgba(0,0,0,0.01)] mt-16">
        
        {/* Metric Node 1 */}
        <div className="flex items-center gap-3.5 justify-start pl-4 md:border-r border-gray-200 last:border-0">
          <RiTeamLine size={30} />
          <div>
            <h4 className="text-[22px] font-[900] text-black leading-none mb-0.5">250 +</h4>
            <p className="text-[11px] text-gray-500 font-bold tracking-wide">Happy Clients</p>
          </div>
        </div>

        {/* Metric Node 2 */}
        <div className="flex items-center gap-3.5 justify-start pl-6 md:border-r border-gray-200 last:border-0">
          <FaTasks size={28} />
          <div>
            <h4 className="text-[22px] font-[900] text-black leading-none mb-0.5">500 +</h4>
            <p className="text-[11px] text-gray-500 font-bold tracking-wide">Projects Completed</p>
          </div>
        </div>

        {/* Metric Node 3 */}
        <div className="flex items-center gap-3.5 justify-start pl-6 md:border-r border-gray-200 last:border-0">
          <PiBagFill size={28} />
          <div>
            <h4 className="text-[22px] font-[900] text-black leading-none mb-0.5">5 +</h4>
            <p className="text-[11px] text-gray-500 font-bold tracking-wide">Years Experience</p>
          </div>
        </div>

        {/* Metric Node 4 */}
        <div className="flex items-center gap-3.5 justify-start pl-6 last:border-0">
          <LiaCertificateSolid size={30} />
          <div>
            <h4 className="text-[22px] font-[900] text-black leading-none mb-0.5">100 %</h4>
            <p className="text-[11px] text-gray-500 font-bold tracking-wide">Client Satisfaction</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;