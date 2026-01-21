import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FunnelSteps } from './components/FunnelSteps';
import { ServiceStrip } from './components/ServiceStrip';
import { IndustryGrid } from './components/IndustryGrid';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuizModal } from './components/QuizModal';
import { AuditResultPage } from './components/AuditResultPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { IndustryDetailPage } from './components/IndustryDetailPage';
import { WorkPage } from './components/WorkPage';
import { FAQ } from './components/FAQ';
import { CaseStudyDetailPage } from './components/CaseStudyDetailPage';
import { ResourcesPage } from './components/ResourcesPage';

type ViewType = 'home' | 'audit-result' | 'service-detail' | 'industry-detail' | 'work' | 'case-study' | 'resources';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [quizState, setQuizState] = useState({
    isOpen: false,
    initialService: '',
    initialIndustry: ''
  });
  const [selectedEntityId, setSelectedEntityId] = useState<string>('');

  // Navigation Logic
  const handleNavigate = (view: string, id?: string) => {
    // Check if it's a view change or just a scroll on home
    if (view === 'home' && id && currentView === 'home') {
      scrollToSection(id);
      return;
    }
    
    // Set entity ID for detail views
    if (id) setSelectedEntityId(id);
    
    // Change view
    setCurrentView(view as ViewType);
    
    // If going to home with a section ID, wait for render then scroll
    if (view === 'home' && id) {
      setTimeout(() => scrollToSection(id), 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuiz = (service = '', industry = '') => {
    setQuizState({
      isOpen: true,
      initialService: service,
      initialIndustry: industry
    });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'audit-result':
        return <AuditResultPage onNavigate={(view) => handleNavigate(view)} />;
      
      case 'service-detail':
        return (
            <ServiceDetailPage 
                serviceId={selectedEntityId} 
                onNavigate={(view) => handleNavigate(view)}
                onStartAudit={(service) => openQuiz(service)}
            />
        );

      case 'industry-detail':
        return (
            <IndustryDetailPage 
                industryId={selectedEntityId}
                onNavigate={(view) => handleNavigate(view)}
                onStartAudit={(industry) => openQuiz('', industry)}
            />
        );

      case 'work':
        return (
            <WorkPage 
                onNavigate={(view) => handleNavigate(view)}
                onStartAudit={(context) => openQuiz(context)}
            />
        );

      case 'case-study':
        return (
            <CaseStudyDetailPage
                caseStudyId={selectedEntityId}
                onNavigate={(view) => handleNavigate(view)}
                onStartAudit={(context) => openQuiz(context)}
            />
        );

      case 'resources':
        return <ResourcesPage onNavigate={(view) => handleNavigate(view)} />;

      case 'home':
      default:
        return (
          <main>
            <Hero onOpenQuiz={() => openQuiz()} onNavigate={handleNavigate} />
            <FunnelSteps />
            <ServiceStrip 
                onNavigate={handleNavigate} 
                onStartAudit={(service) => openQuiz(service)}
            />
            <IndustryGrid 
                onNavigate={handleNavigate} 
            />
            <Portfolio onNavigate={handleNavigate} />
            <div className="text-center pb-8 bg-white">
                 <button 
                    onClick={() => handleNavigate('work')}
                    className="text-indigo-600 font-bold hover:underline"
                 >
                    View Full Portfolio
                 </button>
            </div>
            <Pricing />
            <About />
            <FAQ />
            <Contact onOpenQuiz={() => openQuiz()} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster position="bottom-right" />
      <Navbar onOpenQuiz={() => openQuiz()} onNavigate={handleNavigate} />
      
      {renderContent()}
      
      <Footer onNavigate={handleNavigate} />
      
      <QuizModal 
        isOpen={quizState.isOpen} 
        onClose={() => setQuizState(prev => ({ ...prev, isOpen: false }))}
        initialService={quizState.initialService}
        initialIndustry={quizState.initialIndustry}
        onComplete={() => setCurrentView('audit-result')}
      />
    </div>
  );
}

export default App;
