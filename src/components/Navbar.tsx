import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#carta", label: "Carta" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          DejaVu <span className="text-gold">Kebab</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:917139980"
            className="gradient-gold text-gold-foreground font-body font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Reservar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-gold transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:917139980"
            className="block gradient-gold text-gold-foreground font-body font-semibold px-5 py-2 rounded-lg text-sm text-center"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
