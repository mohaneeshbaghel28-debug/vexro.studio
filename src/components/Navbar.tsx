/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AGENCY_DETAILS } from "../data";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Owner", href: "#owner" },
    { label: "What We Build", href: "#what-we-build" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hire Us", href: "#hire" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 border-b border-[#ffffff08] bg-[#050505b0] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <a 
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2 font-semibold tracking-tight text-white group"
        >
          <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-200">
            {AGENCY_DETAILS.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA / Quick Hire button */}
        <div className="flex items-center gap-4">
          <a
            href="#hire"
            onClick={(e) => handleScroll(e, "#hire")}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-accent-blue hover:bg-[#0466e3] transition-colors duration-200"
          >
            Inquire
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
