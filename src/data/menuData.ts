import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Burgers
  {
    id: 1,
    name: "Burger du Chef",
    description: "Steak haché 150g, fromage cheddar, bacon, salade, tomate, oignons caramélisés, sauce maison",
    price: 12.50,
    category: "Burgers",
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: 2,
    name: "Burger Végétarien",
    description: "Galette de légumes maison, avocat, salade, tomate, fromage de chèvre, sauce pesto",
    price: 11.00,
    category: "Burgers",
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: 3,
    name: "Burger BBQ",
    description: "Steak haché 150g, cheddar fumé, oignons frits, cornichons, sauce BBQ maison",
    price: 13.00,
    category: "Burgers",
    allergens: ["Gluten", "Lactose"]
  },
  
  // Tacos
  {
    id: 4,
    name: "Tacos Poulet",
    description: "Émincé de poulet mariné, salade, tomate, fromage, sauce algérienne",
    price: 8.50,
    category: "Tacos",
    allergens: ["Gluten", "Lactose"]
  },
  {
    id: 5,
    name: "Tacos Bœuf",
    description: "Émincé de bœuf épicé, salade, tomate, fromage, sauce harissa",
    price: 9.00,
    category: "Tacos",
    allergens: ["Gluten", "Lactose"]
  },
  
  // Sides
  {
    id: 6,
    name: "Frites Maison",
    description: "Pommes de terre fraîches coupées et cuisinées sur place",
    price: 4.00,
    category: "Accompagnements"
  },
  {
    id: 7,
    name: "Frites de Patate Douce",
    description: "Frites de patate douce avec épices cajun",
    price: 5.00,
    category: "Accompagnements"
  },
  {
    id: 8,
    name: "Salade César",
    description: "Salade verte, croûtons, parmesan, sauce césar maison",
    price: 6.50,
    category: "Accompagnements",
    allergens: ["Gluten", "Lactose"]
  },
  
  // Boissons
  {
    id: 9,
    name: "Soda",
    description: "Coca, Sprite, Fanta (33cl)",
    price: 2.50,
    category: "Boissons"
  },
  {
    id: 10,
    name: "Jus de Fruits",
    description: "Orange, pomme, multivitaminé (25cl)",
    price: 3.00,
    category: "Boissons"
  },
  {
    id: 11,
    name: "Eau Minérale",
    description: "Eau plate ou pétillante (50cl)",
    price: 2.00,
    category: "Boissons"
  }
];