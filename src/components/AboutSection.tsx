import { useEffect, useRef, useState } from "react";
import { User, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
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

  const cards = [
    {
      icon: User,
      title: "Ben Kimim",
      description: "Bilişim sektöründe tutkuyla çalışan, sürekli öğrenmeye ve kendini geliştirmeye odaklı bir teknoloji uzmanıyım.",
    },
    {
      icon: Target,
      title: "Misyonum",
      description: "BT sorunlarınızı anlayıp, en uygun ve verimli çözümleri sunarak işlerinizi kolaylaştırmak.",
    },
    {
      icon: Lightbulb,
      title: "Yaklaşımım",
      description: "Her projeye özgün bakış açısıyla yaklaşıyor, yenilikçi ve sürdürülebilir çözümler üretiyorum.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-primary text-sm">// Hakkımda</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Teknoloji <span className="text-gradient">Tutkusu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl transition-all duration-700 hover:scale-105 hover:border-primary/50 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
