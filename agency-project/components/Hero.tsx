import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onNavigate: (view: string, sectionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onNavigate }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
             <span className="text-sm font-semibold text-indigo-700 tracking-wide uppercase">
                Zero-Touch Agency Model
             </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
            End-to-End Design Solutions: <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Websites, Apps, SaaS & More
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Pick Your Service <ArrowRight size={16} className="inline mx-1 text-slate-400" /> Get Instant Audit + Proposal in 60 Seconds. 
            <span className="block text-indigo-600 font-bold mt-2">No Sales Call Needed.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={onOpenQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
            >
              Launch My Audit
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate('home', 'services')}
                className="inline-flex items-center justify-center text-slate-600 font-medium hover:text-indigo-600 transition-colors px-4 py-2"
              >
                View Services
              </button>
               <button 
                onClick={() => onNavigate('work')}
                className="inline-flex items-center justify-center text-slate-600 font-medium hover:text-indigo-600 transition-colors px-4 py-2"
              >
                See Case Studies
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col items-center gap-4 animate-fadeIn delay-500">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by 50+ Modern Brands</p>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* SVG Placeholders for Logos */}
                <svg className="h-8 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                   <path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z" />
                   <text x="35" y="28" fontSize="8" fontFamily="sans-serif" fontWeight="bold" opacity="0">ACME Corp</text>
                </svg>
                <svg className="h-8 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                   <circle cx="15" cy="15" r="10" />
                   <rect x="35" y="10" width="50" height="10" rx="2" />
                </svg>
                <svg className="h-8 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                   <rect x="5" y="5" width="20" height="20" rx="5" />
                   <path d="M35,10 H85 M35,20 H65" stroke="currentColor" strokeWidth="4" />
                </svg>
                <svg className="h-8 w-auto text-slate-600" viewBox="0 0 100 30" fill="currentColor">
                   <path d="M10,25 L20,5 L30,25 M15,18 H25" stroke="currentColor" strokeWidth="3" />
                   <text x="35" y="22" fontSize="18" fontFamily="sans-serif" fontWeight="bold">APEX</text>
                </svg>
             </div>
             <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mt-2 bg-slate-50 px-4 py-1 rounded-full border border-slate-100">
                <div className="flex text-amber-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                </div>
                <span>4.9/5 Average Rating</span>
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      </div>
    </section>
  );
};
