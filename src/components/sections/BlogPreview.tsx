import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPreview() {
  const blogs = [
    {
      slug: "cambridge-digital-exams-2026",
      category: "Curriculum",
      title: "Preparing for the 2026 Cambridge Digital Transition",
      desc: "Navigating the shift to on-screen testing for IGCSE and A-Level students."
    },
    {
      slug: "cbc-to-international-bridge",
      category: "Transition",
      title: "The Bridge: CBC to International Systems",
      desc: "A strategic guide for parents entering the 2026 Senior School pathways."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Academy Insights</h2>
            <p className="text-slate-600 leading-relaxed">Expert perspectives on 2026 global education shifts and local CBC transitions.</p>
          </div>
          <Link href="/insights" className="hidden md:flex items-center gap-2 text-brand-blue font-bold group">
            All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="group p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
                <BookOpen size={24} />
              </div>
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-2xl font-playfair font-bold mt-6 mb-4 text-slate-900 group-hover:text-brand-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{post.desc}</p>
              <span className="flex items-center gap-2 font-bold text-sm text-slate-900 group-hover:gap-4 transition-all">
                Read Full Analysis <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}