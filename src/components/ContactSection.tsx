import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
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

  const contactInfo = [
    { icon: Mail, label: "E-posta", value: "alperen@example.com" },
    { icon: Phone, label: "Telefon", value: "+90 555 123 4567" },
    { icon: MapPin, label: "Konum", value: "Türkiye" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 bg-secondary/30 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-primary text-sm">// İletişim</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Benimle <span className="text-gradient">İletişime Geç</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Projeleriniz veya BT ihtiyaçlarınız için benimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass-card p-8 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">İsim</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-posta</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mesaj</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
