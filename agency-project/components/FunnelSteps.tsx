import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, FileText, Mail, PhoneCall, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-white" />,
    title: "Take the Quiz",
    description: "Answer a few questions about your project goals and requirements.",
    color: "bg-blue-500"
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Get PDF Audit",
    description: "Receive an instant, personalized roadmap and audit report.",
    color: "bg-indigo-500"
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email Nurture",
    description: "Get detailed insights and value-packed tips delivered to your inbox.",
    color: "bg-violet-500"
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    title: "Discovery Call",
    description: "Book a call to discuss the execution plan when you're ready.",
    color: "bg-purple-500"
  }
];

export const FunnelSteps = () => {
  return (
    <section className="py-12 border-b border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">How it works</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-10" />

            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 rounded-2xl ${step.color} shadow-lg flex items-center justify-center mb-6 relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300`}>
                  {step.icon}
                  <div className="absolute -bottom-3 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-slate-100 text-slate-600">
                    Step 0{index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
