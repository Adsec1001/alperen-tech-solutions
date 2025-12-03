import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full glass-card">
            &lt;Bilgi Teknolojileri Uzmanı /&gt;
          </span>
        </div>
        
        <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Merhaba, Ben{" "}
          <span className="text-gradient">Alperen</span>
        </h1>
        
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Bilgi Teknolojileri, Siber Güvenlik, Yazılım ve Donanım alanlarında 
          sorunlarınıza çözüm sunuyor, projelerinize hayat veriyorum.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            İletişime Geç
          </a>
          <a
            href="#about"
            className="px-8 py-4 glass-card text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
          >
            Hakkımda
          </a>
        </div>

        <a
          href="#about"
          className="animate-fade-up-delay-4 inline-block mt-16 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
