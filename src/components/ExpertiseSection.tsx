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
      { threshold: 0.2 }
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
      description: "Sistem yönetimi, ağ altyapısı ve BT destek hizmetleri",
      skills: ["Sistem Yönetimi", "Ağ Yönetimi", "Teknik Destek"],
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Güvenlik denetimleri, tehdit analizi ve koruma stratejileri",
      skills: ["Penetrasyon Testi", "Güvenlik Analizi", "Firewall"],
    },
    {
      icon: Code,
      title: "Yazılım Geliştirme",
      description: "Web ve masaüstü uygulama geliştirme, API tasarımı",
      skills: ["Web Development", "API Design", "Otomasyon"],
    },
    {
      icon: HardDrive,
      title: "Donanım",
      description: "Donanım kurulumu, bakımı ve sorun giderme",
      skills: ["PC Montaj", "Donanım Tamiri", "Yükseltme"],
    },
    {
      icon: Server,
      title: "Sunucu Yönetimi",
      description: "Sunucu kurulumu, yapılandırma ve optimizasyon",
      skills: ["Linux", "Windows Server", "Virtualization"],
    },
    {
      icon: Wifi,
      title: "Ağ Çözümleri",
      description: "Ağ tasarımı, kurulumu ve performans optimizasyonu",
      skills: ["Network Design", "VPN", "Monitoring"],
    },
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 px-4 bg-secondary/30 relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-primary text-sm">// Uzmanlık Alanları</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Ne <span className="text-gradient">Yaparım</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl transition-all duration-700 hover:scale-[1.02] hover:border-primary/50 group cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
