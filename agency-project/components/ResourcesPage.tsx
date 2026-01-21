import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, PlayCircle, BookOpen } from 'lucide-react';

interface ResourcesPageProps {
    onNavigate: (view: string) => void;
}

const resources = [
    {
        title: "SaaS UX Audit Checklist",
        type: "Guide",
        icon: <FileText className="text-indigo-600" size={24} />,
        desc: "A 50-point checklist to identify friction in your product onboarding."
    },
    {
        title: "Conversion Rate Optimization Guide",
        type: "E-Book",
        icon: <BookOpen className="text-pink-500" size={24} />,
        desc: "Strategies to increase landing page conversions without more traffic."
    },
    {
        title: "Design System 101",
        type: "Video",
        icon: <PlayCircle className="text-purple-500" size={24} />,
        desc: "How to set up your first design system in Figma."
    },
    {
        title: "Startup Pitch Deck Template",
        type: "Template",
        icon: <Download className="text-green-500" size={24} />,
        desc: "The exact slide structure we use to help clients raise seed rounds."
    }
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-20">
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Resources</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Tools, guides, and insights to help you build better digital products.
                </p>
            </div>
        </section>

        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {resources.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-slate-100 transition-colors">
                                    {res.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{res.type}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{res.title}</h3>
                            <p className="text-slate-600 mb-6">{res.desc}</p>
                            <button className="text-indigo-600 font-bold text-sm flex items-center hover:underline">
                                Access Now <span className="ml-1">&rarr;</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};
