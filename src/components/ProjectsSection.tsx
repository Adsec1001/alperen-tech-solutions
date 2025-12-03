import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Güvenlik Denetim Aracı",
      description: "Ağ güvenliği taraması ve zafiyet tespiti için geliştirdiğim otomasyon aracı.",
      tags: ["Python", "Security", "Automation"],
      color: "from-primary/20 to-cyan-500/20",
    },
    {
      title: "BT Yönetim Paneli",
      description: "Kurumsal BT varlıklarını ve destek taleplerini yönetmek için dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Sistem İzleme Uygulaması",
      description: "Sunucu ve ağ performansını gerçek zamanlı izleyen monitoring çözümü.",
      tags: ["TypeScript", "WebSocket", "Charts"],
      color: "from-blue-500/20 to-indigo-500/20",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-primary text-sm">// Projeler</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Son <span className="text-gradient">Çalışmalarım</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-primary/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--background)/0.1)_50%,transparent_75%)]" />
                <Folder className="absolute bottom-4 right-4 w-12 h-12 text-foreground/20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
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
