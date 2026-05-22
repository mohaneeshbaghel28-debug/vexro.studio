/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquareQuote, Plus, X, Check, ArrowRight } from "lucide-react";

interface Review {
  name: string;
  role: string;
  location: string;
  comment: string;
  stars: number;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    name: "Rohit Mehta",
    role: "Founder",
    location: "Mumbai",
    comment: "Honestly, mujhe itni clean aur premium website expect nahi thi. Design fast hai, mobile pe perfect chalti hai aur clients se response bhi better aane laga. Bahut professional work!",
    stars: 5
  },
  {
    name: "Priya Sharma",
    role: "Boutique Owner",
    location: "Delhi",
    comment: "Hamare boutique business ke liye website banwayi thi aur result amazing raha. Simple, modern aur trust build karne wali website bani. Communication bhi smooth tha.",
    stars: 5
  },
  {
    name: "Aman Verma",
    role: "Startup Founder",
    location: "Pune",
    comment: "Delivery expected time se pehle mil gayi aur website bilkul premium feel deti hai. Clients ko bhi design bahut pasand aaya. Definitely recommended for startups.",
    stars: 5
  },
  {
    name: "Neha Kapoor",
    role: "Creative Director",
    location: "Bangalore",
    comment: "Website ka UI bahut classy hai aur loading speed bhi fast hai. Hamare business ko online professional look mil gaya. Great experience overall!",
    stars: 5
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const [form, setForm] = useState({
    name: "",
    role: "",
    location: "",
    comment: ""
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Load reviews from localStorage or defaults
  useEffect(() => {
    const saved = localStorage.getItem("vexro_studio_reviews");
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
      }
    } else {
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  const saveReviews = (updated: Review[]) => {
    setReviews(updated);
    localStorage.setItem("vexro_studio_reviews", JSON.stringify(updated));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim() || !form.comment.trim()) {
      setError("Please complete all required fields (Name, Location, Review).");
      return;
    }

    const newReview: Review = {
      name: form.name,
      role: form.role || "Client",
      location: form.location,
      comment: form.comment,
      stars: rating
    };

    const updated = [newReview, ...reviews];
    saveReviews(updated);
    setIsSuccess(true);
    
    // Reset form
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setForm({ name: "", role: "", location: "", comment: "" });
      setRating(5);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 sm:py-36 px-6 bg-[#090909] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-blue/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue block mb-4">
                03 / TRUSTED BY BRANDS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
                Client Reviews.
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Read what modern business owners and startup leaders say about collaboration with Vexro Studio.
              </p>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-accent-blue hover:bg-[#0466e3] shadow-[0_4px_20px_rgba(3,86,197,0.25)] transition-all duration-300 w-fit cursor-pointer"
          >
            <span>Write a Review</span>
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={`${rev.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.4) }}
              whileHover={{ y: -3 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Micro stars and quote decorator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < rev.stars ? 'fill-[#F5A623] text-[#F5A623]' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-5 h-5 text-gray-700 group-hover:text-accent-blue/40 transition-colors duration-300" />
                </div>

                <p className="text-gray-300 text-base font-light leading-relaxed italic mb-8">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.03]">
                <div>
                  <h4 className="text-white font-semibold text-base">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">
                    {rev.role}
                  </p>
                </div>
                
                <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {rev.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Add Review Glassmorphic Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop visual */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#0d0d0d] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Stars decoration background line */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-white">Share Your Feedback</h3>
                  <p className="text-xs text-gray-400 font-normal">Your review will be appended to Vexro Studio reviews instantly.</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="modal-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 text-xs text-red-400 rounded-lg">
                        {error}
                      </div>
                    )}

                    {/* Star Rating selection */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Rating
                      </label>
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 -ml-1 text-2xl focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                          >
                            <Star
                              className={`w-6 h-6 transition-all ${
                                star <= (hoverRating ?? rating)
                                  ? "fill-[#F5A623] text-[#F5A623]"
                                  : "text-gray-600"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-mono text-gray-400 ml-2">
                          ({rating} Stars out of 5)
                        </span>
                      </div>
                    </div>

                    {/* Form Input fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Arjun Dev"
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 focus:border-accent-blue text-sm text-white focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                          Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={form.location}
                          onChange={handleInputChange}
                          placeholder="Mumbai"
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 focus:border-accent-blue text-sm text-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Your Role / Title (Optional)
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={handleInputChange}
                        placeholder="Founder @ GrowthX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 focus:border-accent-blue text-sm text-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Your Review *
                      </label>
                      <textarea
                        name="comment"
                        value={form.comment}
                        onChange={handleInputChange}
                        rows={3}
                        required
                        placeholder="Working with Vexro Studio was absolutely seamless. Fast delivery, extreme pixel accuracy, and superb typography design!"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 focus:border-accent-blue text-sm text-white focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 rounded-lg bg-accent-blue hover:bg-[#0466e3] text-sm font-semibold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Post Review</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="modal-success"
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="p-3 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">Feedback Added Successfully!</h4>
                    <p className="text-xs text-gray-400">Thank you for sharing your experience with us.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
