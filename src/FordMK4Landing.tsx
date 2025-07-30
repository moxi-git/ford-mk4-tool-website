import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download, Github, AlertTriangle, ExternalLink, Search, Trash2, Car, GitBranch, Package } from 'lucide-react';

const FordMK4Landing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.fade-in-up').forEach((el, index) => {
      el.id = `fade-${index}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  }, []);

  const openGitHub = useCallback(() => {
    window.open('https://github.com/moxi-git/ford-mk4-tool', '_blank');
  }, []);

  const openReleases = useCallback(() => {
    window.open('https://github.com/moxi-git/ford-mk4-tool/releases', '_blank');
  }, []);

  const cloneRepo = useCallback(() => {
    navigator.clipboard.writeText('git clone https://github.com/moxi-git/ford-mk4-tool.git');
    alert('Repository URL copied to clipboard!\n\ngit clone https://github.com/moxi-git/ford-mk4-tool.git');
  }, []);

  const headerBg = scrollY > 50 
    ? 'bg-black/90 backdrop-blur-[40px] border-white/10' 
    : 'bg-black/30 backdrop-blur-[20px] border-white/5';

  const parallaxOffset = scrollY * 0.15;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative">
      {/* Optimized Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate3d(0, ${parallaxOffset * 0.3}px, 0)`,
            animation: 'float-1 30s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #5E5CE6 0%, transparent 70%)',
            top: '40%',
            right: '15%',
            transform: `translate3d(0, ${parallaxOffset * 0.4}px, 0)`,
            animation: 'float-2 25s ease-in-out infinite -8s'
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[90px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #30D158 0%, transparent 70%)',
            bottom: '20%',
            left: '20%',
            transform: `translate3d(0, ${parallaxOffset * 0.2}px, 0)`,
            animation: 'float-3 35s ease-in-out infinite -15s'
          }}
        />
      </div>

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
          33% { transform: translate3d(-10px, -20px, 0) scale(1.05); }
          66% { transform: translate3d(15px, 10px, 0) scale(0.95); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
          25% { transform: translate3d(12px, -15px, 0) scale(1.08); }
          75% { transform: translate3d(-8px, 12px, 0) scale(0.92); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate3d(0px, 0px, 0) scale(1); }
          40% { transform: translate3d(-15px, -8px, 0) scale(1.03); }
          80% { transform: translate3d(10px, -5px, 0) scale(0.97); }
        }

        @keyframes pulse-warning {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(255, 59, 48, 0.4), 0 0 60px rgba(255, 59, 48, 0.2);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 59, 48, 0.6), 0 0 80px rgba(255, 59, 48, 0.3);
            transform: scale(1.02);
          }
        }

        @keyframes scan-line {
          0%, 100% { 
            opacity: 0; 
            transform: translateX(-100%) scaleX(0); 
          }
          50% { 
            opacity: 1; 
            transform: translateX(0%) scaleX(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateX(100%) scaleX(0); 
          }
        }

        @keyframes shimmer {
          0% { 
            left: -100%; 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            left: 100%; 
            opacity: 0; 
          }
        }

        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)); }
        }

        .glass {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(35px) saturate(200%);
          -webkit-backdrop-filter: blur(35px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 16px 48px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .glass-warning {
          background: rgba(255, 59, 48, 0.08);
          backdrop-filter: blur(30px) saturate(180%);
          border: 1px solid rgba(255, 59, 48, 0.2);
          box-shadow: 
            0 12px 40px rgba(255, 59, 48, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .fade-in-up {
          opacity: 0;
          transform: translate3d(0, 50px, 0);
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform, opacity;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }

        .shimmer-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transition: left 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform;
        }

        .shimmer-btn:hover::before {
          left: 100%;
        }

        .warning-banner {
          animation: pulse-warning 3s ease-in-out infinite;
        }

        .scan-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #FF3B30 50%, transparent);
          animation: scan-line 3s ease-in-out infinite;
          will-change: transform;
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          will-change: transform;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(168, 85, 247, 0.06) 100%);
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .icon-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #60a5fa 40%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          position: relative;
          overflow: hidden;
          will-change: transform;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          transform: translate3d(0, -3px, 0) scale(1.02);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          will-change: transform;
        }

        .btn-secondary:hover {
          transform: translate3d(0, -2px, 0) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.1);
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 py-3 md:py-4 transition-all duration-500 border-b ${headerBg}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient tracking-tight">
            Ford MK4 OBD
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              {['features', 'status', 'download'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-white/70 hover:text-blue-400 transition-all duration-300 font-medium capitalize hover:-translate-y-0.5 tracking-tight text-sm lg:text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full glass-strong border-b border-white/10 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="px-4 sm:px-6 py-6">
            <ul className="space-y-4">
              {['features', 'status', 'download'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-white/70 hover:text-blue-400 transition-colors font-medium capitalize py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-gradient leading-tight tracking-tight">
            Ford MK4 OBD Tool
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/60 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto font-light tracking-tight leading-relaxed">
            Professional diagnostic software engineered for Ford MK4 generation vehicles
          </p>
          
          <div className="inline-flex items-center glass-warning warning-banner text-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold mb-8 sm:mb-12 md:mb-16 tracking-wide text-sm sm:text-base">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            UNTESTED - IN DEVELOPMENT
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
            <button
              onClick={() => scrollToSection('download')}
              className="w-full sm:w-auto btn-primary text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-semibold transition-all duration-500 shimmer-btn tracking-tight text-sm sm:text-base"
            >
              <Download className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Get Started
            </button>
            
            <button
              onClick={openGitHub}
              className="w-full sm:w-auto glass btn-secondary text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-semibold transition-all duration-500 tracking-tight group text-sm sm:text-base"
            >
              <Github className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              View on GitHub
              <ExternalLink className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-gradient tracking-tight">
            Diagnostic Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {[
              {
                icon: Search,
                title: 'Read DTCs',
                description: 'Retrieve Diagnostic Trouble Codes directly from your Ford MK4\'s ECU system with comprehensive error information for precise diagnostics.'
              },
              {
                icon: Trash2,
                title: 'Clear DTCs', 
                description: 'Clear stored Diagnostic Trouble Codes after repairs. Reset error codes and turn off the check engine light with confidence.'
              },
              {
                icon: Car,
                title: 'Ford MK4 Optimized',
                description: 'Specifically engineered for Ford MK4 vehicles with tailored protocols and enhanced compatibility for reliable communication.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`glass feature-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 group relative fade-in-up ${visibleElements.has(`fade-${index}`) ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <feature.icon 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-6 md:mb-8 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-500 icon-glow" 
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed font-light tracking-tight text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section id="status" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className={`glass-warning p-8 sm:p-12 md:p-16 lg:p-20 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden scan-line fade-in-up ${visibleElements.has('fade-3') ? 'visible' : ''}`}>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 gap-3 sm:gap-4">
                <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-red-400 flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-400 font-bold tracking-tight">
                  Development Status
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                <p className="text-white/90 font-medium text-lg sm:text-xl tracking-tight">
                  This diagnostic tool is currently in active development and remains <strong>UNTESTED</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-white/70 tracking-tight text-sm sm:text-base">
                      ⚠️ Use at your own risk - backup vehicle settings first
                    </p>
                    <p className="text-white/70 tracking-tight text-sm sm:text-base">
                      🚫 Not recommended for production use
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-white/70 tracking-tight text-sm sm:text-base">
                      🔬 Comprehensive testing in progress
                    </p>
                    <p className="text-white/70 tracking-tight text-sm sm:text-base">
                      👨‍🔧 Consult professionals for critical diagnostics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-gradient tracking-tight">
            Get Started
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Download Card */}
            <div className={`glass-strong p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl fade-in-up ${visibleElements.has('fade-4') ? 'visible' : ''}`}>
              <div className="text-center">
                <Package className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mx-auto mb-4 sm:mb-6 icon-glow" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                  Download Latest
                </h3>
                <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Get the latest development build from GitHub Releases with pre-compiled binaries and installation instructions.
                </p>
                <button
                  onClick={openReleases}
                  className="w-full btn-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-500 shimmer-btn tracking-tight text-sm sm:text-base"
                >
                  <Download className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  GitHub Releases
                  <ExternalLink className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Development Card */}
            <div className={`glass-strong p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl fade-in-up ${visibleElements.has('fade-5') ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-center">
                <GitBranch className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4 sm:mb-6 icon-glow" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                  Clone Repository
                </h3>
                <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Clone the source code for development, contribution, or building from source with full access to the codebase.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={cloneRepo}
                    className="w-full glass btn-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-500 tracking-tight text-sm sm:text-base"
                  >
                    <GitBranch className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Copy Clone URL
                  </button>
                  <button
                    onClick={openGitHub}
                    className="w-full glass btn-secondary text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-500 tracking-tight border border-blue-400/20 hover:bg-blue-500/10 text-sm sm:text-base"
                  >
                    <Github className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Source Code
                    <ExternalLink className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl mt-8 lg:mt-12 text-center fade-in-up ${visibleElements.has('fade-6') ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 tracking-tight">
              System Requirements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-base text-white/60">
              <div>🖥️ Windows 10/11</div>
              <div>🐧 Linux (Ubuntu 20.04+)</div>
              <div>🍎 macOS 11+</div>
              <div>🔌 OBD-II Compatible Interface</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-white/5 glass text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-white/40 text-xs sm:text-sm tracking-tight">
              &copy; {new Date().getFullYear()} Ford MK4 OBD Tool. All rights reserved.
            </p>
            <p className="text-white/40 text-xs sm:text-sm tracking-tight">
              Always consult professional mechanics for critical vehicle diagnostics
            </p>
            <p className="text-white/40 text-xs sm:text-sm tracking-tight">
              Not affiliated with Ford Motor Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FordMK4Landing;
