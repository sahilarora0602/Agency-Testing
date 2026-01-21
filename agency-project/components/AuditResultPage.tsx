import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, CreditCard, ArrowRight, FileText, Star } from 'lucide-react';
import { toast } from 'sonner';
import { jsPDF } from "jspdf";

interface AuditResultPageProps {
  onNavigate: (view: string) => void;
}

export const AuditResultPage: React.FC<AuditResultPageProps> = ({ onNavigate }) => {
  const handleDownload = () => {
    toast.promise(
      generatePDF(),
      {
        loading: 'Generating personalized report...',
        success: 'Report downloaded successfully!',
        error: 'Could not generate report',
      }
    );
  };

  const generatePDF = async () => {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate processing
    
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(79, 70, 229); // Indigo 600
    doc.text("SayHi Design Studio", 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(30, 41, 59); // Slate 800
    doc.text("Preliminary Audit & Strategy Roadmap", 20, 35);
    
    // Line
    doc.setDrawColor(203, 213, 225);
    doc.line(20, 45, 190, 45);
    
    // Content
    doc.setFontSize(12);
    doc.setTextColor(71, 85, 105); // Slate 600
    doc.text("Thank you for requesting an audit. Based on your inputs, we have", 20, 60);
    doc.text("identified several key opportunities for your project.", 20, 67);
    
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text("Recommended Strategy: Growth Tier", 20, 85);
    
    doc.setFontSize(11);
    doc.setTextColor(71, 85, 105);
    doc.text("• Comprehensive UX Audit", 25, 95);
    doc.text("• High-Fidelity Interface Design", 25, 102);
    doc.text("• Interactive Prototyping", 25, 109);
    doc.text("• Design System Foundation", 25, 116);
    
    doc.text("Estimated Timeline: 4-6 Weeks", 20, 135);
    doc.text("Estimated Investment: $8k - $25k", 20, 142);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(148, 163, 184);
    doc.text("This is a preliminary automated report. Book a call for a full breakdown.", 20, 280);
    
    doc.save("SayHi-Audit-Preliminary.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-start gap-4"
        >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 size={24} />
            </div>
            <div>
                <h2 className="font-bold text-green-900 text-lg">Audit Request Received!</h2>
                <p className="text-green-800">Your personalized PDF roadmap has been generated. Download it below.</p>
            </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
        >
            <div className="p-8 sm:p-12 border-b border-slate-100 text-center">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">Recommended Strategy</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Growth Acceleration Package</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                    Based on your inputs, we recommend our Growth tier. This is best suited for businesses looking to scale quickly with a solid foundation.
                </p>
                
                 {/* PDF Download Button */}
                <button 
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-6 py-3 rounded-xl transition-all hover:scale-105"
                >
                    <FileText size={18} /> Download Preliminary Report (PDF)
                </button>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Left: What's included */}
                <div className="p-8 sm:p-12 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Star className="text-amber-400 fill-amber-400" size={18} /> 
                        Key Deliverables
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Comprehensive UX Audit & Strategy",
                            "High-Fidelity Interface Design",
                            "Interactive Prototyping",
                            "Design System Foundation",
                            "Developer Handoff Documentation",
                            "2 Rounds of Revisions"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                                <CheckCircle2 className="text-indigo-600 w-5 h-5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Actions */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mb-2">Estimated Investment</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-slate-900">$8,500</span>
                            <span className="text-slate-500">starting price</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-indigo-200">
                            <CreditCard size={20} />
                            Start with this Package
                        </button>
                        <a 
                            href="https://calendly.com/sayhi-demo/discovery" 
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-white text-slate-900 border border-slate-200 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-3"
                        >
                            <Calendar size={20} />
                            Book Strategy Call
                        </a>
                    </div>

                    <p className="text-xs text-center text-slate-400 mt-6">
                        Need a custom quote? <a href="#" className="text-indigo-600 underline">Contact sales directly</a>.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
        >
            <p className="text-slate-500 mb-6">While you wait for your full audit, browse our work.</p>
            <button 
                onClick={() => onNavigate('work')} 
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800"
            >
                Browse related case studies <ArrowRight size={16} className="ml-1" />
            </button>
        </motion.div>
      </div>
    </div>
  );
};
