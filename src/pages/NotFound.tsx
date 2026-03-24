import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-6">
      <div className="max-w-xl rounded-[32px] border border-border/60 bg-card/85 p-10 text-center shadow-[0_22px_80px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-4 font-display text-5xl font-bold">Esa pagina no existe</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          La ruta <span className="text-foreground">{location.pathname}</span> no corresponde a ninguna seccion activa del proyecto.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="gradient-gold rounded-xl px-6 text-gold-foreground">
            <Link to="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl border-border/60">
            <Link to="/carta">Abrir carta</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
