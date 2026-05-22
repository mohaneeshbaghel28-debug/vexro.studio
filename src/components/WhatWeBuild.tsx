/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Layers, Zap, Gem, CheckCircle2 } from "lucide-react";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function WhatWeBuild() {
  const items: Capability[] = [
    {
      icon: <Briefcase className="w-6 h-6 text-accent-blue" />,
      title: "Business Websites",
      description: "Custom tailored corporate platforms to stream workflows, showcase enterprise credentials, and convert organic leads.",
      features: ["Custom CMS integration", "Lead generation funnels", "Corporate security standards"]
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-blue" />,
      title: "Portfolio Websites",
      description: "Immersive digital galleries and interactive experiences designed for creative studios, agencies, and high-tier professionals.",
      features: ["Apple-style transitions", "Immersive typography selection", "Fluid media galleries"]
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-blue" />,
      title: "Landing Pages",
      description: "High-conversion product showcases and advertising anchors dialed precisely to optimize tracking and site velocity.",
      features: ["Optimized load-speeds", "A/B structure positioning", "Responsive touch actions"]
    },
    {
      icon: <Gem className="w-6 h-6 text-accent-blue" />,
      title: "Modern Brand Websites",
      description: "Premium digital workspaces telling beautiful stories visually utilizing responsive animations and clean, modern layouts.",
      features: ["Next-gen motion curves", "Exclusive visual styling", "Subtle, eye-safe theme palettes"]
    }
  ];

  return (
    <section id="what-we-build" className="py-24 sm:py-36 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue block mb-4">
              02 / EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              What We Build.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              We focus on building websites that blend visual storytelling with exceptional performance. No bulk templates—every piece of code is written precisely for your business.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Bento Grid / Service listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="p-3.5 w-fit rounded-xl bg-white/5 border border-white/5 mb-8 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Sub-features micro tags */}
              <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/[0.03] group-hover:border-white/[0.06] transition-colors duration-300">
                {item.features.map(feat => (
                  <span 
                    key={feat} 
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono"
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent-blue" />
                    {feat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
