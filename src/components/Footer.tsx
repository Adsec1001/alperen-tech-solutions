const Footer = () => {
  return (
    <footer className="py-10 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 <span className="text-foreground font-medium">Alperen</span>. Tüm hakları saklıdır.
        </p>
        <a href="#" className="font-display text-lg font-semibold hover:text-primary transition-colors">
          Alperen<span className="text-primary">.</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
