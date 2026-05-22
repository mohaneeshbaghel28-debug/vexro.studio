/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Code, Sparkles, MonitorUp } from "lucide-react";
import { AGENCY_DETAILS } from "../data";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-bg-dark"
    >
      {/* Decorative Radial Backdrop Gradient (Soft Blue Theme Accent) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-accent-blue/10 blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Modern Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-blue animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#93c5fd]">Web Development Agency</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.05] max-w-3xl mb-8"
        >
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400">Modern Websites</span> For Businesses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mb-12"
        >
          {AGENCY_DETAILS.subTagline}
        </motion.p>

        {/* Grouped Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center px-4"
        >
          <a
            href="#hire"
            onClick={(e) => handleScroll(e, "#hire")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium text-white bg-accent-blue hover:bg-[#0466e3] text-center shadow-[0_4px_24px_rgba(3,86,197,0.3)] hover:shadow-[0_6px_30px_rgba(3,86,197,0.5)] transition-all duration-300"
          >
            Hire Me
          </a>
          <a
            href="#what-we-build"
            onClick={(e) => handleScroll(e, "#what-we-build")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 text-center transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>

        {/* Secondary features outline / Micro interface */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden md:flex items-center gap-12 text-xs font-mono text-gray-400 tracking-wider"
        >
          <span className="flex items-center gap-2">
            <Code className="w-4 h-4 text-accent-blue" /> PIXEL-PERFECT CODE
          </span>
          <span className="flex items-center gap-2">
            <MonitorUp className="w-4 h-4 text-accent-blue" /> ULTRA-RESPONSIVE
          </span>
        </motion.div>

        {/* Infinite Scroll Anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-white transition-all cursor-pointer"
          onClick={(e) => handleScroll(e, "#about")}
        >
          <span className="tracking-widest capitalize">Discover More</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-accent-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
