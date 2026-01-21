import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Small team, <br/> massive impact.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2024, SayHi Design Studio was born from the idea that great design starts with a simple conversation. We believe in transparency, collaboration, and cutting through the noise.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team consists of senior strategists, designers, and developers who have worked with startups and Fortune 500 companies alike. We bring big agency experience without the big agency bureaucracy.
            </p>
            
            <ul className="space-y-4">
              {[
                'Direct access to the founders',
                'Transparent pricing & timelines',
                'Weekly sprint updates',
                'Full intellectual property ownership'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODk5NTY2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team working together" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-sm text-slate-500 font-medium">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">12</div>
                  <div className="text-sm text-slate-500 font-medium">Awards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
