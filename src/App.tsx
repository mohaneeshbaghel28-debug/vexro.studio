/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Owner from "./components/Owner";
import WhatWeBuild from "./components/WhatWeBuild";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans antialiased selection:bg-accent-blue selection:text-white overflow-x-hidden">
      {/* Apple-style floating top navigation bar */}
      <Navbar />

      {/* Main sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Agency Owner Section */}
        <Owner />

        {/* What We Build Section */}
        <WhatWeBuild />

        {/* Client Reviews Section */}
        <Reviews />

        {/* Pricing Layout Section */}
        <Pricing />

        {/* Inquiry Contact Form Section */}
        <InquiryForm />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
