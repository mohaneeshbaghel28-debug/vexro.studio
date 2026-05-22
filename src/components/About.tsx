/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { AGENCY_DETAILS } from "../data";
import { Eye, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Zap className="w-5 h-5 text-accent-blue" />,
      title: "Engineered Performance",
      description: "Fast loading, fluid transitions, and optimized assets built for high engagement."
    },
    {
      icon: <Eye className="w-5 h-5 text-accent-blue" />,
      title: "Apple-Inspired Aesthetics",
      description: "Clean typography, ample negative space, and premium layouts designed to captivate."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-blue" />,
      title: "Reliable & Production-Ready",
      description: "Robust architectures using Vite and Tailwind to deliver clean, modern web standards."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-36 px-6 bg-[#090909]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Section heading/label column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-28"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue block mb-4">
                01 / THE STUDIO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Redefining Web Experiences.
              </h2>
              <div className="w-12 h-0.5 bg-accent-blue rounded-full mb-8" />
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                BOUTIQUE CREATIVE DESIGN // WEB STANDARDS
              </p>
            </motion.div>
          </div>

          {/* Description & Values column */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-4">
                {AGENCY_DETAILS.aboutText}
              </p>
            </motion.div>

            {/* Core Values grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/5"
            >
              {values.map((v) => (
                <div key={v.title} className="flex flex-col gap-3 group">
                  <div className="p-3 w-fit rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/15 transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mt-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
