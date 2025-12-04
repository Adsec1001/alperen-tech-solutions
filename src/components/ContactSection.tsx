import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Instagram, Phone } from "lucide-react";

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

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/alperen-dur", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/adsec.co/", label: "Instagram" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 lg:px-12 bg-secondary/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-xs tracking-widest uppercase text-primary font-medium">İletişim</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4">
              Birlikte
              <br />
              <span className="text-primary">Çalışalım</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-6">Teknolojiye tutkulu</p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md">
              Bilgi Teknolojileri alanında BT Destek, Siber Güvenlik, Yazılım ve Donanım konularında 
              çözüm odaklı çalışıyorum. Projeleriniz veya BT ihtiyaçlarınız için benimle iletişime geçin.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">E-posta</p>
                  <p className="font-medium text-sm md:text-base">aa1lperen@outlook.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-sm md:text-base">0539 778 40 00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Konum</p>
                  <p className="font-medium text-sm md:text-base">Türkiye</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form className="bg-background p-6 md:p-8 lg:p-10 rounded-2xl border border-border shadow-sm">
              <div className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">İsim</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Soyisim</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm md:text-base"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesaj</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-sm md:text-base"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
