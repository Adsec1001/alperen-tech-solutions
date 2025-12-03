const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 <span className="text-primary font-semibold">Alperen</span>. Tüm hakları saklıdır.
        </p>
        <p className="text-muted-foreground text-sm font-mono">
          &lt;/&gt; ile yapıldı
        </p>
      </div>
    </footer>
  );
};

export default Footer;
