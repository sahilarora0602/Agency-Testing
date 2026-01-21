import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines depend on the scope. A standard 5-page website typically takes 2-4 weeks. A full SaaS MVP design takes 4-8 weeks. We provide a detailed timeline with every proposal."
  },
  {
    question: "What is included in the 'Growth' tier?",
    answer: "The Growth tier is our most popular package. It includes a full website or mobile app design, a comprehensive identity system (logo, colors, typography), custom illustrations, and advanced interaction design. It typically takes 4-8 weeks."
  },
  {
    question: "Do you build the websites/apps or just design them?",
    answer: "We are a full-service agency. We handle strategy, design, and development. For development, we specialize in React, Next.js, and Webflow for marketing sites."
  },
  {
    question: "How does the 'Zero-Touch' audit work?",
    answer: "It's simple. You answer a few questions about your business, goals, and current metrics in our quiz. Our system (and team) analyzes this data to generate a personalized PDF roadmap and proposal, delivered to your email in minutes."
  },
  {
    question: "Can I mix and match services?",
    answer: "Absolutely. While we have tiered packages, we often create custom scopes. You can start with a branding audit and upgrade to a full product design retainer later."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about working with SayHi.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 hover:bg-white transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-indigo-600 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-indigo-50 rounded-2xl p-8">
            <HelpCircle size={32} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 mb-6">We're happy to help. Book a quick 15-min chat with our founders.</p>
            <a 
                href="https://calendly.com/sayhi-demo/discovery" 
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
                Book a Chat
            </a>
        </div>
      </div>
    </section>
  );
};
