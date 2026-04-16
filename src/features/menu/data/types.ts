export type OrderModeId = "pickup" | "delivery" | "dinein";
export type ModifierSelectionType = "single" | "multiple";
export type CategoryTone = "gold" | "ember" | "olive" | "sand" | "copper" | "stone";
export type AllergenId = "gluten" | "milk" | "egg" | "fish" | "sesame" | "soy" | "nuts" | "celery" | "mustard";
export type AllergenLevel = "contains" | "may-contain";
export type MenuImageKey =
  | "hero"
  | "doner"
  | "lahmacun"
  | "falafel"
  | "adana"
  | "terrace"
  | "salad"
  | "burger"
  | "sandwich"
  | "rations"
  | "dessert"
  | "generic";

export interface RestaurantInfo {
  name: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  city: string;
  mapsQuery: string;
  website: string;
  openingHours: { day: string; time: string }[];
  serviceAreas: string[];
}

export interface MenuOption {
  id: string;
  name: string;
  price?: number;
  description?: string;
  default?: boolean;
}

export interface MenuModifierGroup {
  id: string;
  name: string;
  description: string;
  selectionType: ModifierSelectionType;
  required?: boolean;
  minSelections?: number;
  maxSelections?: number;
  options: MenuOption[];
}

export interface MenuCategory {
  id: string;
  name: string;
  shortName: string;
  description: string;
  note: string;
  tone: CategoryTone;
}

export interface AllergenDefinition {
  id: AllergenId;
  name: string;
  shortName: string;
  description: string;
}

export interface MenuAllergen {
  id: AllergenId;
  level: AllergenLevel;
}

export interface MenuProduct {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
  tags: string[];
  allergens: MenuAllergen[];
  prepTime: string;
  highlight: string;
  modifierGroups: MenuModifierGroup[];
}

export interface MenuProductSeed extends Omit<MenuProduct, "categoryId" | "image"> {
  imageKey: MenuImageKey;
}

export interface MenuCatalogCategory extends MenuCategory {
  products: MenuProductSeed[];
}

export interface OrderMode {
  id: OrderModeId;
  name: string;
  description: string;
  eta: string;
  note: string;
}

export interface ExperienceHighlight {
  title: string;
  description: string;
  value: string;
}

export interface OrderingStep {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  detail: string;
}
