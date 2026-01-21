import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, User } from 'lucide-react';

interface CaseStudyDetailPageProps {
  caseStudyId?: string;
  onNavigate: (view: string) => void;
  onStartAudit: (context: string) => void;
}

// Mock Database
const caseStudies: Record<string, any> = {
  "fintech-dashboard": {
    title: "Fintech Dashboard Redesign",
    client: "FinTrack Inc.",
    service: "SaaS Dashboard",
    industry: "Fintech",
    outcome: "45% Retention Uplift",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzYWFzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "FinTrack's legacy dashboard was overwhelming users with data density, leading to a high churn rate during the 14-day trial period.",
    solution: "We simplified the information architecture, introducing a progressive disclosure model. We built a customizable widget system allowing users to prioritize their own KPIs.",
    results: [
        "45% increase in Day-30 retention",
        "22% reduction in support tickets",
        "NPS score increased from 32 to 58"
    ]
  },
  "minimalist-brand": {
    title: "Eco-Luxe Brand Identity",
    client: "PureHome",
    service: "Branding",
    industry: "E-commerce",
    outcome: "Featured on Behance",
    image: "https://images.unsplash.com/photo-1649000809102-61d0fe6759b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwc2tldGNoZXN8ZW58MXx8fHwxNzY4OTk1NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "PureHome needed to pivot from a generic dropshipping look to a premium, sustainable lifestyle brand to justify higher price points.",
    solution: "We crafted a complete visual identity system centered on 'Organic Minimalism'. This included a new logo, color palette derived from nature, and sustainable packaging design.",
    results: [
        "Featured on Behance Branding gallery",
        "30% increase in Average Order Value (AOV)",
        "Social media engagement tripled in 2 months"
    ]
  },
  // Default fallback
  "default": {
    title: "Team Collaboration App",
    client: "TaskFlow",
    service: "Product Design",
    industry: "SaaS",
    outcome: "Seed Funding Secured",
    image: "https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODk5NTY2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "TaskFlow struggled to differentiate itself in a crowded project management market. Users found the interface 'clunky' compared to competitors.",
    solution: "We focused on 'Joyful Productivity'—adding micro-interactions, celebratory animations for completed tasks, and a streamlined 'Focus Mode'.",
    results: [
        "$2M Seed Funding secured post-redesign",
        "Daily Active Users (DAU) up by 60%",
        "Viral growth via team invites increased 2x"
    ]
  }
};

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ 
    caseStudyId = "default", 
    onNavigate,
    onStartAudit 
}) => {
  const data = caseStudies[caseStudyId] || caseStudies.default;

  return (
    <div className="bg-white min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button 
                onClick={() => onNavigate('work')}
                className="flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-8"
            >
                <ArrowLeft size={16} className="mr-2" /> Back to Work
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                {data.service}
                            </span>
                            <span className="text-slate-400 text-sm font-medium">
                                {data.industry}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <div className="flex items-center gap-2 text-xl font-medium text-slate-900 mb-8">
                             <TrendingUp className="text-green-500" /> {data.outcome}
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            How we helped {data.client} transform their user experience and achieve measurable business growth through strategic design.
                        </p>
                        
                        <div className="flex gap-8 border-t border-slate-100 pt-8">
                             <div>
                                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Client</div>
                                <div className="font-semibold text-slate-900">{data.client}</div>
                             </div>
                             <div>
                                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Timeline</div>
                                <div className="font-semibold text-slate-900">8 Weeks</div>
                             </div>
                             <div>
                                <div className="text-xs text-slate-400 uppercase font-bold mb-1">Role</div>
                                <div className="font-semibold text-slate-900">End-to-End Design</div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Body */}
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                         <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {data.challenge}
                            </p>
                         </section>
                         <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                {data.solution}
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-indigo-500 italic text-slate-700">
                                "The team at SayHi didn't just design screens; they redesigned our entire customer journey. The results speak for themselves."
                                <div className="mt-4 text-sm font-bold text-slate-900 not-italic">— CEO, {data.client}</div>
                            </div>
                         </section>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-slate-900 text-white p-8 rounded-2xl sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Key Results</h3>
                            <ul className="space-y-6">
                                {data.results.map((res: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="font-medium">{res}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <p className="text-slate-400 text-sm mb-4">Want results like this?</p>
                                <button 
                                    onClick={() => onStartAudit(data.service)}
                                    className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                                >
                                    Get {data.service} Audit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};
