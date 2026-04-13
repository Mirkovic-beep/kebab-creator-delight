import heroImage from "@/assets/hero-kebab.jpg";
import donerImage from "@/assets/doner.jpg";
import lahmacunImage from "@/assets/lahmacun.jpg";
import falafelImage from "@/assets/falafel.jpg";
import adanaImage from "@/assets/adana.jpg";
import terrazaImage from "@/assets/terraza.jpg";

import type { AllergenDefinition, AllergenId, MenuAllergen, MenuImageKey, MenuModifierGroup } from "./menu.types";

export const menuImageMap: Record<MenuImageKey, string> = {
  hero: heroImage,
  doner: donerImage,
  lahmacun: lahmacunImage,
  falafel: falafelImage,
  adana: adanaImage,
  terrace: terrazaImage,
};

export const sauceGroup: MenuModifierGroup = {
  id: "sauces",
  name: "Salsas",
  description: "Elige hasta 3 para tu pedido",
  selectionType: "multiple",
  maxSelections: 3,
  options: [
    { id: "salsa-blanca", name: "Salsa blanca", default: true },
    { id: "salsa-picante", name: "Salsa picante" },
    { id: "salsa-yogur", name: "Salsa yogur con hierbas" },
    { id: "salsa-bbq", name: "BBQ turca" },
    { id: "salsa-ajo", name: "Alioli suave" },
  ],
};

export const extrasGroup: MenuModifierGroup = {
  id: "extras",
  name: "Extras",
  description: "Completa tu combinacion",
  selectionType: "multiple",
  maxSelections: 4,
  options: [
    { id: "extra-queso", name: "Queso feta", price: 1 },
    { id: "extra-jalapeno", name: "Jalapenos", price: 0.8 },
    { id: "extra-hummus", name: "Hummus casero", price: 1.2 },
    { id: "extra-carne", name: "Extra de carne", price: 2.5 },
    { id: "extra-falafel", name: "2 falafel extra", price: 1.5 },
  ],
};

export const drinkGroup: MenuModifierGroup = {
  id: "drink",
  name: "Bebida",
  description: "Incluida en el menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "cola", name: "Coca-Cola", default: true },
    { id: "cola-zero", name: "Coca-Cola Zero" },
    { id: "fanta", name: "Fanta Naranja" },
    { id: "sprite", name: "Sprite" },
    { id: "agua", name: "Agua mineral" },
    { id: "ayran", name: "Ayran", price: 0.5 },
  ],
};

export const sideGroup: MenuModifierGroup = {
  id: "side",
  name: "Guarnicion",
  description: "Escoge una opcion",
  selectionType: "single",
  required: true,
  options: [
    { id: "patatas", name: "Patatas fritas", default: true },
    { id: "arroz", name: "Arroz especiado" },
    { id: "bulgur", name: "Bulgur con hierbas" },
    { id: "ensalada", name: "Ensalada fresca" },
  ],
};

export const proteinClassicGroup: MenuModifierGroup = {
  id: "protein-classic",
  name: "Proteina",
  description: "Selecciona tu base",
  selectionType: "single",
  required: true,
  options: [
    { id: "pollo", name: "Pollo", default: true },
    { id: "ternera", name: "Ternera" },
    { id: "mixto", name: "Mixto", price: 0.7 },
  ],
};

export const spiceGroup: MenuModifierGroup = {
  id: "spice",
  name: "Nivel de picante",
  description: "Ajustalo a tu gusto",
  selectionType: "single",
  required: true,
  options: [
    { id: "suave", name: "Suave", default: true },
    { id: "medio", name: "Medio" },
    { id: "picante", name: "Picante" },
  ],
};

export const breadGroup: MenuModifierGroup = {
  id: "bread",
  name: "Tipo de pan",
  description: "Pan recien tostado o wrap fino",
  selectionType: "single",
  required: true,
  options: [
    { id: "pan-pita", name: "Pan pita", default: true },
    { id: "durum", name: "Tortilla durum", price: 0.5 },
    { id: "naan", name: "Pan naan", price: 1 },
  ],
};

export const menuUpgradeGroup: MenuModifierGroup = {
  id: "menu-upgrade",
  name: "Complemento",
  description: "Elige si lo quieres en menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "solo", name: "Solo producto", default: true },
    { id: "menu", name: "Menu con patatas y bebida", price: 3.5 },
  ],
};

export const dessertToppingsGroup: MenuModifierGroup = {
  id: "dessert-toppings",
  name: "Acabado",
  description: "Toque final recomendado",
  selectionType: "single",
  required: true,
  options: [
    { id: "clasico", name: "Clasico", default: true },
    { id: "helado-vainilla", name: "Con helado de vainilla", price: 1.5 },
    { id: "pistacho-extra", name: "Con pistacho extra", price: 1 },
  ],
};

export const sizeDrinkGroup: MenuModifierGroup = {
  id: "drink-size",
  name: "Tamano",
  description: "Selecciona el formato",
  selectionType: "single",
  required: true,
  options: [
    { id: "lata", name: "Lata 33cl", default: true },
    { id: "botella", name: "Botella 50cl", price: 0.8 },
    { id: "grande", name: "Botella 1,5L", price: 2 },
  ],
};

const containsAllergens = (...ids: AllergenId[]): MenuAllergen[] =>
  ids.map((id) => ({
    id,
    level: "contains",
  }));

const withPossibleTraces = (base: MenuAllergen[], ...ids: AllergenId[]): MenuAllergen[] => [
  ...base,
  ...ids.map((id) => ({
    id,
    level: "may-contain" as const,
  })),
];

export const classicWrapAllergens = withPossibleTraces(containsAllergens("gluten", "milk", "egg"), "sesame", "soy", "mustard");
export const donerBoxAllergens = withPossibleTraces(containsAllergens("milk", "egg"), "gluten", "sesame", "soy", "mustard");
export const plateGrillAllergens = withPossibleTraces(containsAllergens("milk"), "gluten", "soy", "sesame", "mustard", "celery");
export const adanaAllergens = withPossibleTraces(containsAllergens("milk", "celery"), "gluten", "soy", "sesame", "mustard");
export const lahmacunAllergens = withPossibleTraces(containsAllergens("gluten"), "milk", "sesame", "soy", "celery");
export const lahmacunWrapAllergens = withPossibleTraces(containsAllergens("gluten", "milk"), "sesame", "soy", "celery");
export const cheeseOvenAllergens = withPossibleTraces(containsAllergens("gluten", "milk"), "egg", "sesame", "soy");
export const naanCheeseAllergens = withPossibleTraces(containsAllergens("gluten", "milk"), "egg", "sesame");
export const hummusAllergens = withPossibleTraces(containsAllergens("sesame"), "gluten", "soy");
export const borekAllergens = withPossibleTraces(containsAllergens("gluten", "milk", "egg"), "sesame", "soy");
export const loadedFriesAllergens = withPossibleTraces(containsAllergens("milk", "egg"), "gluten", "sesame", "soy", "mustard");
export const wingsAllergens = withPossibleTraces(containsAllergens("soy", "mustard", "celery"), "gluten", "sesame");
export const falafelWrapAllergens = withPossibleTraces(containsAllergens("gluten", "sesame"), "soy", "mustard");
export const falafelPlateAllergens = withPossibleTraces(containsAllergens("sesame"), "gluten", "soy", "mustard");
export const turkishSaladAllergens = withPossibleTraces(containsAllergens("milk"), "sesame", "mustard");
export const veggieBoxAllergens = withPossibleTraces(containsAllergens("sesame"), "gluten", "soy", "mustard");
export const baklavaAllergens = withPossibleTraces(containsAllergens("gluten", "milk", "nuts"), "egg", "sesame");
export const kunefeAllergens = withPossibleTraces(containsAllergens("gluten", "milk", "nuts"), "egg");
export const ayranAllergens = containsAllergens("milk");
export const softDrinkAllergens: MenuAllergen[] = [];

export const allergenDefinitions: AllergenDefinition[] = [
  {
    id: "gluten",
    name: "Gluten",
    shortName: "Gluten",
    description: "Panes, masas, durum, lahmacun y empanados.",
  },
  {
    id: "milk",
    name: "Leche",
    shortName: "Lacteos",
    description: "Quesos, salsas de yogur y elaboraciones con leche.",
  },
  {
    id: "egg",
    name: "Huevo",
    shortName: "Huevo",
    description: "Salsas emulsiones, masas y rebozados.",
  },
  {
    id: "sesame",
    name: "Sesamo",
    shortName: "Sesamo",
    description: "Tahini, panes con semillas y toppings.",
  },
  {
    id: "soy",
    name: "Soja",
    shortName: "Soja",
    description: "Marinados, glaseados y algunas salsas de cocina.",
  },
  {
    id: "nuts",
    name: "Frutos secos",
    shortName: "Frutos secos",
    description: "Principalmente pistacho en postres.",
  },
  {
    id: "celery",
    name: "Apio",
    shortName: "Apio",
    description: "Mezclas de especias, caldos y marinados.",
  },
  {
    id: "mustard",
    name: "Mostaza",
    shortName: "Mostaza",
    description: "Vinagretas, salsas y aderezos.",
  },
];

export const allergenDisclaimer =
  "Informacion orientativa segun la receta base. Si tienes una alergia grave o riesgo de trazas, confirma con el local antes de pedir.";
