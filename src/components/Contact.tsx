import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactData } from '../data/contactData';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, une suggestion ou envie de nous privatiser pour un événement ? 
            N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              
              <div className="space-y-4">
                {/* Téléphone */}
                <div className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a 
                      href={`tel:${contactData.phone}`}
                      className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href={`mailto:${contactData.email}`}
                      className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Zone de service</p>
                    <p className="text-gray-600">Paris et proche banlieue</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Horaires de service</p>
                    <p className="text-gray-600">Lun-Ven: 11h30-14h30</p>
                    <p className="text-gray-600">Sam-Dim: 10h00-16h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                <a 
                  href={contactData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href={contactData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href={contactData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="privatisation">Privatisation/Événement</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* Information supplémentaire */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Vous organisez un événement ?
          </h3>
          <p className="text-gray-600 mb-4">
            Le Camion des Saveurs peut se déplacer pour vos événements privés : 
            mariages, anniversaires, événements d'entreprise, etc.
          </p>
          <p className="text-sm text-gray-500">
            Contactez-nous pour un devis personnalisé !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;