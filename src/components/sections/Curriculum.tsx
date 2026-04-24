import React from 'react';
import Link from 'next/link';
// This line below is the fix! 
// We must import every icon we use in the 'curricula' array.
import { Globe, Award, BookOpen, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

const curricula = [
  {
    id: "cambridge",
    title: "Cambridge International",
    description: "Preparing for the 2026 Digital Exam transition and updated 2027 syllabuses.",
    icon: <Globe className="w-8 h-8 text-brand-blue" />,
  },
  {
    id: "ib",
    title: "International Baccalaureate",
    description: "Support for the new Online IB Exams and enhanced TOK/Extended Essay components.",
    icon: <Award className="w-8 h-8 text-brand-blue" />,
  },
  {
    id: "edexcel",
    title: "Pearson Edexcel",
    description: "New 2026 iPrimary updates and expanded on-screen exams for IGCSE subjects.",
    icon: <BookOpen className="w-8 h-8 text-brand-blue" />,
  },
  {
    id: "aop",
    title: "AOP (Alpha Omega)",
    description: "Featuring Monarch Classic and fully automated grading for 100+ courses.",
    icon: <Zap className="w-8 h-8 text-brand-blue" />,
  },
  {
    id: "cbc",
    title: "Kenyan CBC Senior School",
    description: "Guidance for the historic 2026 transition to Senior School STEM and Arts pathways.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
  },
  {
    id: "counseling",
    title: "Guidance & Counseling",
    description: "Proactive 2026 models for social-emotional learning and career discovery.",
    icon: <HeartHandshake className="w-8 h-8 text-brand-blue" />,
  }
];

export default function Curriculum() {
  return (
    <section className="py-24 bg-slate-50" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-brand-blue uppercase bg-blue-50 rounded-full border border-blue-100">
            Expertise in 2026 Education Standards
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-slate-900">World-Class Curricula</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing specialized support for the latest digital transitions and curriculum shifts in Nairobi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curricula.map((item) => (
            <div key={item.id} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{item.description}</p>
              
              <Link 
                href={`/curriculum/${item.id}`}
                className="text-brand-blue font-bold flex items-center gap-2 group/link"
              >
                Learn More 
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}