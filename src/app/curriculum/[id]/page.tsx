import React from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle2, AlertCircle, Laptop, GraduationCap, Brain } from 'lucide-react';
import Link from 'next/link';

const curriculumData: Record<string, any> = {
  "cambridge": {
    title: "Cambridge International",
    tagline: "Leading the 2026 Digital Transition",
    color: "bg-blue-700",
    updates: [
      { title: "Digital Exam Rollout", desc: "Preparing students for the June 2026 digital IGCSE & A-Level versions." },
      { title: "Syllabus Overhauls", desc: "Expert support for updated Accounting, Business, and Economics syllabuses." },
      { title: "Linear Assessment", desc: "Focusing on depth of understanding across the entire course duration." }
    ],
    whyItMatters: "Cambridge is moving toward a full global digital offer by 2030. We ensure your child is digitally literate and ready for the 2027 syllabus changes."
  },
  "ib": {
    title: "International Baccalaureate (IB)",
    tagline: "The Digital Evolution in DP",
    color: "bg-cyan-700",
    updates: [
      { title: "Online IB Exams", desc: "Live sessions starting May 2026 with technology-enhanced interactive items." },
      { title: "Hybrid Choice", desc: "Flexibility between digital and paper exams with adjusted grade boundaries." },
      { title: "AI-Resistant Learning", desc: "Strengthened TOK and Extended Essay components to ensure academic integrity." }
    ],
    whyItMatters: "The IB is leading the way in technology-enhanced assessment. Our tutors help students master interactive digital exam tools."
  },
  "edexcel": {
    title: "Pearson Edexcel",
    tagline: "AI Integration & Early Years Support",
    color: "bg-indigo-700",
    updates: [
      { title: "iPrimary Progress", desc: "New 2026 Reception Progress Tests with visual tracking for better outcomes." },
      { title: "AI in Classroom", desc: "Utilizing AI modules to provide hyper-personalized learning paths." },
      { title: "On-Screen Exams", desc: "Support for 14 subjects now available as onscreen exams by 2026." }
    ],
    whyItMatters: "Pearson's focus on AI-driven personalization ensures no child is left behind in the early academic years."
  },
  "aop": {
    title: "Alpha Omega (AOP)",
    tagline: "Automated & Value-Based Learning",
    color: "bg-orange-600",
    updates: [
      { title: "Monarch Classic", desc: "Revamped fully automated online experience with 85% instant grading." },
      { title: "Biblical STEM Labs", desc: "Scientific inquiry aligned with biblical foundations for 2026." },
      { title: "Dynamic Reset", desc: "New calendar tools allowing parents to reset schedules for non-linear paths." }
    ],
    whyItMatters: "Perfect for families seeking a Christian worldview combined with the efficiency of automated feedback."
  },
  "cbc": {
    title: "CBC & Senior School",
    tagline: "The 2026 Historic Milestone",
    color: "bg-emerald-700",
    updates: [
      { title: "Three Pathways", desc: "Specialized tracking in STEM, Social Sciences, or Arts & Sports Science." },
      { title: "40:60 Assessment", desc: "Moving away from high-stakes exams to school-based assessment ratios." },
      { title: "Dual Certification", desc: "Technical tracks now offer both academic and artisan artisan certification." }
    ],
    whyItMatters: "As the first CBC cohort enters Senior School, we guide students in choosing the right path based on talent, not just grades."
  },
  "counseling": {
    title: "Guidance & Counseling",
    tagline: "Proactive Resilience & SEL",
    color: "bg-rose-600",
    updates: [
      { title: "Social-Emotional Learning", desc: "Integrated daily wellness focusing on self-regulation and digital health." },
      { title: "Early Career Discovery", desc: "Psychometric testing starting at Junior Secondary and MYP levels." },
      { title: "Peer Counseling", desc: "Models where students support each other under professional supervision." }
    ],
    whyItMatters: "Academic success is impossible without emotional well-being. We build resilience for a high-tech world."
  }
};

export default async function CurriculumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const content = curriculumData[id.toLowerCase()];

  if (!content) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`pt-40 pb-24 ${content.color} text-white`}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="uppercase tracking-[0.3em] text-sm font-bold opacity-80 mb-4 block">2026 Curriculum Update</span>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold mb-6">{content.title}</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">{content.tagline}</p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-playfair font-bold mb-8 text-slate-900">Key 2026 Developments</h2>
            <div className="grid gap-6">
              {content.updates.map((update: any, i: number) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Laptop className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{update.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{update.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
            <div className="flex gap-4 items-start">
              <AlertCircle className="text-brand-blue w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Why This Matters Now</h3>
                <p className="text-slate-700 leading-relaxed">{content.whyItMatters}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Sidebar */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white sticky top-32">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-brand-blue">Admissions Open</h3>
            <p className="text-slate-400 mb-8 text-sm">
              Secure your child's spot for the 2026 intake. We provide limited 1-on-1 personalized sessions.
            </p>
            <Link href="/contact" className="block w-full bg-brand-blue text-white text-center py-4 rounded-xl font-bold hover:brightness-110 transition-all">
              Consult with an Expert
            </Link>
            <div className="mt-8 pt-8 border-t border-slate-800 space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <div className="flex justify-between"><span>Next Intake</span> <span className="text-white">May 2026</span></div>
              <div className="flex justify-between"><span>Format</span> <span className="text-white">Homeschool / Online</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}