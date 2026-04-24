import React from 'react';
import Link from 'next/link';
import { User, CheckCircle, Star } from 'lucide-react';

const tutors = [
  {
    id: "sarah-omari",
    name: "Dr. Sarah Omari",
    role: "Senior STEM Specialist",
    tsc: "TSC #44921",
    specialty: "IB & Cambridge Physics",
    rating: 5.0
  },
  {
    id: "james-kamau",
    name: "Mr. James Kamau",
    role: "Humanities & Languages Lead",
    tsc: "TSC #55102",
    specialty: "IGCSE English & IB Lit",
    rating: 4.9
  }
];

export default function Tutors() {
  return (
    <section className="py-24 bg-white" id="tutors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
              Learn from the Masters.
            </h2>
            <p className="text-lg text-slate-600">
              Our mentors aren't just tutors; they are TSC-certified subject specialists 
              with a track record of global university placements.
            </p>
          </div>
          <Link href="/contact" className="text-brand-blue font-bold border-b-2 border-brand-blue pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
            Join our faculty
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="group flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-200 rounded-2xl shrink-0 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <User size={48} />
                </div>
              </div>

              {/* Tutor Info */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle size={10} /> {tutor.tsc}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 ml-2">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-700">{tutor.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-1">{tutor.name}</h3>
                <p className="text-brand-blue font-semibold text-sm mb-4">{tutor.role}</p>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">Specializing in <span className="text-slate-900 font-medium">{tutor.specialty}</span> for high-performance students.</p>
                
                {/* The Handshake Link */}
                <Link 
                  href={`/tutors/${tutor.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-slate-900 font-bold text-sm group-hover:text-brand-blue transition-colors"
                >
                  View Mentor Profile 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}