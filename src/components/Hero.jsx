import { useState } from 'react';
import heroImage from '../assets/hero.png';
import { ArrowRight, Menu, X, HomeIcon } from 'lucide-react';
import AuthModal from '../Auth/AuthModal';
import DemoModal from './DemoModal';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("login")
  const [showModal, setShowModal] = useState(false);
  
   const openModal = (tab = "login") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Education', link: '#education' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Services', link: '#services' },
    { name: 'Why Us', link: '#whyus' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        <nav className="w-full py-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3" data-aos="fade-down">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <HomeIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Education.</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-white/80 hover:text-white transition-colors text-lg"
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  className="px-6 py-2 bg-white text-black font-semibold rounded-xl
                   hover:bg-gray-200 transition-colors"
                  data-aos="fade-down"
                  data-aos-delay="500"
                  onClick={() => openModal("signup")}
                >
                  Get Started
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
                data-aos="fade-down"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-4 py-4 bg-black/90 backdrop-blur-md rounded-lg">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="mt-4 mx-4 px-4 py-3 bg-white text-black font-semibold rounded-lg">
                  Get Started
                </button>
              </div>
            )}
          </div>
        </nav>

        <section id='home' className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
            <div className="text-center">
              <h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
                data-aos="fade-up"
              >
                Build Your Digital
                <span 
                  className="block text-transparent bg-clip-text bg-blue-300 mt-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Future With Us
                </span>
              </h1>

              <p 
                className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto px-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We create innovative technology solutions that transform businesses 
                and drive exponential growth in the digital era.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-10 px-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white 
                font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center 
                justify-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={()=> setShowModal(true)} className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20
                 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                  Book a Demo
                </button>
              </div>

              <div 
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full px-2 mx-auto mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Users</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Uptime</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300">Support</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultTab={modalTab} />
          {/* Modal Component */}
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default Hero;