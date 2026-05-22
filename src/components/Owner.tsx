/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, Sparkles } from "lucide-react";

export default function Owner() {
  return (
    <section id="owner" className="py-24 sm:py-36 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative luxury radial background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-accent-blue/5 blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute -top-12 right-12 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue block mb-4">
              01.5 / LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Agency Owner.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Meeting the creative direction and code vision driving every single layout engineered at Vexro Studio.
            </p>
          </motion.div>
        </div>

        {/* Owner Card Profile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.05] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group"
        >
          {/* Subtle grid accent inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative">
                {/* Premium glowing animated blue-black background effects */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-accent-blue via-transparent to-blue-500 opacity-70 blur-md group-hover:opacity-100 group-hover:duration-500 transition-all duration-700 animate-pulse" />
                
                {/* Image Frame */}
                <div className="relative rounded-2xl bg-bg-dark border border-white/10 overflow-hidden w-64 h-64 sm:w-72 sm:h-72 aspect-square flex items-center justify-center shadow-2xl">
                  <img
                    src="/src/assets/images/owner_profile_1779469297477.png"
                    alt="Mohaneesh Baghel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  />
                  {/* Glassmorphic border glow inside */}
                  <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-4 w-fit mx-auto lg:mx-0">
                <Sparkles className="w-3 text-accent-blue" />
                <span className="text-[10px] font-mono tracking-widest text-[#93c5fd] uppercase">FOUNDER & GENERAL DIRECTOR</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                Mohaneesh Baghel
              </h3>
              
              <div className="w-12 h-0.5 bg-accent-blue rounded-full mb-8 mx-auto lg:mx-0" />

              <div className="text-gray-300 text-base sm:text-lg font-light leading-relaxed space-y-6">
                <p>
                  Mohaneesh Baghel is a passionate Creative Agency Owner focused on building modern, high-converting, and visually premium websites for startups, creators, and growing businesses. Specializing in clean UI/UX design, business websites, landing pages, and digital brand experiences, he helps brands create a strong and professional online presence.
                </p>
                <p>
                  With a strong focus on performance, modern aesthetics, responsive layouts, and user experience, Mohaneesh aims to deliver websites that not only look premium but also help businesses grow online.
                </p>
              </div>

              {/* Direct Contact Options Stack */}
              <div className="flex flex-col items-center lg:items-start gap-4 mt-10 pt-8 border-t border-white/5 w-full">
                <span className="text-xs font-mono uppercase text-gray-500 tracking-wider">Contact:</span>
                
                <div className="flex flex-col items-center lg:items-start gap-3 w-full">
                  <a
                    href="mailto:mohaneeshbaghel4@gmail.com"
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-accent-blue/40 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 w-fit"
                  >
                    <Mail className="w-4 h-4 text-accent-blue" />
                    <span>mohaneeshbaghel4@gmail.com</span>
                  </a>

                  <a
                    href="tel:+918817932825"
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-accent-blue/40 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 w-fit"
                  >
                    <Phone className="w-4 h-4 text-accent-blue" />
                    <span>+91 88179 32825</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
