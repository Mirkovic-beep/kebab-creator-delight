import heroImage from "@/assets/hero-kebab.jpg";
import donerImage from "@/assets/doner.jpg";
import lahmacunImage from "@/assets/lahmacun.jpg";
import falafelImage from "@/assets/falafel.jpg";
import adanaImage from "@/assets/adana.jpg";
import terrazaImage from "@/assets/terraza.jpg";

export type OrderModeId = "pickup" | "delivery" | "dinein";
export type ModifierSelectionType = "single" | "multiple";
export type CategoryTone = "gold" | "ember" | "olive" | "sand" | "copper" | "stone";

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
  prepTime: string;
  highlight: string;
  modifierGroups: MenuModifierGroup[];
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

const sauceGroup: MenuModifierGroup = {
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

const extrasGroup: MenuModifierGroup = {
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

const drinkGroup: MenuModifierGroup = {
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

const sideGroup: MenuModifierGroup = {
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

const proteinClassicGroup: MenuModifierGroup = {
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

const spiceGroup: MenuModifierGroup = {
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

const breadGroup: MenuModifierGroup = {
  id: "bread",
  name: "Tipo de pan",
  description: "Pan recien tostado o wrap fino",
  selectionType: "single",
  required: true,
  options: [
    { id: "pan-pita", name: "Pan pita", default: true },
    { id: "durum", name: "Tortilla durum", price: 0.5 },
    { id: "naan", name: "Pan naan artesano", price: 1 },
  ],
};

const menuUpgradeGroup: MenuModifierGroup = {
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

const dessertToppingsGroup: MenuModifierGroup = {
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

const sizeDrinkGroup: MenuModifierGroup = {
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

export const restaurantInfo: RestaurantInfo = {
  name: "Bar DejaVu Kebab",
  phone: "917139980",
  whatsappNumber: "34917139980",
  address: "C/ Manuela Malasana con C/ Margarita Xirgu",
  city: "28523 Rivas-Vaciamadrid, Madrid",
  mapsQuery: "Bar DejaVu Kebab Rivas",
  website: "https://bar-dejavu-kebab.es",
  openingHours: [
    { day: "Lunes", time: "12:00 - 00:00" },
    { day: "Martes", time: "12:00 - 00:00" },
    { day: "Miercoles", time: "19:00 - 00:00" },
    { day: "Jueves", time: "12:00 - 00:00" },
    { day: "Viernes", time: "12:00 - 01:00" },
    { day: "Sabado", time: "12:00 - 01:00" },
    { day: "Domingo", time: "12:00 - 00:00" },
  ],
  serviceAreas: ["Rivas Centro", "Covibar", "La Luna", "Pablo Iglesias", "Velilla"],
};

export const menuCategories: MenuCategory[] = [
  {
    id: "kebabs",
    name: "Kebabs y Durums",
    shortName: "Kebabs",
    description: "Los clasicos del local con carne al trompo, pan tostado y salsas al momento.",
    note: "La puerta de entrada a la carta",
    tone: "gold",
  },
  {
    id: "plates",
    name: "Platos y Parrilla",
    shortName: "Platos",
    description: "Raciones mas completas con guarnicion, ensalada fresca y carnes a la brasa.",
    note: "Pensado para comer con calma",
    tone: "ember",
  },
  {
    id: "turkish-oven",
    name: "Horno Turco",
    shortName: "Horno",
    description: "Lahmacun, pide y panes finos con base crujiente y sabores especiados.",
    note: "Textura fina y mucho aroma",
    tone: "copper",
  },
  {
    id: "starters",
    name: "Entrantes",
    shortName: "Entrantes",
    description: "Para compartir o abrir apetito con hummus, borek, alitas y patatas especiales.",
    note: "Perfecto para la mesa",
    tone: "sand",
  },
  {
    id: "veggie",
    name: "Vegetal",
    shortName: "Vegetal",
    description: "Opciones vegetarianas muy completas, con falafel casero y verduras de temporada.",
    note: "Ligero pero con identidad",
    tone: "olive",
  },
  {
    id: "desserts-drinks",
    name: "Postres y Bebidas",
    shortName: "Postres",
    description: "Cierre dulce y bebidas frias para completar cualquier pedido.",
    note: "Remate final para la experiencia",
    tone: "stone",
  },
];

export const experienceHighlights: ExperienceHighlight[] = [
  {
    title: "Cocina al momento",
    description: "Texto breve sobre elaboracion, tiempos y servicio.",
    value: "12-18 min",
  },
  {
    title: "Seleccion destacada",
    description: "Texto breve sobre variedad de platos y combinaciones.",
    value: "+24 platos",
  },
  {
    title: "Servicio flexible",
    description: "Texto breve sobre recogida, reparto y mesa.",
    value: "3 opciones",
  },
];

export const orderingSteps: OrderingStep[] = [
  {
    title: "Explora la carta",
    description: "Texto breve sobre categorias, platos y recomendaciones.",
  },
  {
    title: "Personaliza tu pedido",
    description: "Texto breve sobre salsas, extras y preferencias.",
  },
  {
    title: "Confirma tu seleccion",
    description: "Texto breve sobre recogida, entrega o pedido en local.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Laura y Sergio",
    quote: "Texto placeholder de una resena breve sobre sabor, servicio y experiencia.",
    detail: "Pedido recurrente fin de semana",
  },
  {
    name: "Equipo de sala",
    quote: "Texto placeholder de una resena breve sobre atencion y ambiente del local.",
    detail: "Opinion habitual del local",
  },
  {
    name: "Clientes de Rivas",
    quote: "Texto placeholder de una resena breve sobre variedad de carta y calidad.",
    detail: "Uso habitual en recogida",
  },
];

export const orderModes: OrderMode[] = [
  {
    id: "pickup",
    name: "Recogida",
    description: "Haz el pedido online y recogelo caliente en el local.",
    eta: "15-20 min",
    note: "Sin coste extra",
  },
  {
    id: "delivery",
    name: "A domicilio",
    description: "Pensado para Rivas y zonas cercanas con entrega directa.",
    eta: "30-40 min",
    note: "Recomendado para tickets medios",
  },
  {
    id: "dinein",
    name: "Mesa o terraza",
    description: "Pide con calma desde el local o la terraza.",
    eta: "10-15 min",
    note: "Ideal para grupos",
  },
];

export const menuProducts: MenuProduct[] = [
  {
    id: "durum-clasico",
    name: "Durum Clasico",
    categoryId: "kebabs",
    description: "Wrap tostado con carne al trompo, lechuga, tomate y salsa blanca.",
    longDescription: "El formato mas directo y vendible del local. Enrollado, jugoso y pensado para comer sin complicaciones.",
    price: 7.9,
    image: heroImage,
    featured: true,
    bestseller: true,
    tags: ["Top ventas", "Personalizable", "Halal"],
    prepTime: "12 min",
    highlight: "El favorito para recogida rapida",
    modifierGroups: [proteinClassicGroup, sauceGroup, extrasGroup, menuUpgradeGroup, spiceGroup],
  },
  {
    id: "kebab-pan-artesano",
    name: "Kebab en Pan Artesano",
    categoryId: "kebabs",
    description: "Pan tostado con carne, vegetales frescos y mezcla de salsas.",
    longDescription: "Mas crujiente y con mordida amplia. Muy equilibrado entre pan, carne y ensalada.",
    price: 7.5,
    image: donerImage,
    featured: true,
    tags: ["Clasico", "Crujiente"],
    prepTime: "12 min",
    highlight: "Perfecto para un antojo rapido",
    modifierGroups: [proteinClassicGroup, sauceGroup, extrasGroup, menuUpgradeGroup, spiceGroup],
  },
  {
    id: "box-doner",
    name: "Doner Box",
    categoryId: "kebabs",
    description: "Carne cortada al momento con patatas o arroz, salsas y topping de cebolla.",
    longDescription: "Una opcion comoda para llevar con todo bien integrado, ideal para delivery.",
    price: 8.5,
    image: donerImage,
    bestseller: true,
    tags: ["Delivery", "Muy completo"],
    prepTime: "14 min",
    highlight: "Formato limpio para pedir desde casa",
    modifierGroups: [proteinClassicGroup, sideGroup, sauceGroup, extrasGroup, spiceGroup],
  },
  {
    id: "menu-durum-premium",
    name: "Menu Durum Premium",
    categoryId: "kebabs",
    description: "Durum con patatas crujientes y bebida a elegir.",
    longDescription: "Una configuracion cerrada para acelerar el pedido sin renunciar a personalizacion interna.",
    price: 11.9,
    image: heroImage,
    featured: true,
    tags: ["Menu", "Ticket medio"],
    prepTime: "15 min",
    highlight: "Muy util para convertir visitas en pedidos completos",
    modifierGroups: [proteinClassicGroup, sauceGroup, extrasGroup, drinkGroup, spiceGroup],
  },
  {
    id: "plato-mixto",
    name: "Plato Mixto DejaVu",
    categoryId: "plates",
    description: "Pollo y ternera con ensalada fresca, pan caliente y guarnicion.",
    longDescription: "El plato mas redondo para quien quiere cantidad, variedad y una presentacion potente.",
    price: 12.9,
    image: terrazaImage,
    featured: true,
    bestseller: true,
    tags: ["Completo", "Compartible"],
    prepTime: "16 min",
    highlight: "Gran opcion para comer en local o terraza",
    modifierGroups: [sideGroup, sauceGroup, extrasGroup, spiceGroup],
  },
  {
    id: "adana-kebab",
    name: "Adana Kebab a la Brasa",
    categoryId: "plates",
    description: "Brocheta especiada con bulgur, pimientos asados y salsa yogur.",
    longDescription: "Perfil mas autentico, especiado y de brasa. Sube claramente el nivel de la carta.",
    price: 13.9,
    image: adanaImage,
    featured: true,
    spicy: true,
    tags: ["Brasa", "Especialidad"],
    prepTime: "18 min",
    highlight: "Una firma propia para destacar la cocina turca",
    modifierGroups: [sideGroup, sauceGroup, spiceGroup],
  },
  {
    id: "pollo-parrilla",
    name: "Plato de Pollo a la Parrilla",
    categoryId: "plates",
    description: "Pechuga marinada con especias suaves, arroz y verduras.",
    longDescription: "Alternativa ligera con sabor a parrilla y un perfil muy facil de vender.",
    price: 11.9,
    image: terrazaImage,
    tags: ["Ligero", "Parrilla"],
    prepTime: "17 min",
    highlight: "Funciona muy bien en comidas de diario",
    modifierGroups: [sideGroup, sauceGroup, extrasGroup],
  },
  {
    id: "mixed-grill",
    name: "Parrillada DejaVu",
    categoryId: "plates",
    description: "Seleccion de pollo, carne especiada y verduras a la plancha.",
    longDescription: "Pensado para mesas de dos o para quien busca un pedido mas premium.",
    price: 16.9,
    image: adanaImage,
    tags: ["Premium", "Para compartir"],
    prepTime: "20 min",
    highlight: "Sube el ticket medio con una sola referencia",
    modifierGroups: [sideGroup, sauceGroup, extrasGroup],
  },
  {
    id: "lahmacun-clasico",
    name: "Lahmacun Clasico",
    categoryId: "turkish-oven",
    description: "Masa fina con carne especiada, verduras y limon.",
    longDescription: "La pizza turca en su forma mas reconocible, ligera pero con mucho sabor.",
    price: 8.2,
    image: lahmacunImage,
    featured: true,
    tags: ["Horno", "Ligero"],
    prepTime: "13 min",
    highlight: "Muy buena entrada para clientes nuevos",
    modifierGroups: [sauceGroup, extrasGroup, spiceGroup],
  },
  {
    id: "lahmacun-durum",
    name: "Lahmacun Enrollado",
    categoryId: "turkish-oven",
    description: "Lahmacun doblado con ensalada fresca y salsa yogur.",
    longDescription: "Hibrido entre especialidad turca y formato callejero. Diferencia la carta de competidores directos.",
    price: 9.4,
    image: lahmacunImage,
    tags: ["Original", "Street food"],
    prepTime: "14 min",
    highlight: "Ideal para una carta mas completa y menos generica",
    modifierGroups: [proteinClassicGroup, sauceGroup, extrasGroup, spiceGroup],
  },
  {
    id: "pide-queso-sucuk",
    name: "Pide de Queso y Sucuk",
    categoryId: "turkish-oven",
    description: "Barquita de masa horneada con queso fundido y embutido turco.",
    longDescription: "Aporta variedad real al menu con un producto claramente aspiracional y fotografiable.",
    price: 10.9,
    image: lahmacunImage,
    featured: true,
    tags: ["Horno", "Especial"],
    prepTime: "16 min",
    highlight: "Producto con gran valor percibido",
    modifierGroups: [extrasGroup, spiceGroup],
  },
  {
    id: "pan-naan-queso",
    name: "Pan Naan con Queso",
    categoryId: "turkish-oven",
    description: "Pan tierno al horno con queso fundido y mantequilla especiada.",
    longDescription: "Perfecto como acompanamiento premium o para compartir en el centro de la mesa.",
    price: 5.9,
    image: lahmacunImage,
    tags: ["Compartir", "Acompanamiento"],
    prepTime: "9 min",
    highlight: "Complemento facil de vender junto a platos y menus",
    modifierGroups: [extrasGroup],
  },
  {
    id: "hummus-casero",
    name: "Hummus Casero",
    categoryId: "starters",
    description: "Crema de garbanzo con aceite de oliva, sumac y pan caliente.",
    longDescription: "Entrante transversal que encaja tanto en mesa como en delivery.",
    price: 5.5,
    image: falafelImage,
    vegetarian: true,
    featured: true,
    tags: ["Vegetariano", "Para compartir"],
    prepTime: "8 min",
    highlight: "Suma valor a cualquier pedido en segundos",
    modifierGroups: [breadGroup],
  },
  {
    id: "sigara-borek",
    name: "Sigara Borek",
    categoryId: "starters",
    description: "Rollitos crujientes rellenos de queso y hierbas.",
    longDescription: "Pequena pieza de picoteo con muy buena salida en pedidos de grupo.",
    price: 6.4,
    image: falafelImage,
    vegetarian: true,
    tags: ["Crujiente", "Picoteo"],
    prepTime: "10 min",
    highlight: "Encaja muy bien como add-on en carrito",
    modifierGroups: [sauceGroup],
  },
  {
    id: "patatas-dejavu",
    name: "Patatas DejaVu",
    categoryId: "starters",
    description: "Patatas crujientes con queso, carne y doble salsa.",
    longDescription: "Un entrante muy visual, rentable y perfecto para delivery o grupos.",
    price: 7.9,
    image: donerImage,
    bestseller: true,
    tags: ["Compartir", "Top ventas"],
    prepTime: "11 min",
    highlight: "Uno de los extras que mas empuja el ticket",
    modifierGroups: [proteinClassicGroup, sauceGroup, extrasGroup, spiceGroup],
  },
  {
    id: "alitas-especiadas",
    name: "Alitas Especiadas",
    categoryId: "starters",
    description: "Alitas marinadas con especias suaves y glaseado final.",
    longDescription: "Da variedad a la carta y conecta con clientes que buscan compartir algo mas clasico.",
    price: 8.4,
    image: adanaImage,
    tags: ["Para compartir", "Brasa"],
    prepTime: "13 min",
    highlight: "Introduce un perfil mas amplio sin salir de la linea del local",
    modifierGroups: [sauceGroup, spiceGroup],
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    categoryId: "veggie",
    description: "Falafel recien hecho con hummus, pepino, tomate y salsa tahini.",
    longDescription: "La opcion vegetal que no parece una alternativa menor. Muy completa y muy vendible.",
    price: 8.2,
    image: falafelImage,
    featured: true,
    bestseller: true,
    vegetarian: true,
    tags: ["Vegetariano", "Fresco"],
    prepTime: "12 min",
    highlight: "La referencia vegetal que da seriedad a la carta",
    modifierGroups: [sauceGroup, extrasGroup, menuUpgradeGroup, spiceGroup],
  },
  {
    id: "falafel-plate",
    name: "Plato de Falafel",
    categoryId: "veggie",
    description: "Falafel con arroz, ensalada fresca, pan y hummus.",
    longDescription: "Version completa para local o delivery, muy equilibrada y de ticket mas alto.",
    price: 10.9,
    image: falafelImage,
    vegetarian: true,
    tags: ["Vegetariano", "Completo"],
    prepTime: "14 min",
    highlight: "Aporta profundidad real a la seccion veggie",
    modifierGroups: [sideGroup, sauceGroup, extrasGroup],
  },
  {
    id: "ensalada-turca",
    name: "Ensalada Turca",
    categoryId: "veggie",
    description: "Tomate, pepino, cebolla morada, queso feta y vinagreta de hierbas.",
    longDescription: "Ligera, fresca y muy util para completar pedidos grandes o mesas mixtas.",
    price: 7.1,
    image: terrazaImage,
    vegetarian: true,
    tags: ["Ligero", "Fresco"],
    prepTime: "8 min",
    highlight: "Cubre la necesidad de una opcion fresca y visual",
    modifierGroups: [extrasGroup],
  },
  {
    id: "veggie-box",
    name: "Veggie Box Mediterraneo",
    categoryId: "veggie",
    description: "Base de arroz con falafel, verduras, hummus y salsa yogur vegetal.",
    longDescription: "Formato moderno y facil de pedir, pensado para clientes que buscan una opcion actual.",
    price: 9.8,
    image: falafelImage,
    vegetarian: true,
    tags: ["Bowl", "Delivery"],
    prepTime: "11 min",
    highlight: "Hace que la carta se perciba mas actual",
    modifierGroups: [sideGroup, sauceGroup, extrasGroup],
  },
  {
    id: "baklava-pistacho",
    name: "Baklava de Pistacho",
    categoryId: "desserts-drinks",
    description: "Hojaldre fino con frutos secos y almibar ligero.",
    longDescription: "El postre turco mas reconocible, perfecto para cerrar el pedido con un gesto premium.",
    price: 4.9,
    image: heroImage,
    featured: true,
    tags: ["Postre", "Tradicional"],
    prepTime: "4 min",
    highlight: "Postre corto pero con mucha identidad",
    modifierGroups: [dessertToppingsGroup],
  },
  {
    id: "kunefe",
    name: "Kunefe",
    categoryId: "desserts-drinks",
    description: "Cabello de angel crujiente con queso fundido y pistacho.",
    longDescription: "Postre caliente con alto valor percibido. Ayuda a posicionar el local por encima de la media.",
    price: 6.8,
    image: heroImage,
    tags: ["Postre caliente", "Especialidad"],
    prepTime: "10 min",
    highlight: "Ideal para elevar la sensacion de restaurante",
    modifierGroups: [dessertToppingsGroup],
  },
  {
    id: "ayran-artesano",
    name: "Ayran Artesano",
    categoryId: "desserts-drinks",
    description: "Bebida turca de yogur muy fria y refrescante.",
    longDescription: "La referencia que conecta directamente con la identidad del negocio.",
    price: 2.6,
    image: terrazaImage,
    tags: ["Bebida", "Tradicional"],
    prepTime: "2 min",
    highlight: "Muy util para reforzar autenticidad",
    modifierGroups: [sizeDrinkGroup],
  },
  {
    id: "refresco-clasico",
    name: "Refresco Clasico",
    categoryId: "desserts-drinks",
    description: "Refresco frio para acompanar cualquier menu.",
    longDescription: "Producto basico pero necesario para cerrar bien los menus y no forzar la eleccion.",
    price: 2.2,
    image: terrazaImage,
    tags: ["Bebida", "Menu"],
    prepTime: "2 min",
    highlight: "Base funcional para menus y ticket medio",
    modifierGroups: [drinkGroup, sizeDrinkGroup],
  },
];
