import React from 'react';
import { CheckCircle, Star, GraduationCap } from 'lucide-react';

const tutors = [
  {
    name: "Dr. Sarah Omari",
    role: "Senior STEM Specialist",
    experience: "12+ Years",
    certification: "TSC Certified #44921",
    curriculum: ["Cambridge A-Level", "IB Physics"],
    bio: "Ex-International School of Kenya educator focusing on inquiry-based Physics and Calculus."
  },
  {
    name: "Mr. James Kamau",
    role: "Humanities & Languages Lead",
    experience: "10+ Years",
    certification: "TSC Certified #55102",
    curriculum: ["Edexcel IGCSE", "IB English"],
    bio: "Specializes in developing critical writing skills and literature analysis for high-performing students."
  }
];

export default function Tutors() {
  return (
    <section className="py-24 bg-white" id="tutors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Elite TSC-Certified Tutors</h2>
            <p className="text-lg text-slate-600">
              Our vetting process is the most rigorous in Kenya. We only hire educators with proven 
              track records in international curricula.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-blue pb-1">
            <Star className="w-5 h-5 fill-brand-blue" />
            <span>Top 1% of Nairobi Educators</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutors.map((tutor, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-slate-900">{tutor.name}</h3>
                  <p className="text-brand-blue font-medium">{tutor.role}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {tutor.certification}
                </div>
              </div>

              <p className="text-slate-600 mb-6 italic">"{tutor.bio}"</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">{tutor.experience} Exp.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tutor.curriculum.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-500 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}