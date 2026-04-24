import React from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle, Award, GraduationCap, BookOpen, Quote } from 'lucide-react';
import Link from 'next/link';

const tutorDatabase: Record<string, any> = {
  "sarah-omari": {
    name: "Dr. Sarah Omari",
    role: "Senior STEM Specialist",
    tsc: "TSC #44921",
    experience: "12+ Years",
    education: "PhD in Theoretical Physics (UoN)",
    specialties: ["IB Physics HL", "Cambridge A-Level Mathematics", "Further Mechanics"],
    bio: "Dr. Sarah specializes in demystifying complex physical concepts. Her students consistently achieve A* and Level 7 grades by focusing on first-principle thinking rather than rote memorization.",
    philosophy: "I believe every student is a scientist. My goal is to move beyond the syllabus to help them see the math in the world around them.",
    stats: { successRate: "98%", studentsPlaced: "120+" }
  },
  "james-kamau": {
    name: "Mr. James Kamau",
    role: "Humanities & Languages Lead",
    tsc: "TSC #55102",
    experience: "10+ Years",
    education: "MA in English Literature (Oxford)",
    specialties: ["Cambridge IGCSE English", "IB Language & Literature", "Creative Writing"],
    bio: "With a decade of experience in both local and international systems, James bridges the gap for students transitioning into international humanities curricula.",
    philosophy: "Critical thinking is the ultimate lifehack. I teach my students to question the text and find their own voice.",
    stats: { successRate: "95%", studentsPlaced: "85+" }
  }
};

export default async function TutorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tutor = tutorDatabase[id.toLowerCase()];

  if (!tutor) return notFound();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Profile Header */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 bg-slate-200 rounded-2xl shrink-0 overflow-hidden border-4 border-white shadow-xl">
             {/* Placeholder for tutor image */}
             <div className="w-full h-full flex items-center justify-center text-slate-400">
               <Users2 size={64} />
             </div>
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <CheckCircle size={12} /> {tutor.tsc}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Award size={12} /> {tutor.experience} Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 mb-2">{tutor.name}</h1>
            <p className="text-xl text-brand-blue font-medium mb-6">{tutor.role}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 text-slate-600 font-medium">
                 <GraduationCap className="text-slate-400" /> {tutor.education}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-6">About the Mentor</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{tutor.bio}</p>
          </div>

          <div className="bg-brand-dark p-10 rounded-3xl text-white relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5" />
            <h3 className="text-xl font-bold mb-4 text-brand-blue">Teaching Philosophy</h3>
            <p className="text-xl font-playfair italic leading-relaxed text-slate-200">
              "{tutor.philosophy}"
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">Subject Specialization</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {tutor.specialties.map((spec: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl bg-slate-50">
                  <BookOpen className="text-brand-blue w-5 h-5" />
                  <span className="font-bold text-slate-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Sidebar - Booking */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl border-2 border-brand-blue bg-white sticky top-32">
            <h3 className="text-2xl font-playfair font-bold mb-6">Request {tutor.name.split(' ')[1]}</h3>
            <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center py-3 border-b border-slate-50">
                 <span className="text-slate-500 font-medium">Success Rate</span>
                 <span className="font-bold text-slate-900">{tutor.stats.successRate}</span>
               </div>
               <div className="flex justify-between items-center py-3 border-b border-slate-50">
                 <span className="text-slate-500 font-medium">Global Placement</span>
                 <span className="font-bold text-slate-900">{tutor.stats.studentsPlaced}</span>
               </div>
            </div>
            <Link 
              href={`/contact?tutor=${id}`} 
              className="block w-full bg-brand-blue text-white text-center py-4 rounded-xl font-bold hover:shadow-xl transition-all"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add this missing icon import at the top later if you haven't yet
import { Users2 } from 'lucide-react';