import React from 'react';
import { ShieldCheck, Target, Users2, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section - Capturing the core mission */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 mb-8">
            Learning Begins With Us.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
            Founded in 2018, <span className="text-brand-blue font-semibold">Lifehack Academy</span> brings 
            the individual attention your child needs right into your home. We bridge the gap between 
            standardized testing and real-world success through holistic growth.
          </p>
        </div>
      </section>

      {/* Vision & Mission - Actual Website Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-brand-dark">Our Vision</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our vision is to develop skills and help learners identify their interests at early ages. 
              We believe our training shouldn't end with a normal curriculum; we make life skills part 
              and parcel of a student's daily training to ensure much-needed holistic growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-blue w-6 h-6" />
                <span className="font-semibold text-slate-700">TSC Certified Educators</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-brand-blue w-6 h-6" />
                <span className="font-semibold text-slate-700">Tailored Teaching Models</span>
              </div>
            </div>
          </div>
          <div className="bg-brand-blue/5 p-10 rounded-3xl border border-brand-blue/10">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-brand-blue">Why Lifehack?</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              "It matters not the curriculum you or your child is interested in, our TSC Certified 
              teachers will equip your kid with the relevant knowledge needed to flourish in the 21st century."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-grow bg-brand-blue/20"></div>
              <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">Est. 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Pillars Section */}
      <section className="py-20 px-6 bg-brand-dark text-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Homeschooling Redefined</h2>
            <p className="text-slate-400">Beyond the textbook, we build the individual.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="mb-6 flex justify-center"><Rocket className="w-12 h-12 text-brand-blue" /></div>
              <h3 className="text-xl font-bold mb-4">Skills Discovery</h3>
              <p className="text-slate-400 text-sm">Identifying interests early to shape future career paths and passions.</p>
            </div>
            <div className="p-6">
              <div className="mb-6 flex justify-center"><Users2 className="w-12 h-12 text-brand-blue" /></div>
              <h3 className="text-xl font-bold mb-4">Individual Attention</h3>
              <p className="text-slate-400 text-sm">Teaching models customized specifically for your child's learning style.</p>
            </div>
            <div className="p-6">
              <div className="mb-6 flex justify-center"><ShieldCheck className="w-12 h-12 text-brand-blue" /></div>
              <h3 className="text-xl font-bold mb-4">TSC Quality</h3>
              <p className="text-slate-400 text-sm">Registered professionals committed to Kenyan and International standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}