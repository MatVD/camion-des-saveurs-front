import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { locationData } from '../data/locationData';

const Locations: React.FC = () => {
  return (
    <section id="emplacements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Où nous trouver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Suivez notre planning de la semaine pour ne manquer aucune de nos spécialités
          </p>
        </div>

        {/* Grille des emplacements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locationData.map((location) => (
            <div 
              key={location.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Nom et adresse */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  {location.name}
                </h3>
                <p className="text-gray-600">
                  {location.address}
                </p>
              </div>

              {/* Planning */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                  Planning
                </h4>
                <div className="space-y-1">
                  {location.schedule.map((slot, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{slot.day}</span>
                      <span className="text-gray-900 font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton d'action */}
              <button 
                onClick={() => window.open(`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Voir sur la carte
              </button>
            </div>
          ))}
        </div>

        {/* Information supplémentaire */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Restez informés de nos déplacements
          </h3>
          <p className="text-gray-600 mb-6">
            Suivez-nous sur nos réseaux sociaux pour connaître nos emplacements en temps réel 
            et ne manquer aucune nouveauté !
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://facebook.com/lecamionsdessaveurs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com/lecamionsdessaveurs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;