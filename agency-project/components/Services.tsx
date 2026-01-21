import React from 'react';
import { motion } from 'motion/react';
import { Palette, Layout, Code, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Branding & Identity",
    description: "We build memorable brands with cohesive visual systems, logos, and voice guidelines that resonate with your target audience.",
    color: "bg-pink-500"
  },
  {
    icon: <Layout className="w-8 h-8 text-white" />,
    title: "UI/UX Design",
    description: "User-centric interfaces that are intuitive and beautiful. We focus on usability testing and wireframing before pixel-perfect design.",
    color: "bg-indigo-600"
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Web Development",
    description: "From React to Webflow, we bring designs to life with clean, semantic code that performs perfectly on all devices.",
    color: "bg-cyan-500"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile application design and development for iOS and Android.",
    color: "bg-orange-500"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Our Expertise</h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Everything you need to launch.</p>
          <p className="text-lg text-slate-600">We don't just make things look good. We build comprehensive design solutions that work for your business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-${service.color}/30`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
