import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";

// THE DATABASE: This holds all the content Martin wrote, mapped to the slugs
const blogDatabase: Record<string, any> = {
  "cambridge-digital-exams-2026": {
    title: "Preparing for the 2026 Cambridge Digital Transition",
    date: "April 20, 2026",
    readTime: "6 min read",
    category: "Curriculum",
    content: [
      "The global shift toward digital assessment is a 2026 reality. Cambridge International has confirmed selected IGCSE subjects will move to on-screen testing starting June 2026.",
      "In Nairobi, this presents an opportunity for students to move beyond handwriting speed and develop digital literacy, including efficient keyboarding and navigating interactive exam software.",
      "At Lifehack Academy, we are integrating digital mock exams to ensure our students master the technology alongside the syllabus."
    ]
  },
  "ib-vs-a-levels-subject-differences": {
    title: "IB vs A-Levels: Subject Differences Explained",
    date: "April 10, 2026",
    readTime: "7 min read",
    category: "Academic Path",
    content: [
      "A-Levels focus on specialization, requiring 3 to 4 subjects over two years. The IB Diploma spans two years but offers a broader spectrum of six subjects.",
      "The IB includes 'Higher Level' and 'Standard Level' subjects, providing both depth and breadth. A-Levels are the traditional choice for students who already know their career path.",
      "Lifehack Academy provides master-level tutoring for both pathways, ensuring students meet the specific entry requirements for global universities."
    ]
  },
  "social-benefits-of-homeschooling": {
    title: "The Social Benefits of Homeschooling: Beyond the Myth",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Socialization",
    content: [
      "Contrary to common misconceptions, homeschooling offers unique social benefits. Children develop strong social skills in supportive environments through community involvement and carefully chosen engagements.",
      "By removing negative pressures like bullying and forced peer groups, homeschooled students often interact more confidently with diverse age groups and authority figures.",
      "At Lifehack, we facilitate group activities that ensure our students are socially robust while maintaining academic excellence."
    ]
  },
  "at-what-age-start-homeschooling": {
    title: "At what age can you start homeschooling your child?",
    date: "April 18, 2026",
    readTime: "4 min read",
    category: "Parenting",
    content: [
      "Technically, you've been teaching your kids since birth! Families often start 'formal' homeschooling at kindergarten age, while others transition from schools later.",
      "The beauty of the Lifehack model is that we can begin at any stage of development, tailoring the curriculum to the child's specific readiness rather than their birth year.",
      "Whether you are starting at age 5 or age 15, the transition is about building a habit of curiosity."
    ]
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogDatabase[slug];

  // If the link doesn't match one of our keys, show the 404 page
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-32 pb-20">
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
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar size={16} className="text-brand-blue" /> {post.date}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Clock size={16} className="text-brand-blue" /> {post.readTime}
                </div>
              </div>
              <button className="text-slate-400 hover:text-brand-blue transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </header>

          <div className="space-y-8 mb-20">
            {post.content.map((paragraph: string, i: number) => (
              <p key={i} className="text-xl text-slate-600 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Contextual CTA */}
          <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">Want to discuss this topic further?</h3>
            <p className="text-slate-400 mb-8">Our advisors are available for 1-on-1 consultations regarding curriculum transitions.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-blue px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
              Book a Call <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}