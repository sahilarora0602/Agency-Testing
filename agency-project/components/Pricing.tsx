import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, HelpCircle, Download, Calendar, Zap } from 'lucide-react';

export const Pricing = () => {
  const [tier, setTier] = useState('growth'); // starter, growth, scale

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Investment</h2>
          <p className="text-slate-600">
            Choose the package that fits your stage. No hidden fees, no surprises.
          </p>
        </div>

        {/* Tier Toggles (Mobile/Tablet optimized view switch) */}
        <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-xl border border-slate-200 inline-flex">
                {['starter', 'growth', 'scale'].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTier(t)}
                        className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tier === t ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className={`bg-white rounded-2xl border transition-all duration-300 ${tier === 'starter' ? 'ring-2 ring-indigo-600 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm opacity-60 hover:opacity-100'}`}>
                <div className="p-8 border-b border-slate-50">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Starter</h3>
                    <p className="text-sm text-slate-500 mb-6">For early-stage validation.</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900">$3k - $8k</span>
                    </div>
                </div>
                <div className="p-8">
                    <ul className="space-y-4 mb-8">
                        {["Landing Page or 5-Screen MVP", "Basic Brand Style Guide", "Stock Assets", "2 Weeks Timeline"].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="https://calendly.com/sayhi-demo/discovery" 
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-center py-3 rounded-xl font-bold border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
                    >
                        Book Strategy Call
                    </a>
                </div>
            </div>

            {/* Growth (Highlighted) */}
            <div className={`bg-white rounded-2xl border transition-all duration-300 ${tier === 'growth' ? 'ring-2 ring-indigo-600 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm opacity-60 hover:opacity-100'}`}>
                <div className="p-8 border-b border-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                    <h3 className="text-lg font-bold text-indigo-600 mb-2 flex items-center gap-2">
                        Growth <Zap size={16} fill="currentColor"/>
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">For scaling companies.</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900">$8k - $25k</span>
                    </div>
                </div>
                <div className="p-8">
                    <ul className="space-y-4 mb-8">
                        {["Full Website or Mobile App", "Comprehensive Identity System", "Custom Illustrations/Icons", "Advanced Interaction Design", "4-8 Weeks Timeline"].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <Check size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                        Start with Growth
                    </button>
                </div>
            </div>

            {/* Scale */}
            <div className={`bg-white rounded-2xl border transition-all duration-300 ${tier === 'scale' ? 'ring-2 ring-indigo-600 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm opacity-60 hover:opacity-100'}`}>
                <div className="p-8 border-b border-slate-50">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Scale</h3>
                    <p className="text-sm text-slate-500 mb-6">For enterprise needs.</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900">$25k+</span>
                    </div>
                </div>
                <div className="p-8">
                    <ul className="space-y-4 mb-8">
                        {["Multi-Platform Product Suite", "Enterprise Design System", "Advanced 3D & Motion", "User Testing & Research", "3+ Months Support"].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl font-bold border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-1">
                <HelpCircle size={14} /> Not sure which tier? <a href="#" className="text-indigo-600 underline">Take the quiz</a> to get a recommendation.
            </p>
        </div>
      </div>
    </section>
  );
};
