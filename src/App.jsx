import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LoadingSpinner from './components/LoadingSpinner';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import PricingSection from './components/PricingSection';
import Services from './components/Services';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      AOS.init({ duration: 1000, once: false }); 
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero/>
      <About />
      <Education />
      <PricingSection />
      <Services />
      
    </div>
  );
}

export default App;
