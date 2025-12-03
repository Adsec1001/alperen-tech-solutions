import { ArrowDown } from "lucide-react";
import adsecLogo from "@/assets/adsec-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-primary bg-primary/10 rounded-full">
                BT Uzmanı
              </span>
            </div>
            
            <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Merhaba,
              <br />
              Ben <span className="text-primary">Alperen</span>
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Bilgi Teknolojileri, Siber Güvenlik, Yazılım ve Donanım alanlarında 
              profesyonel çözümler sunuyorum.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Benimle Çalış
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all duration-300"
              >
                Projeleri Gör
              </a>
            </div>
          </div>

          {/* Right - Logo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-slide-right relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-card to-secondary rounded-full flex items-center justify-center shadow-xl p-8">
                  <img 
                    src={adsecLogo} 
                    alt="Adsec Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-2xl rotate-12" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs tracking-widest uppercase mb-2">Keşfet</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
