import terrazaImg from "@/assets/terraza.jpg";
import { MapPin, Phone, Clock, Wifi, UtensilsCrossed, TreePine } from "lucide-react";

const services = [
  { icon: TreePine, label: "Terraza" },
  { icon: Wifi, label: "Wi-Fi Gratis" },
  { icon: UtensilsCrossed, label: "Menú Infantil" },
];

const hours = [
  { day: "Lunes", time: "12:00 – 00:00" },
  { day: "Martes", time: "12:00 – 00:00" },
  { day: "Miércoles", time: "19:00 – 00:00" },
  { day: "Jueves", time: "12:00 – 00:00" },
  { day: "Viernes", time: "12:00 – 01:00" },
  { day: "Sábado", time: "12:00 – 01:00" },
  { day: "Domingo", time: "12:00 – 00:00" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={terrazaImg}
              alt="Terraza del Bar DejaVu Kebab Rivas"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div>
            <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-3">Sobre Nosotros</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Un rincón de Turquía en Rivas
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              En Bar DejaVu Kebab llevamos años ofreciendo los mejores sabores de la cocina turca en
              Rivas-Vaciamadrid. Nuestras recetas auténticas, ingredientes frescos y la pasión por la
              gastronomía hacen de cada visita una experiencia inolvidable. Disfruta en nuestra acogedora
              terraza o en el interior de nuestro local.
            </p>

            <div className="flex gap-6 mb-8">
              {services.map((service) => (
                <div key={service.label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs text-muted-foreground font-body">{service.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-foreground">C/ Manuela Malasaña & C/ Margarita Xirgu, 28523 Rivas-Vaciamadrid, Madrid</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:917139980" className="text-foreground hover:text-gold transition-colors">917 13 99 80</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div className="text-foreground">
                  <p className="font-semibold mb-1">Horario</p>
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-muted-foreground">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
