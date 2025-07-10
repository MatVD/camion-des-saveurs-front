import { Location } from '../types';

export const locationData: Location[] = [
  {
    id: 1,
    name: "Place de la République",
    address: "Place de la République, 75011 Paris",
    coordinates: {
      lat: 48.8673,
      lng: 2.3631
    },
    schedule: [
      { day: "Lundi", time: "11h30 - 14h30" },
      { day: "Mardi", time: "11h30 - 14h30" },
      { day: "Mercredi", time: "11h30 - 14h30" }
    ]
  },
  {
    id: 2,
    name: "Parc de Belleville",
    address: "47 Rue des Couronnes, 75020 Paris",
    coordinates: {
      lat: 48.8722,
      lng: 2.3874
    },
    schedule: [
      { day: "Jeudi", time: "11h30 - 14h30" },
      { day: "Vendredi", time: "11h30 - 14h30" }
    ]
  },
  {
    id: 3,
    name: "Marché Saint-Germain",
    address: "Marché Saint-Germain, 75006 Paris",
    coordinates: {
      lat: 48.8547,
      lng: 2.3347
    },
    schedule: [
      { day: "Samedi", time: "10h00 - 16h00" },
      { day: "Dimanche", time: "10h00 - 16h00" }
    ]
  }
];