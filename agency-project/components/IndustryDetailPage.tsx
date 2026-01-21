import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react';

interface IndustryDetailPageProps {
  industryId?: string;
  onNavigate: (view: string) => void;
  onStartAudit: (industry: string) => void;
}

const industryData: Record<string, any> = {
  saas: {
    title: "SaaS & Tech Startups",
    description: "Scale your product with user-centric design. We help SaaS companies reduce churn and increase trial-to-paid conversions.",
    stats: [
        { label: "Avg. Conversion Uplift", value: "35%" },
        { label: "Churn Reduction", value: "20%" },
        { label: "Time to Market", value: "4wks" },
    ]
  },
  ecommerce: {
    title: "E-commerce & D2C",
    description: "Build a brand that stands out on the digital shelf. From unboxing experiences to checkout optimization.",
    stats: [
        { label: "Cart Abandonment Drop", value: "15%" },
        { label: "AOV Increase", value: "22%" },
        { label: "Brand Recall", value: "High" },
    ]
  },
  // Fallback
  default: {
    title: "Industry Solutions",
    description: "Tailored design strategies for your specific market sector.",
    stats: [
        { label: "Client Satisfaction", value: "100%" },
        { label: "Projects Delivered", value: "50+" },
        { label: "Years Experience", value: "5+" },
    ]
  }
};

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  industryId = 'saas',
  onNavigate,
  onStartAudit
}) => {
  const data = industryData[industryId] || industryData.default;

  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
            >
                <button 
                    onClick={() => onNavigate('home', 'industries')}
                    className="text-slate-400 hover:text-white font-medium mb-8 flex items-center gap-2"
                >
                    ← Back to Industries
                </button>
                <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm mb-4 block">Industry Focus</span>
                <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
                <p className="text-xl text-slate-300 max-w-2xl mb-10">{data.description}</p>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => onStartAudit(data.title)}
                        className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors"
                    >
                        Start {data.title} Audit
                    </button>
                </div>
            </motion.div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-indigo-900/20 to-transparent pointer-events-none" />
      </section>

      {/* Stats Strip */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-slate-200">
                {data.stats.map((stat: any, i: number) => (
                    <div key={i} className="py-8 text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                        <div className="text-slate-500 text-sm font-medium uppercase">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Challenges We Solve</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4">
                                    <Zap size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Challenge #{i}</h3>
                                <p className="text-slate-600 text-sm">
                                    Detailed explanation of a specific pain point in this industry and how we approach fixing it.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-2xl h-fit sticky top-24">
                    <h3 className="font-bold text-slate-900 mb-4">Relevant Services</h3>
                    <ul className="space-y-3 mb-8">
                        {["Websites", "Dashboards", "Branding"].map(s => (
                            <li key={s} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-700">
                                {s}
                                <ArrowRight size={14} className="text-slate-400" />
                            </li>
                        ))}
                    </ul>
                    <button 
                         onClick={() => onNavigate('work')}
                         className="w-full text-center text-indigo-600 font-bold text-sm hover:underline"
                    >
                        See Case Studies
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
