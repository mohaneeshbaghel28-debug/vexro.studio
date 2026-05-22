/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Starter Plan",
      price: "₹4,999",
      description: "Ideal for validation, personal brands, and high-impact single product showcases.",
      features: [
        "1 Page Website",
        "Mobile Responsive",
        "Modern Design",
        "Contact Form",
        "Fast Delivery"
      ]
    },
    {
      name: "Business Plan",
      price: "₹9,999",
      description: "Perfect for growing businesses requiring multiple pages and advanced page performance.",
      features: [
        "Multi Page Website",
        "Premium Modern Design",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO",
        "Fast Performance"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "₹14,999",
      description: "For established brands demanding tailored aesthetics and robust pixel-perfect graphics.",
      features: [
        "Fully Custom Website",
        "Premium UI Design",
        "Mobile Responsive",
        "Contact Form",
        "Advanced Animations",
        "Priority Support"
      ]
    }
  ];

  const handlePlanSelect = (e: React.MouseEvent<HTMLButtonElement>, planName: string) => {
    e.preventDefault();
    const element = document.querySelector("#hire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Let's find the project details text area and pre-fill it with the chosen plan
      const textArea = document.querySelector('textarea[name="projectDetails"]') as HTMLTextAreaElement;
      if (textArea) {
        textArea.value = `Hi Vexro Studio, we are interested in getting started with the ${planName}. Please share further workflow steps.`;
        // Dispatch synthetic input event so React updates state
        const event = new Event('input', { bubbles: true });
        textArea.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-36 px-6 bg-[#050505] relative overflow-hidden">
      {/* Soft overlay gradient circles */}
      <div className="absolute top-1/3 right-1/4 w-[320px] h-[320px] rounded-full bg-accent-blue/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] rounded-full bg-accent-blue/[0.02] blur-[100px] pointer-events-none" />

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
              04 / TRANSPARENT INVESTMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Our Pricing.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Simple, transparent pricing tailored to match modern businesses and emerging startups. Choose a plan that aligns with your brand's ambitions.
            </p>
          </motion.div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.popular 
                  ? "bg-white/[0.03] border-2 border-accent-blue shadow-[0_8px_32px_rgba(3,86,197,0.15)] md:-translate-y-4"
                  : "bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.025] hover:border-white/[0.08]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-3.5 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  Most Popular
                </div>
              )}

              <div>
                {/* Meta details */}
                <span className="text-xs font-mono font-semibold tracking-wider text-gray-400 capitalize block mb-2">
                  {plan.name}
                </span>

                {/* Pricing values */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">one-time</span>
                </div>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Divider line */}
                <div className="w-full h-px bg-white/[0.04] mb-8" />

                {/* Features listing */}
                <div className="space-y-4 mb-10">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="p-0.5 rounded-full bg-accent-blue/10 text-accent-blue flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-gray-300 font-light">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscribe button */}
              <button
                type="button"
                onClick={(e) => handlePlanSelect(e, plan.name)}
                className={`w-full py-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? "bg-accent-blue hover:bg-[#0466e3] text-white shadow-[0_4px_20px_rgba(3,86,197,0.3)] hover:shadow-[0_6px_24px_rgba(3,86,197,0.5)]"
                    : "bg-white/5 hover:bg-white/10 border border-white/5 text-white"
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
