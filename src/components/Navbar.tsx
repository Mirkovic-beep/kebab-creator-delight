import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/pedido-online", label: "Pedidos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: { pathname: "/", hash: "#contacto" }, label: "Contacto" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
            DV
          </div>
          <div>
            <p className="font-display text-xl font-bold text-foreground">
              DejaVu <span className="text-gold">Kebab</span>
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground">
              Rivas-Vaciamadrid
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "font-body text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-gold",
                location.pathname === "/carta" && link.label === "Carta"
                  ? "text-gold"
                  : location.pathname === "/pedido-online" && link.label === "Pedidos"
                    ? "text-gold"
                    : location.pathname === "/nosotros" && link.label === "Nosotros"
                      ? "text-gold"
                      : "",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="gradient-gold rounded-xl px-5 text-sm text-gold-foreground">
            <Link to="/carta">Pedir ahora</Link>
          </Button>
        </div>

        <button onClick={() => setOpen((current) => !current)} className="text-foreground md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-background px-6 py-5 md:hidden">
          <div className="space-y-3">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl border border-border/60 bg-card/60 px-4 py-3 font-body text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            <Button asChild className="gradient-gold w-full rounded-xl text-gold-foreground">
              <Link to="/carta" onClick={() => setOpen(false)}>
                Pedir ahora
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-xl border-border/60">
              <a href="tel:917139980">
                <Phone className="mr-2 h-4 w-4" />
                Llamar al local
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
