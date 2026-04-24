import React from 'react';
import Link from 'next/link';
import Curriculum from "@/components/sections/Curriculum";
import Tutors from "@/components/sections/Tutors";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white px-6 py-20">
  <div className="max-w-6xl mx-auto text-center">
    {/* 1. Increased spacing after badge (mb-10) */}
    <div className="inline-block px-6 py-2 mb-10 text-xs md:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase bg-blue-50/50 rounded-full border border-blue-100">
      Nairobi's Premier Learning Hub
    </div>

    {/* 2. Relaxed leading and increased spacing after H1 (mb-10) */}
    <h1 className="text-5xl md:text-8xl font-playfair font-bold text-slate-900 mb-10 leading-[1.15] tracking-tight">
      Redefining Education for <br className="hidden md:block" />
      <span className="text-brand-blue">Future Leaders.</span>
    </h1>

    {/* 3. Narrower max-width and lighter text for the subheader (mb-14) */}
    <p className="text-lg md:text-2xl font-sans text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed font-light">
      Personalized, high-performance homeschooling for Cambridge, IB, and Edexcel curricula by TSC-certified professionals.
    </p>

    {/* 4. More breathing room around buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link 
        href="/contact" 
        className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        Enroll Now
      </Link>
      <Link 
        href="#curriculum" 
        className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all duration-300"
      >
        Explore Curricula
      </Link>
    </div>
  </div>
</section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Recognized Excellence</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale font-sans font-bold tracking-widest text-sm text-slate-900">
            <div>CAMBRIDGE</div>
            <div>IB WORLD</div>
            <div>EDEXCEL</div>
            <div>TSC KENYA</div>
          </div>
        </div>
      </section>

      {/* The Sections */}
      <Curriculum />
      <Tutors />

      {/* CTA Footer */}
      <section className="py-24 bg-brand-dark text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">Start Your Academic Journey</h2>
          <p className="text-slate-300 mb-10 text-lg md:text-xl">
            Secure a spot in our 2026 intake. Limited availability for 1-on-1 personalized sessions.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-blue-900/20"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}