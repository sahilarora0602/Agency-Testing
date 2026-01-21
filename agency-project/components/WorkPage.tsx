import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (view: string) => void;
  onStartAudit: (context: string) => void;
}

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "SaaS",
    service: "Dashboards",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzYWFzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    result: "+45% User Retention"
  },
  {
    id: 2,
    title: "Luxe Cosmetics",
    category: "E-commerce",
    service: "Websites",
    image: "https://images.unsplash.com/photo-1759563874667-73fd773d33d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHBhY2thZ2luZyUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3Njg5OTU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    result: "2x Conversion Rate"
  },
  {
    id: 3,
    title: "TaskFlow App",
    category: "SaaS",
    service: "Apps",
    image: "https://images.unsplash.com/photo-1758786977080-a5e60a3f843c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    result: "Featured on App Store"
  },
  {
    id: 4,
    title: "Corporate Identity",
    category: "B2B",
    service: "Branding",
    image: "https://images.unsplash.com/photo-1754666104720-28f18a9130e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGlkZW50aXR5JTIwc3RhdGlvbmVyeXxlbnwxfHx8fDE3Njg5OTU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    result: "Brand Unification"
  }
];

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onStartAudit }) => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'SaaS', 'E-commerce', 'B2B'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Explore our portfolio of digital products that have generated real results for our clients.
            </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-100 sticky top-20 bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4">
            {filters.map(f => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === f ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                    {f}
                </button>
            ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button 
                                    onClick={() => onStartAudit(project.service)}
                                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    Get Similar Results
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
                                <p className="text-slate-500">{project.category} · {project.service}</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-indigo-600 font-bold text-sm bg-indigo-50 px-3 py-1 rounded-full">
                                    {project.result}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-indigo-600 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl font-bold mb-6">Want results like these?</h2>
             <button 
                onClick={() => onStartAudit('General')}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
             >
                 Start Your Project
             </button>
         </div>
      </section>
    </div>
  );
};
