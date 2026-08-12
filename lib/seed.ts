import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "field-pack-pro",
    name: "Field Pack Pro",
    description: "A weatherproof daypack with modular inserts for laptops and tools.",
    price: 148,
    category: "Bags",
    rating: 4.8,
    inventory: 18,
    featured: true,
    tag: "Best seller"
  },
  {
    id: "signal-desk-lamp",
    name: "Signal Desk Lamp",
    description: "Warm task lighting with a machined aluminum base and touch dimmer.",
    price: 96,
    category: "Lighting",
    rating: 4.6,
    inventory: 31,
    featured: true,
    tag: "Studio pick"
  },
  {
    id: "summit-bottle",
    name: "Summit Bottle",
    description: "Double-wall insulated bottle built for long commutes and weekend hikes.",
    price: 34,
    category: "Accessories",
    rating: 4.9,
    inventory: 52,
    featured: false,
    tag: "Everyday carry"
  },
  {
    id: "draft-notebook-set",
    name: "Draft Notebook Set",
    description: "Three lay-flat notebooks with heavyweight paper for sketches and notes.",
    price: 24,
    category: "Stationery",
    rating: 4.5,
    inventory: 73,
    featured: false,
    tag: "New arrival"
  },
  {
    id: "ridge-utility-jacket",
    name: "Ridge Utility Jacket",
    description: "A structured overshirt with roomy pockets and a soft brushed finish.",
    price: 132,
    category: "Apparel",
    rating: 4.7,
    inventory: 14,
    featured: true,
    tag: "Limited run"
  },
  {
    id: "atlas-wireless-stand",
    name: "Atlas Wireless Stand",
    description: "A weighted charging stand that keeps your desk tidy and your phone ready.",
    price: 78,
    category: "Tech",
    rating: 4.4,
    inventory: 28,
    featured: false,
    tag: "Desk setup"
  }
];
