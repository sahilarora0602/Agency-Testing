import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Users, Zap, Layout, Globe, PenTool } from 'lucide-react';

interface IndustryGridProps {
  onNavigate?: (view: string, id: string) => void;
}

const industries = [
  {
    id: "saas",
    name: "SaaS & Tech",
    description: "Scalable interfaces for software products.",
    icon: <Layout className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzYWFzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "High-LTV shopping experiences.",
    icon: <Globe className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1612831661941-254341b885e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY4OTk1ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "smb",
    name: "SMB & Local",
    description: "Lead-gen sites that convert.",
    icon: <Users className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "fmcg",
    name: "FMCG & Beauty",
    description: "Packaging and brand storytelling.",
    icon: <PenTool className="text-white" size={24} />,
    image: "https://images.unsplash.com/photo-1759563874667-73fd773d33d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHBhY2thZ2luZyUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3Njg5OTU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onNavigate }) => {
  return (
    <section id="industries" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized by Industry</h2>
            <p className="text-slate-400 max-w-2xl">We understand the unique challenges of your sector. Select your industry to see tailored solutions and case studies.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onNavigate ? onNavigate('industry-detail', industry.id) : null}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img 
                src={industry.image} 
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              
              {/* Icon Overlay */}
              <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  {industry.icon}
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-slate-300 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {industry.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                    Explore Solutions <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
