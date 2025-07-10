import React, { useState } from 'react';
import { menuData } from '../data/menuData';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  
  // Obtenir toutes les catégories uniques
  const categories = ['Tous', ...Array.from(new Set(menuData.map(item => item.category)))];
  
  // Filtrer les éléments du menu selon la catégorie sélectionnée
  const filteredMenu = selectedCategory === 'Tous' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de plats préparés avec des ingrédients frais et de qualité
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <span className="text-orange-600 font-semibold">
                  {item.name}
                </span>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-orange-500">
                    {item.price.toFixed(2)}€
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Allergènes */}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Allergènes :</p>
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen) => (
                        <span 
                          key={allergen}
                          className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Catégorie */}
                <div className="flex justify-between items-center">
                  <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 p-6 bg-orange-50 rounded-lg">
          <p className="text-gray-700">
            <strong>Note :</strong> Les prix peuvent varier selon les emplacements. 
            Paiement par carte bancaire et espèces acceptés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;