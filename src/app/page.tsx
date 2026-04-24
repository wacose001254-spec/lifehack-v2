import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Curriculum from "@/components/sections/Curriculum";
import Testimonials from "@/components/sections/Testimonials";
import Tutors from "@/components/sections/Tutors";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />

      {/* Hero Section - The "Breathing" Header */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-10 text-xs md:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase bg-blue-50/50 rounded-full border border-blue-100">
            Nairobi's Premier Learning Hub
          </div>

          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-slate-900 mb-10 leading-[1.15] tracking-tight">
            Redefining Education for <br className="hidden md:block" />
            <span className="text-brand-blue">Future Leaders.</span>
          </h1>

          <p className="text-lg md:text-2xl font-sans text-slate-500 mb-14 max-w-xl mx-auto leading-relaxed font-light">
            Personalized, high-performance homeschooling for Cambridge, IB, and Edexcel curricula by TSC-certified professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Enroll Now
            </Link>
            <a 
              href="#curriculum" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all duration-300"
            >
              Explore Curricula
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: The Expert Curriculum (Slate-50 Background) */}
      <div id="curriculum">
        <Curriculum />
      </div>

      {/* Section 2: Social Proof (White Background) */}
      <Testimonials />

      {/* Section 3: The Tutors (Slate-50 Background for Contrast) */}
      <div className="bg-slate-50" id="tutors">
        <Tutors />
      </div>

      {/* Call to Action Footer Section */}
      <section className="py-24 px-6 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8">Ready to transform your child's academic future?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Join the 2026 cohort and secure a placement with Nairobi's most elite tutors.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-brand-blue text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Start Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}