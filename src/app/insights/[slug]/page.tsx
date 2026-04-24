import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

const blogDatabase: Record<string, any> = {
  "cambridge-digital-exams-2026": {
    title: "Preparing for the 2026 Cambridge Digital Transition",
    date: "April 20, 2026",
    readTime: "5 min read",
    author: "Admissions Team",
    content: `
      The shift to digital exams is the biggest change in Cambridge International's history. 
      Starting in June 2026, students in Nairobi can opt for on-screen testing for IGCSE English and Computer Science. 
      At Lifehack Academy, we are already integrating digital mock exams to ensure our students are 
      not just mastering the content, but also the technology.
    `,
    tags: ["Cambridge", "Digital Exams", "2026"]
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/insights" className="flex items-center gap-2 text-slate-400 hover:text-brand-blue mb-10 transition-colors font-bold text-sm uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Insights
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-slate-100">
            <div className="flex items-center gap-6">
              <div className="text-xs">
                <p className="text-slate-400 uppercase font-bold mb-1 tracking-tighter">Published</p>
                <p className="font-bold text-slate-900">{post.date}</p>
              </div>
              <div className="text-xs">
                <p className="text-slate-400 uppercase font-bold mb-1 tracking-tighter">Read Time</p>
                <p className="font-bold text-slate-900">{post.readTime}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
           <p className="text-xl text-slate-600 leading-relaxed italic mb-8 border-l-4 border-brand-blue pl-6">
             {post.content}
           </p>
           {/* Detailed body text would go here */}
        </div>
      </div>
    </article>
  );
}