import { Phone, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-3">Encuéntranos</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ven a Visitarnos
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
          Estamos en el corazón de Rivas-Vaciamadrid. ¡Te esperamos con los brazos abiertos y la parrilla encendida!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:917139980"
            className="bg-card border border-border rounded-lg p-6 hover:border-gold/40 transition-colors group"
          >
            <Phone className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-display text-lg font-semibold text-foreground">Llámanos</p>
            <p className="text-muted-foreground text-sm mt-1">917 13 99 80</p>
          </a>
          <a
            href="https://maps.google.com/?q=Bar+DejaVu+Kebab+Rivas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:border-gold/40 transition-colors group"
          >
            <MapPin className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-display text-lg font-semibold text-foreground">Cómo Llegar</p>
            <p className="text-muted-foreground text-sm mt-1">Ver en Google Maps</p>
          </a>
          <a
            href="https://bar-dejavu-kebab.es"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:border-gold/40 transition-colors group"
          >
            <ExternalLink className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-display text-lg font-semibold text-foreground">Menú Online</p>
            <p className="text-muted-foreground text-sm mt-1">bar-dejavu-kebab.es</p>
          </a>
        </div>

        <div className="rounded-lg overflow-hidden border border-border">
          <iframe
            title="Ubicación Bar DejaVu Kebab Rivas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.5!2d-3.54!3d40.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmFyIERlamFWdSBLZWJhYiBSaXZhcw!5e0!3m2!1ses!2ses!4v1600000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
