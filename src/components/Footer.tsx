import { Link } from "react-router-dom";

import { menuProducts, restaurantInfo } from "@/data/menu";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/40 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
        <div>
          <p className="font-display text-3xl font-bold text-foreground">
            DejaVu <span className="text-gold">Kebab</span>
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Texto placeholder sobre el local, la cocina y la experiencia de servicio.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{restaurantInfo.city}</span>
            <span>{restaurantInfo.phone}</span>
            <span>{menuProducts.length}+ opciones en carta</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-gold">
            Inicio
          </Link>
          <Link to="/carta" className="transition-colors hover:text-gold">
            Carta
          </Link>
          <Link to="/pedido-online" className="transition-colors hover:text-gold">
            Pedidos
          </Link>
          <Link to="/nosotros" className="transition-colors hover:text-gold">
            Nosotros
          </Link>
          <Link to={{ pathname: "/", hash: "#contacto" }} className="transition-colors hover:text-gold">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
