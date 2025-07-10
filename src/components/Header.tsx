import React, { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">Le Camion des Saveurs</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('emplacements')}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Emplacements
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('emplacements')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                Emplacements
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;