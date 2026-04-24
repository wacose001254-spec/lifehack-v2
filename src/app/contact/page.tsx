"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentGrade: '',
    currentCurriculum: 'Cambridge',
    message: ''
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-slate-900 mb-6">
            Begin the Journey.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every child’s path is unique. Share a few details about your student’s 
            academic background, and our Admissions Lead will reach out for a private consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <form className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Parent/Guardian Name</label>
                  <input type="text" className="p-4 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input type="email" className="p-4 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Student's Current Grade</label>
                  <input type="text" className="p-4 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all" placeholder="e.g. Year 9 / Grade 8" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Current Curriculum</label>
                  <select className="p-4 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all bg-white">
                    <option>Cambridge (IGCSE/A-Level)</option>
                    <option>International Baccalaureate (IB)</option>
                    <option>Pearson Edexcel</option>
                    <option>8-4-4 / CBC Transition</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">How can we help your child?</label>
                <textarea rows={4} className="p-4 rounded-xl border border-slate-200 focus:border-brand-blue outline-none transition-all" placeholder="Tell us about their academic goals or challenges..."></textarea>
              </div>

              <button className="w-full md:w-auto px-12 py-5 bg-brand-blue text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                Request Consultation <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call or WhatsApp</p>
                    <p className="text-lg text-slate-700">+254 (0)  705 512735</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-brand-blue w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg text-slate-700">admissions@lifehackacademy.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-dark rounded-3xl text-white">
              <h4 className="font-playfair text-xl font-bold mb-4">Academy Hours</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex justify-between"><span>Mon — Fri</span> <span>8:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}