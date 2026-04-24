import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    slug: "cambridge-digital-exams-2026",
    title: "Preparing for the 2026 Cambridge Digital Transition",
    excerpt: "What the shift to on-screen testing means for IGCSE and A-Level students in Nairobi.",
    date: "April 20, 2026",
    category: "Curriculum"
  },
  {
    slug: "ib-vs-a-levels-subject-differences",
    title: "IB vs A-Levels: Subject Differences Explained",
    excerpt: "A detailed comparison of subject depth and global university recognition for 2026.",
    date: "April 10, 2026",
    category: "Academic Path"
  },
  {
    slug: "social-benefits-of-homeschooling",
    title: "The Social Benefits of Homeschooling: Beyond the Myth",
    excerpt: "Debunking the myth of isolation and exploring how homeschooled kids thrive socially.",
    date: "April 22, 2026",
    category: "Socialization"
  },
  {
    slug: "at-what-age-start-homeschooling",
    title: "At what age can you start homeschooling your child?",
    excerpt: "Technically, you've been teaching your kids since birth! A guide for starting the journey.",
    date: "April 18, 2026",
    category: "Parenting"
  }
];

export default function InsightsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-900 mb-8">Academy Insights.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Merging global academic standards with practical homeschooling advice for Nairobi's leading families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {articles.map((post) => (
              <Link href={`/insights/${post.slug}`} key={post.slug} className="group">
                <article className="flex flex-col h-full border-b border-slate-100 pb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={18} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}