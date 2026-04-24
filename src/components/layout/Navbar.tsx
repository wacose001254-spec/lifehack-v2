"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold font-playfair tracking-tight text-slate-900 group">
          LIFEHACK ACADEMY<span className="text-brand-blue group-hover:animate-pulse">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-slate-600">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
          <Link href="/insights" className="hover:text-brand-blue transition-colors">Insights</Link>
          <a href="/#curriculum" className="hover:text-brand-blue transition-colors">Curriculum</a>
          <a href="/#tutors" className="hover:text-brand-blue transition-colors">Tutors</a>
          <Link href="/contact" className="hover:text-brand-blue transition-colors">Admissions</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/254705512735" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all">
            <MessageCircle size={18} fill="currentColor" />
            <span className="text-sm font-bold">WhatsApp</span>
          </a>
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 font-bold text-slate-900 shadow-xl">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
          <a href="/#curriculum" onClick={() => setMobileMenuOpen(false)}>Curriculum</a>
          <a href="/#tutors" onClick={() => setMobileMenuOpen(false)}>Tutors</a>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
        </div>
      )}
    </nav>
  );
}