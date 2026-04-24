import React from 'react';
import Navbar from "@/components/layout/Navbar";
import { Shield, Target, Eye, Heart, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-blue-50 rounded-full border border-blue-100">
              The Lifehack Story
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-900 mb-8 leading-tight text-center">
              Individualized Training for Global Success.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Lifehack Academy is your premier homeschool partner for international curricula. We go beyond the syllabus, making life skills part and parcel of every student's daily training to ensure holistic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
              <Eye size={24} />
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To ensure quality learning and support a system that delivers an interactive and diverse curriculum, promoting development that is competitive on a global scale.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To expand learning opportunities beyond physical school spaces, providing learners with high-quality accessibility, flexible pathways, and active online experiences that embody our dedication to service for humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-500">The principles that guide every session at Lifehack.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Heart className="text-brand-blue" />,
              title: "Compassion",
              desc: "Providing a learning environment rich in love, care, and respect irrespective of religion, race, or nationality."
            },
            {
              icon: <Shield className="text-brand-blue" />,
              title: "Honesty & Integrity",
              desc: "We strive to present our school accurately and expect the same standard of truth from our students."
            },
            {
              icon: <CheckCircle className="text-brand-blue" />,
              title: "Quality Education",
              desc: "Preparing students for their next steps—whether college or career—through our highly qualified TSC staff."
            }
          ].map((value, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">Our Goals.</h2>
              <ul className="space-y-6">
                {[
                  "Diversify learning through innovative online platforms.",
                  "Improve learner engagement via dynamic learning technologies.",
                  "Secure alliances with global educational institutions.",
                  "Align marketing efforts with modern enrollment demands."
                ].map((goal, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <Globe className="text-brand-blue mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">International Impact</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Based in Nairobi, but globally connected. We bridge the gap between traditional learning and the 2026 digital future.
              </p>
              <Link href="/contact" className="text-brand-blue font-bold flex items-center gap-2 group">
                Join our journey <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}