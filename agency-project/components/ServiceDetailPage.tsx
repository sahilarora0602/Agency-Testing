import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Layout, Monitor, Smartphone, ShoppingCart, BarChart3, Box, Zap, PenTool, Package } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId?: string;
  onNavigate: (view: string) => void;
  onStartAudit: (service: string) => void;
}

const servicesData: Record<string, any> = {
  websites: {
    title: "Conversion-Focused Websites",
    description: "We build high-performance websites that tell your story and convert visitors into customers. From SaaS landing pages to corporate portals.",
    icon: <Monitor className="w-12 h-12 text-indigo-600" />,
    tabs: [
      { id: 'saas', label: 'SaaS / Tech', content: 'Optimized for demos and free trials.' },
      { id: 'ecommerce', label: 'E-commerce', content: 'Seamless checkout flows and product showcases.' },
      { id: 'marketing', label: 'Marketing', content: 'Story-driven layouts for brand building.' },
    ],
    benefits: [
      "Lightning fast loading speeds (90+ Google Score)",
      "SEO-optimized architecture",
      "Mobile-first responsive design",
      "CMS integration (Webflow / Headless)"
    ]
  },
  apps: {
    title: "Native & Cross-Platform Apps",
    description: "Intuitive mobile experiences for iOS and Android. We focus on retention, usability, and smooth performance.",
    icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
    tabs: [
      { id: 'consumer', label: 'Consumer', content: 'Engaging social and lifestyle apps.' },
      { id: 'b2b', label: 'Internal Tools', content: 'Productivity and field operations apps.' },
    ],
    benefits: [
      "React Native or Flutter development",
      "Native device feature integration",
      "Offline capabilities",
      "App Store submission management"
    ]
  },
  dashboards: {
    title: "SaaS Dashboards & Analytics",
    description: "We turn complex data into actionable insights. Our dashboard designs prioritize clarity, speed, and user decision-making.",
    icon: <BarChart3 className="w-12 h-12 text-indigo-600" />,
    tabs: [
      { id: 'executive', label: 'Executive', content: 'High-level KPIs and summaries.' },
      { id: 'operational', label: 'Operational', content: 'Real-time monitoring and controls.' },
    ],
    benefits: [
      "Information Architecture auditing",
      "Custom data visualization",
      "Dark/Light mode support",
      "Design system integration"
    ]
  },
  branding: {
    title: "Brand Identity & Strategy",
    description: "Stand out in a crowded market. We craft memorable visual identities that resonate with your target audience and build trust.",
    icon: <Zap className="w-12 h-12 text-indigo-600" />,
    tabs: [
      { id: 'identity', label: 'Visual Identity', content: 'Logo, colors, typography, and guidelines.' },
      { id: 'strategy', label: 'Brand Strategy', content: 'Positioning, voice, and values.' },
    ],
    benefits: [
      "Comprehensive brand guidelines",
      "Logo suite (primary, secondary, marks)",
      "Social media asset kit",
      "Print-ready stationary"
    ]
  },
  // Default fallback for other services
  default: {
    title: "Professional Design Services",
    description: "Expert design solutions tailored to your business needs. We combine strategy with aesthetics to drive results.",
    icon: <Layout className="w-12 h-12 text-indigo-600" />,
    tabs: [],
    benefits: [
      "Strategic approach to design",
      "Consistent brand visual language",
      "User-centric methodology",
      "Full ownership of assets"
    ]
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  serviceId = 'websites', 
  onNavigate, 
  onStartAudit 
}) => {
  const data = servicesData[serviceId] || servicesData.default;
  const [activeTab, setActiveTab] = useState(data.tabs[0]?.id || 'general');

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <button 
                onClick={() => onNavigate('home', 'services')}
                className="text-slate-500 hover:text-slate-900 font-medium mb-8 flex items-center gap-2"
            >
                ← Back to Services
            </button>
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-200">
                {data.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{data.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {data.description}
            </p>
            <div className="flex gap-4">
                <button 
                    onClick={() => onStartAudit(data.title)}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200"
                >
                    Start {data.title.split(' ')[0]} Audit
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {data.tabs.length > 0 && (
                <div className="mb-12 border-b border-slate-200">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {data.tabs.map((tab: any) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 text-sm font-bold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What you get</h2>
                    <ul className="space-y-4 mb-8">
                        {data.benefits.map((benefit: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                <div className="mt-1 bg-green-100 p-1 rounded-full">
                                    <Check className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-2">Why audit first?</h4>
                        <p className="text-slate-600 text-sm mb-4">
                            We don't believe in guesswork. Our audit process identifies exactly where you're losing users and how to fix it before we write a single line of code.
                        </p>
                        <button 
                             onClick={() => onStartAudit(data.title)}
                             className="text-indigo-600 font-bold text-sm flex items-center hover:underline"
                        >
                            Take the free assessment <ArrowRight size={14} className="ml-1"/>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Placeholder for Service Visual */}
                    <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative group border border-slate-200 shadow-sm">
                         <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-slate-400">
                             <div className="text-center">
                                {data.icon}
                                <p className="mt-4 font-medium text-slate-500">Service Visualization</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your {data.title.toLowerCase()}?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                    onClick={() => onStartAudit(data.title)}
                    className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors"
                >
                    Start Audit
                </button>
                <button 
                    onClick={() => onNavigate('work')}
                    className="bg-transparent border border-slate-700 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
                >
                    View Case Studies
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};
