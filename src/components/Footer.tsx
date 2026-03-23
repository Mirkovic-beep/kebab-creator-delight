const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
        <p>© 2025 Bar DejaVu Kebab Rivas. Todos los derechos reservados.</p>
        <div className="flex items-center gap-1">
          <span>⭐ 4,4</span>
          <span className="mx-1">·</span>
          <span>712 reseñas en Google</span>
          <span className="mx-1">·</span>
          <span>10-20 € por persona</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
