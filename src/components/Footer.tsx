import React from 'react';
import { Truck, Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactData } from '../data/contactData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Le Camion des Saveurs</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre foodtruck de référence pour une cuisine de rue authentique et savoureuse. 
              Nous sillonnons Paris avec passion depuis 2020.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={contactData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={contactData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('emplacements')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  Emplacements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Téléphone :</span>
                <br />
                <a 
                  href={`tel:${contactData.phone}`}
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                >
                  {contactData.phone}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email :</span>
                <br />
                <a 
                  href={`mailto:${contactData.email}`}
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                >
                  {contactData.email}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Zone de service :</span>
                <br />
                Paris et proche banlieue
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Le Camion des Saveurs. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
              Fait avec <Heart className="h-4 w-4 text-red-500 mx-1" /> à Paris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;