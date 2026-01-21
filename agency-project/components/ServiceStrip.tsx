import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, BarChart3, Box, Zap, Layout, Layers, PenTool, Package } from 'lucide-react';

interface ServiceStripProps {
  onNavigate?: (view: string, id: string) => void;
  onStartAudit?: (service: string) => void;
}

const services = [
  { id: 'websites', name: 'Websites', icon: <Globe size={20} />, desc: 'High-converting sites', price: '$3k - $15k' },
  { id: 'apps', name: 'Apps', icon: <Smartphone size={20} />, desc: 'Native iOS & Android', price: '$15k+' },
  { id: 'dashboards', name: 'Dashboards', icon: <BarChart3 size={20} />, desc: 'SaaS & Analytics', price: '$8k - $25k' },
  { id: 'saas', name: 'SaaS Products', icon: <Box size={20} />, desc: 'Full product design', price: '$10k+' },
  { id: 'branding', name: 'Branding', icon: <Zap size={20} />, desc: 'Identity & Voice', price: '$5k - $12k' },
  { id: 'uiux', name: 'UI/UX Audits', icon: <Layout size={20} />, desc: 'Optimize flows', price: '$2k flat' },
  { id: 'product', name: 'Product Design', icon: <Layers size={20} />, desc: 'Strategy & MVP', price: '$12k+' },
  { id: 'graphic', name: 'Graphic Design', icon: <PenTool size={20} />, desc: 'Marketing assets', price: 'Retainer' },
  { id: 'packaging', name: 'Packaging', icon: <Package size={20} />, desc: 'Physical goods', price: '$4k+' },
];

export const ServiceStrip: React.FC<ServiceStripProps> = ({ onNavigate, onStartAudit }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h2>
                <p className="text-slate-500">Comprehensive design solutions for every stage.</p>
            </div>
            {onNavigate && (
                <button onClick={() => onNavigate('work', '')} className="text-indigo-600 font-semibold text-sm hover:text-indigo-700">
                    View all services &rarr;
                </button>
            )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onNavigate ? onNavigate('service-detail', service.id) : null}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 p-6 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 text-slate-600 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{service.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{service.desc}</p>
              <p className="text-xs font-semibold text-slate-400 mb-4">{service.price}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                 <span className="text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Details &rarr;
                 </span>
                 {onStartAudit && (
                     <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onStartAudit(service.name);
                        }}
                        className="p-2 rounded-lg bg-indigo-50 text-indigo-600 opacity-80 hover:opacity-100 transition-opacity hover:bg-indigo-600 hover:text-white text-xs font-bold flex items-center gap-1"
                        title="Start specific audit"
                     >
                        <Zap size={12} /> Audit
                     </button>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
