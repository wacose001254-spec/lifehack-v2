import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: "cambridge-digital-exams-2026",
    title: "Preparing for the 2026 Cambridge Digital Transition",
    excerpt: "What the shift to on-screen testing means for IGCSE and A-Level students in Nairobi.",
    date: "April 20, 2026",
    readTime: "5 min read",
    category: "Curriculum"
  },
  {
    slug: "cbc-to-international-bridge",
    title: "The Bridge: Transitioning from CBC to International Systems",
    excerpt: "A guide for parents looking to move their children into IGCSE or IB during the Senior School shift.",
    date: "April 15, 2026",
    readTime: "8 min read",
    category: "Parenting"
  }
];

export default function InsightsPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-slate-900 mb-6">Academy Insights.</h1>
          <p className="text-xl text-slate-600">Expert analysis on global education trends and homeschooling strategies for the modern Kenyan family.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {articles.map((post) => (
            <Link href={`/insights/${post.slug}`} key={post.slug} className="group">
              <article className="border-b border-slate-100 pb-12 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Calendar size={14} /> {post.date}
                  </div>
                </div>
                <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}