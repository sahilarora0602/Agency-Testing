import React from 'react';
import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface PortfolioProps {
    onNavigate?: (view: string, id?: string) => void;
}

const projects = [
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "SaaS",
    service: "Dashboards",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzYWFzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODk5NTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    metric: "45% Retention Uplift"
  },
  {
    id: "minimalist-brand",
    title: "Minimalist Brand",
    category: "Branding",
    service: "Branding",
    image: "https://images.unsplash.com/photo-1649000809102-61d0fe6759b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwc2tldGNoZXN8ZW58MXx8fHwxNzY4OTk1NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    metric: "Featured on Behance"
  },
  {
    id: "eco-workspace",
    title: "Eco Workspace",
    category: "Web Design",
    service: "Websites",
    image: "https://images.unsplash.com/photo-1707426067560-fa05ece6eb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMGludGVyaW9yJTIwY2hlZXJmdWx8ZW58MXx8fHwxNzY4OTk1NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    metric: "2x Lead Gen"
  },
  {
    id: "team-app",
    title: "Team Collaboration App",
    category: "Product Design",
    service: "Apps",
    image: "https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODk5NTY2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    metric: "Seed Funding Secured"
  }
];

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Selected Work</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900">
              Designs That Delivered <br/> Real Business Results.
            </p>
          </div>
          <button 
             onClick={() => onNavigate && onNavigate('work')}
             className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2"
          >
            View all case studies &rarr;
          </button>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}>
          <Masonry gutter="2rem">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => onNavigate && onNavigate('case-study', project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-10 flex items-center justify-center">
                     <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 font-bold px-6 py-3 rounded-full shadow-lg">
                        View Case Study
                     </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ minHeight: '300px' }}
                  />
                  {/* Metric Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                     <TrendingUp size={12} /> {project.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                    {project.category} 
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span> 
                    {project.service}
                </p>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        
        <div className="mt-12 text-center md:hidden">
             <button 
                onClick={() => onNavigate && onNavigate('work')}
                className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
             >
                View Full Portfolio
             </button>
        </div>
      </div>
    </section>
  );
};
