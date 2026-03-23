import donerImg from "@/assets/doner.jpg";
import lahmacunImg from "@/assets/lahmacun.jpg";
import falafelImg from "@/assets/falafel.jpg";
import adanaImg from "@/assets/adana.jpg";

const dishes = [
  {
    name: "Döner Kebab",
    description: "Carne marinada asada lentamente en espetón vertical, servida con pan pita, ensalada fresca y salsa yogur.",
    price: "8,50 €",
    image: donerImg,
  },
  {
    name: "Lahmacun",
    description: "La 'pizza turca': masa fina crujiente con carne picada especiada, hierbas frescas y un toque de limón.",
    price: "7,00 €",
    image: lahmacunImg,
  },
  {
    name: "Adana Kebab",
    description: "Brocheta de carne picada de cordero con especias picantes, asada a la brasa y servida con bulgur.",
    price: "12,00 €",
    image: adanaImg,
  },
  {
    name: "Falafel Platter",
    description: "Croquetas crujientes de garbanzos con hummus casero, ensalada fresca, pan pita y salsa tahini.",
    price: "9,50 €",
    image: falafelImg,
  },
];

const MenuSection = () => {
  return (
    <section id="carta" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-3">Nuestra Carta</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Especialidades Turcas
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-colors duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-gold font-display text-xl font-semibold">{dish.price}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://bar-dejavu-kebab.es"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-gold-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Ver Menú Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
