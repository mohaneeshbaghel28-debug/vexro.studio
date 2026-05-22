/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AGENCY_DETAILS } from "../data";
import { Instagram, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    const element = document.querySelector("#home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/[0.04] py-12 sm:py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Meta */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-semibold text-white">
            <div className="w-4 h-4 rounded-full bg-accent-blue" />
            <span className="text-base font-bold tracking-tight">{AGENCY_DETAILS.name}</span>
          </div>
          <p className="text-xs text-gray-500 font-light">
            Crafting premium interactive digital platforms.
          </p>
        </div>

        {/* Media / Contact channels */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a
            href={`mailto:${AGENCY_DETAILS.email}`}
            className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-accent-blue" />
            <span>{AGENCY_DETAILS.email}</span>
          </a>

          <a
            href={AGENCY_DETAILS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Instagram className="w-3.5 h-3.5 text-accent-blue" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Scroll action & Fine print copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white transition-all duration-200 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <p className="text-[11px] text-gray-600 font-mono">
            &copy; {currentYear} {AGENCY_DETAILS.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
