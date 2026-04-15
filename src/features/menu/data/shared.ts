import heroImage from "@/assets/hero-kebab.jpg";
import donerImage from "@/assets/doner.jpg";
import lahmacunImage from "@/assets/lahmacun.jpg";
import falafelImage from "@/assets/falafel.jpg";
import adanaImage from "@/assets/adana.jpg";
import terrazaImage from "@/assets/terraza.jpg";

import type { AllergenDefinition, AllergenId, MenuAllergen, MenuImageKey, MenuModifierGroup } from "./types";

const remoteSaladImage = "https://bar-dejavu-kebab.es/images/ensalada_carta.jpg";
const remoteBurgerImage = "https://bar-dejavu-kebab.es/images/hamburguesa_carta.jpg";
const remoteGenericImage = "https://bar-dejavu-kebab.es/images/imagenCarta.jpg";

export const menuImageMap: Record<MenuImageKey, string> = {
  hero: heroImage,
  doner: donerImage,
  lahmacun: lahmacunImage,
  falafel: falafelImage,
  adana: adanaImage,
  terrace: terrazaImage,
  salad: remoteSaladImage,
  burger: remoteBurgerImage,
  generic: remoteGenericImage,
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

export const legacyTurkishExtrasGroup: MenuModifierGroup = {
  id: "legacy-turkish-extras",
  name: "Extras del local",
  description: "Opciones extra visibles en la carta antigua",
  selectionType: "multiple",
  maxSelections: 5,
  options: [
    { id: "legacy-large-side", name: "Racion grande de patatas o arroz", price: 5 },
    { id: "legacy-extra-bread", name: "Extra de pan", price: 0.7 },
    { id: "legacy-extra-sauce", name: "Extra de salsa", price: 0.5 },
    { id: "legacy-extra-cheese", name: "Extra de queso", price: 0.5 },
    { id: "legacy-small-side", name: "Racion pequena de patatas o arroz", price: 2.8 },
  ],
};

export const legacyPlateExtrasGroup: MenuModifierGroup = {
  id: "legacy-plate-extras",
  name: "Extras del plato",
  description: "Suplementos tal como aparecian en la carta antigua",
  selectionType: "multiple",
  maxSelections: 2,
  options: [
    { id: "legacy-plate-bread", name: "Extra de pan", price: 0.7 },
    { id: "legacy-plate-cheese", name: "Extra de queso", price: 0.5 },
  ],
};

export const legacyBurgerExtrasGroup: MenuModifierGroup = {
  id: "legacy-burger-extras",
  name: "Extras de hamburguesa",
  description: "Suplementos indicados en la carta antigua",
  selectionType: "multiple",
  maxSelections: 3,
  options: [
    { id: "legacy-burger-varios", name: "Extra varios", price: 0.7 },
    { id: "legacy-burger-goat-cheese", name: "Extra queso rulo", price: 2.8 },
    { id: "legacy-burger-meat", name: "Extra carne", price: 3.2 },
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

export const kebabProteinGroup: MenuModifierGroup = {
  id: "kebab-protein",
  name: "Carne",
  description: "Elige tu version",
  selectionType: "single",
  required: true,
  options: [
    { id: "kebab-pollo", name: "Pollo", default: true },
    { id: "kebab-ternera", name: "Ternera", price: 1.5 },
    { id: "kebab-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const combiSimpleProteinGroup: MenuModifierGroup = {
  id: "combi-simple-protein",
  name: "Carne",
  description: "Escoge la carne del plato",
  selectionType: "single",
  required: true,
  options: [
    { id: "combi-simple-pollo", name: "Pollo", default: true },
    { id: "combi-simple-ternera", name: "Ternera", price: 2 },
    { id: "combi-simple-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const combiDoubleProteinGroup: MenuModifierGroup = {
  id: "combi-double-protein",
  name: "Carne",
  description: "Escoge la carne del plato",
  selectionType: "single",
  required: true,
  options: [
    { id: "combi-double-pollo", name: "Pollo", default: true },
    { id: "combi-double-ternera", name: "Ternera", price: 2 },
    { id: "combi-double-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const dejaVuProteinGroup: MenuModifierGroup = {
  id: "dejavu-protein",
  name: "Carne",
  description: "Escoge la carne del plato",
  selectionType: "single",
  required: true,
  options: [
    { id: "dejavu-pollo", name: "Pollo", default: true },
    { id: "dejavu-ternera", name: "Ternera", price: 2.5 },
    { id: "dejavu-mixto", name: "Mixto", price: 1 },
  ],
};

export const menuProteinGroup: MenuModifierGroup = {
  id: "menu-protein",
  name: "Carne",
  description: "Elige tu version del menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "menu-pollo", name: "Pollo", default: true },
    { id: "menu-ternera", name: "Ternera", price: 1.5 },
    { id: "menu-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const menuCombiSimpleProteinGroup: MenuModifierGroup = {
  id: "menu-combi-simple-protein",
  name: "Carne",
  description: "Elige tu version del menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "menu-combi-simple-pollo", name: "Pollo", default: true },
    { id: "menu-combi-simple-ternera", name: "Ternera", price: 2 },
    { id: "menu-combi-simple-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const menuCombiDoubleProteinGroup: MenuModifierGroup = {
  id: "menu-combi-double-protein",
  name: "Carne",
  description: "Elige tu version del menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "menu-combi-double-pollo", name: "Pollo", default: true },
    { id: "menu-combi-double-ternera", name: "Ternera", price: 2 },
    { id: "menu-combi-double-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const menuDejaVuProteinGroup: MenuModifierGroup = {
  id: "menu-dejavu-protein",
  name: "Carne",
  description: "Elige tu version del menu",
  selectionType: "single",
  required: true,
  options: [
    { id: "menu-dejavu-pollo", name: "Pollo", default: true },
    { id: "menu-dejavu-ternera", name: "Ternera", price: 2 },
    { id: "menu-dejavu-mixto", name: "Mixto", price: 0.5 },
  ],
};

export const burgerProteinChoiceGroup: MenuModifierGroup = {
  id: "burger-protein-choice",
  name: "Carne",
  description: "Ternera o pollo crunchy",
  selectionType: "single",
  required: true,
  options: [
    { id: "burger-ternera", name: "Ternera", default: true },
    { id: "burger-pollo-crunchy", name: "Pollo crunchy" },
  ],
};

export const bocadilloFillingGroup: MenuModifierGroup = {
  id: "bocadillo-filling",
  name: "Relleno",
  description: "Elige el bocadillo",
  selectionType: "single",
  required: true,
  options: [
    { id: "bocadillo-lomo", name: "Cinta de lomo", default: true },
    { id: "bocadillo-jamon", name: "Jamon con tomate" },
    { id: "bocadillo-bacon", name: "Bacon" },
    { id: "bocadillo-panceta", name: "Panceta" },
    { id: "bocadillo-pollo", name: "Pollo" },
  ],
};

export const combinedPlateChoiceGroup: MenuModifierGroup = {
  id: "combined-plate-choice",
  name: "Principal",
  description: "Elige el plato combinado",
  selectionType: "single",
  required: true,
  options: [
    { id: "combined-lomo", name: "Cinta de lomo", default: true },
    { id: "combined-pollo", name: "Pollo a la plancha" },
    { id: "combined-bacon", name: "Bacon" },
    { id: "combined-panceta", name: "Panceta" },
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
    description: "Panes, masas, empanados y bolleria.",
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
  "Informacion orientativa segun la receta base mostrada. Extras, salsas o elecciones del pedido pueden cambiar los alergenos, asi que confirma con el local si tienes una alergia grave.";
