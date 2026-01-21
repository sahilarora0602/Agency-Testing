import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onNavigate: (view: string, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Services', view: 'home', sectionId: 'services', hasDropdown: true },
    { name: 'Industries', view: 'home', sectionId: 'industries', hasDropdown: true },
    { name: 'Work', view: 'work', sectionId: '', hasDropdown: false },
    { name: 'Resources', view: 'resources', sectionId: '', hasDropdown: false },
    { name: 'Pricing', view: 'home', sectionId: 'pricing', hasDropdown: false },
    { name: 'About', view: 'home', sectionId: 'about', hasDropdown: false },
  ];

  const handleLinkClick = (view: string, sectionId?: string) => {
    onNavigate(view, sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <button 
                onClick={() => handleLinkClick('home')}
                className="font-bold text-2xl tracking-tighter text-slate-900 focus:outline-none"
            >
              SayHi<span className="text-indigo-600">.</span>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleLinkClick(link.view, link.sectionId)}
                  className="flex items-center text-slate-600 hover:text-indigo-600 font-medium transition-colors py-2 focus:outline-none"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                </button>
                
                {/* Dropdown (Simple simulation) */}
                {link.hasDropdown && activeDropdown === link.name && (
                   <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden py-1 animate-fadeIn">
                      <button onClick={() => handleLinkClick(link.view, link.sectionId)} className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600">
                         View All {link.name}
                      </button>
                   </div>
                )}
              </div>
            ))}
            <button
              onClick={onOpenQuiz}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-indigo-500/20 focus:outline-none"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view, link.sectionId)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg focus:outline-none"
                >
                  {link.name}
                </button>
              ))}
               <button
                onClick={() => { setIsOpen(false); onOpenQuiz(); }}
                className="w-full mt-4 text-center bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
