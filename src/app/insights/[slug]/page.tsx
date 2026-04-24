import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';

const blogDatabase: Record<string, any> = {
  "cambridge-digital-exams-2026": {
    title: "Preparing for the 2026 Cambridge Digital Transition",
    date: "April 20, 2026",
    readTime: "6 min read",
    category: "Curriculum Updates",
    content: [
      "The global shift toward digital assessment is a 2026 reality. Cambridge International has confirmed selected IGCSE subjects will move to on-screen testing starting June 2026.",
      "At Lifehack Academy, we are integrating digital mock exams to ensure our students master the technology alongside the syllabus."
    ]
  },
  "cbc-to-international-bridge": { // This key must match the slug in BlogPreview
    title: "The Bridge: Navigating the CBC to International Transition",
    date: "April 15, 2026",
    readTime: "8 min read",
    category: "Parenting Guide",
    content: [
      "As the first CBC cohort enters Senior School in 2026, many parents are evaluating the Three Pathways. For those considering a transition to IGCSE or IB, timing is everything.",
      "We help students leverage their CBC practical skills while mastering the academic rigors of the Cambridge or IB systems."
    ]
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="flex items-center gap-2 text-slate-400 hover:text-brand-blue mb-12 transition-colors font-bold text-xs uppercase tracking-[0.2em]">
          <ChevronLeft size={16} /> Back to Insights
        </Link>
        
        <header className="mb-16">
          <div className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-6">{post.category}</div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 mb-8 leading-[1.1]">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between py-8 border-y border-slate-100">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium italic">
                {post.date} • {post.readTime}
              </div>
            </div>
            <button className="text-slate-400 hover:text-brand-blue transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        <div className="space-y-8">
          {post.content.map((paragraph: string, i: number) => (
            <p key={i} className="text-xl text-slate-600 leading-relaxed font-light">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white">
          <h3 className="text-2xl font-playfair font-bold mb-4">Ready to start?</h3>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-blue px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
            Request a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}