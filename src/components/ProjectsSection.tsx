import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
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

  const projects = [
    {
      number: "01",
      title: "BT Yönetim Paneli",
      description: "Kurumsal BT varlıklarını ve destek taleplerini yönetmek için dashboard.",
      tags: ["React", "Node.js"],
    },
    {
      number: "02",
      title: "Passwd Password Manager",
      description: "Şifrelerinizi güvenle saklayan masaüstü programı ve tarayıcı eklentisi.",
      tags: ["C#", "Desktop", "Extension"],
    },
    {
      number: "03",
      title: "BIOS Şifre Sıfırlama Aracı",
      description: "Kilitli BIOS şifresini üst düzey yönetici şifresi veya pil çıkarma simülasyonu ile sıfırlayan araç.",
      tags: ["Python", "Security"],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 lg:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="text-xs tracking-widest uppercase text-primary font-medium">Projeler</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
              Son <span className="text-primary">Çalışmalarım</span>
            </h2>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 lg:p-10 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <span className="font-display text-3xl md:text-5xl font-light text-primary/30 group-hover:text-primary/50 transition-colors">
                  {project.number}
                </span>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-xl">{project.description}</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 md:px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
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

export default ProjectsSection;
