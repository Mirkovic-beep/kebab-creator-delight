import { ArrowRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import terrazaImg from "@/assets/terraza.jpg";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: MapPin,
    title: "Local con identidad",
    description: "Texto breve sobre ubicacion y entorno del local.",
  },
  {
    icon: Clock3,
    title: "Operacion clara",
    description: "Texto breve sobre horario, sala y ritmo de servicio.",
  },
  {
    icon: ShieldCheck,
    title: "Mas orden",
    description: "Texto breve sobre ambiente, atencion y experiencia general.",
  },
];

const AboutPreviewSection = () => {
  return (
    <section id="nosotros" className="bg-muted/30 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[32px] border border-border/60 shadow-[0_18px_70px_rgba(0,0,0,0.16)]">
          <img
            src={terrazaImg}
            alt="Terraza de Bar DejaVu Kebab"
            className="h-full w-full object-cover"
            width={1280}
            height={720}
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">El local</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Un espacio comodo para comer y compartir.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Texto placeholder sobre la historia del local, el ambiente y la propuesta del espacio.
          </p>

          <div className="mt-8 grid gap-4">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-[24px] border border-border/60 bg-card/80 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                    <highlight.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button asChild className="gradient-gold mt-8 h-12 rounded-xl px-6 text-gold-foreground">
            <Link to="/nosotros">
              Descubrir mas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
