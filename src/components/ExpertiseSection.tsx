import { useEffect, useRef, useState } from "react";
import { Shield, Code, Monitor, HardDrive, Server, Wifi } from "lucide-react";

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const expertise = [
    {
      icon: Monitor,
      title: "Bilgi Teknolojileri",
      description: "Sistem yönetimi, ağ altyapısı ve kurumsal BT destek hizmetleri.",
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Güvenlik denetimleri, tehdit analizi ve koruma stratejileri.",
    },
    {
      icon: Code,
      title: "Yazılım Geliştirme",
      description: "Web ve masaüstü uygulama geliştirme, API tasarımı ve otomasyon.",
    },
    {
      icon: HardDrive,
      title: "Donanım",
      description: "Donanım kurulumu, bakımı, yükseltme ve sorun giderme.",
    },
    {
      icon: Server,
      title: "Sunucu Yönetimi",
      description: "Sunucu kurulumu, yapılandırma ve performans optimizasyonu.",
    },
    {
      icon: Wifi,
      title: "Ağ Çözümleri",
      description: "Ağ tasarımı, kurulumu, VPN ve performans izleme.",
    },
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 bg-secondary/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-widest uppercase text-primary font-medium">Uzmanlık Alanları</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Ne <span className="text-primary">Yaparım</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`group p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
