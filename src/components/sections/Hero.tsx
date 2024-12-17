import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-green-600">
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Optimisez vos économies d'énergie grâce aux CEE.
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            J'accompagne les entreprises et particuliers dans leurs démarches de Certificats d'Économies d'Énergie pour financer leurs projets.
          </p>
          <button 
            onClick={scrollToServices}
            className="group bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            En savoir plus
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;