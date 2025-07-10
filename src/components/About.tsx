import React from 'react';
import { Heart, Users, Award, Truck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'aventure du Camion des Saveurs, né de la passion pour la cuisine de rue authentique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texte principal */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Une passion, une aventure
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le Camion des Saveurs est né en 2020 de la passion de Marie et Jean-Pierre pour la cuisine de rue authentique. 
                Après avoir voyagé à travers l'Europe et découvert les meilleures recettes de street food, 
                ils ont décidé de créer leur propre concept.
              </p>
              <p>
                Notre mission est simple : proposer des plats savoureux, préparés avec des ingrédients frais et locaux, 
                dans une ambiance conviviale et chaleureuse. Chaque burger, chaque taco est préparé avec amour et attention.
              </p>
              <p>
                Aujourd'hui, Le Camion des Saveurs sillonne Paris et sa banlieue, apportant sourires et saveurs 
                dans différents quartiers. Nous sommes fiers d'avoir créé une véritable communauté autour de notre foodtruck.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Truck className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <p className="text-orange-800 font-semibold">Photo de notre équipe</p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-orange-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Passion</h4>
            <p className="text-gray-600">
              Chaque plat est préparé avec amour et dédication pour vous offrir le meilleur
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h4>
            <p className="text-gray-600">
              Ingrédients frais et locaux sélectionnés avec soin pour une qualité irréprochable
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Convivialité</h4>
            <p className="text-gray-600">
              Un accueil chaleureux et une ambiance familiale pour partager de bons moments
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-orange-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Mobilité</h4>
            <p className="text-gray-600">
              Nous venons à votre rencontre dans différents quartiers de la ville
            </p>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Ce que disent nos clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Les meilleurs burgers de Paris ! L'équipe est adorable et les produits de qualité. 
                Je recommande vivement !"
              </p>
              <p className="font-semibold text-gray-900">- Sophie M.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Service rapide et efficace, parfait pour la pause déjeuner. 
                Les tacos sont délicieux et très copieux !"
              </p>
              <p className="font-semibold text-gray-900">- Thomas L.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Une vraie découverte ! L'ambiance est conviviale et on sent la passion 
                dans chaque plat. Bravo !"
              </p>
              <p className="font-semibold text-gray-900">- Marie D.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;