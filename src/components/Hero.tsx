import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4 mr-2" />
            Le meilleur foodtruck de Paris
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Le Camion des
            <span className="text-orange-500"> Saveurs</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez nos délicieux burgers artisanaux, tacos savoureux et bien plus encore. 
            Une cuisine de qualité servie avec passion dans toute la ville !
          </p>

          {/* Statistiques */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-gray-700">Service rapide</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-gray-700">Plusieurs emplacements</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-gray-700">4.8/5 avis clients</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToMenu}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Voir le Menu
            </button>
            <button 
              onClick={() => document.getElementById('emplacements')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Nous Trouver
            </button>
          </div>
        </div>
      </div>

      {/* Illustration décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;