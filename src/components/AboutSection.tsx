import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: "5+", label: "Yıl Deneyim" },
    { number: "50+", label: "Tamamlanan Proje" },
    { number: "100%", label: "Müşteri Memnuniyeti" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left - Label */}
          <div className="lg:col-span-2">
            <span className="text-xs tracking-widest uppercase text-primary font-medium">Hakkımda</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
              Teknolojiye
              <br />
              <span className="text-primary">Tutkulu</span>
            </h2>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Merhaba, ben <span className="text-foreground font-medium">Alperen Dur</span>. ADSEC olarak Bilgi Teknolojileri 
              alanında profesyonel çözümler sunuyorum. BT Destek, Siber Güvenlik, Yazılım Geliştirme ve Donanım konularında 
              yılların deneyimiyle müşterilerime güvenilir hizmet veriyorum.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Teknolojiyi sadece bir meslek olarak değil, bir tutku olarak görüyorum. Her projede en iyi çözümü sunmak 
              ve müşterilerimin işlerini kolaylaştırmak benim önceliğim.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12">
              Kendi geliştirdiğim yazılım projelerim bulunmakta. Her projeye özgün bir bakış açısıyla yaklaşıyor, 
              sürdürülebilir ve verimli çözümler üretiyorum.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block font-display text-3xl md:text-4xl font-semibold text-primary">{stat.number}</span>
                  <span className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
