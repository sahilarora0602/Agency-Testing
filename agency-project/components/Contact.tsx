import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface ContactProps {
    onOpenQuiz?: () => void;
}

type FormData = {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

export const Contact: React.FC<ContactProps> = ({ onOpenQuiz }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    
    // Simulate Success & Redirect logic
    toast.success("Request sent! Check your email for next steps.");
    reset();
    
    // In a real app, we might redirect here
    // window.location.href = '/thank-you'; 
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Start a Project</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's build something great.</h3>
            <p className="text-lg text-slate-600 mb-12">
              Ready to move fast? Fill out the form to get a quote and strategy call booking link instantly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <a href="mailto:hello@sayhi.studio" className="text-slate-600 hover:text-indigo-600 transition-colors">hello@sayhi.studio</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Book Directly</h4>
                  <a href="https://calendly.com/sayhi-demo/discovery" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">Schedule a 15-min discovery call</a>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                 <h4 className="font-bold text-indigo-900 mb-2">Not ready to talk?</h4>
                 <p className="text-sm text-indigo-800 mb-3">Get a free automated audit of your current site or app instead.</p>
                 <button 
                    onClick={onOpenQuiz}
                    className="text-xs font-bold bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                 >
                    Launch Audit
                 </button>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                        }
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    placeholder="john@company.com"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="website">Website Redesign</option>
                  <option value="app">Mobile App</option>
                  <option value="dashboard">SaaS Dashboard</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service.message}</span>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                 <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Budget</label>
                    <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    >
                    <option value="<5k">Less than $5k</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-50k">$15k - $50k</option>
                    <option value="50k+">$50k+</option>
                    </select>
                 </div>
                 <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                    <select
                    {...register("timeline")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white"
                    >
                    <option value="asap">ASAP</option>
                    <option value="1mo">Within 1 month</option>
                    <option value="3mo">1-3 months</option>
                    <option value="flexible">Flexible</option>
                    </select>
                 </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white resize-none"
                  placeholder="Tell us about your goals..."
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Request & Book Call <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
