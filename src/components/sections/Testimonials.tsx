import React from 'react';
import { Quote, Star, GraduationCap } from 'lucide-react';

const reviews = [
  {
    parent: "Grace M.",
    location: "Muthaiga, Nairobi",
    text: "Transitioning from 8-4-4 to IGCSE felt overwhelming until we met the Lifehack team. Their 2026 digital exam prep gave my daughter the confidence to excel.",
    result: "Achieved 7 A*s in IGCSE",
    tags: ["Cambridge", "Transition"]
  },
  {
    parent: "David O.",
    location: "Karen",
    text: "The personalized attention in the IB Diploma program is unmatched. The TOK and Extended Essay support was pivotal for university applications.",
    result: "Admitted to NYU",
    tags: ["IB DP", "University Prep"]
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
            Proven Outcomes.
          </h2>
          <p className="text-lg text-slate-500">Real stories from the Lifehack community.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between group hover:bg-brand-blue transition-all duration-500">
              <Quote className="absolute top-10 right-10 w-16 h-16 text-slate-200 group-hover:text-white/10 transition-colors" />
              
              <div>
                <div className="flex gap-1 mb-6 text-yellow-500 group-hover:text-white transition-colors">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl text-slate-700 leading-relaxed mb-8 group-hover:text-white transition-colors">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200 group-hover:border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-white transition-colors">{review.parent}</p>
                    <p className="text-sm text-slate-500 group-hover:text-white/70 transition-colors">{review.location}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm text-xs font-bold text-brand-blue group-hover:bg-brand-dark group-hover:text-white transition-all">
                    <GraduationCap size={14} /> {review.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}