export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  allergens?: string[];
}

export interface Location {
  id: number;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  schedule: {
    day: string;
    time: string;
  }[];
}

export interface Contact {
  phone: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}