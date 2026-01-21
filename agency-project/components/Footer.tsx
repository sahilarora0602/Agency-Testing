import React from 'react';
import { Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { toast } from 'sonner';

interface FooterProps {
    onNavigate: (view: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLegalClick = (e: React.MouseEvent) => {
      e.preventDefault();
      toast("Legal pages are not implemented in this demo.");
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => onNavigate('home')} className="font-bold text-2xl tracking-tighter text-white block mb-4 focus:outline-none">
              SayHi<span className="text-indigo-500">.</span>
            </button>
            <p className="text-slate-400 text-sm">
              Crafting digital experiences with heart and precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('work')} className="hover:text-white transition-colors text-left w-full">Work</button></li>
              <li><button onClick={() => onNavigate('home', 'services')} className="hover:text-white transition-colors text-left w-full">Services</button></li>
              <li><button onClick={() => onNavigate('home', 'about')} className="hover:text-white transition-colors text-left w-full">About</button></li>
              <li><button onClick={() => onNavigate('home', 'contact')} className="hover:text-white transition-colors text-left w-full">Contact</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors text-left w-full">Resources</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={16}/> Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={16}/> Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Dribbble size={16}/> Dribbble</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" onClick={handleLegalClick} className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={handleLegalClick} className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} SayHi Design Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
