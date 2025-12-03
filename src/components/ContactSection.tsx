import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

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
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 bg-secondary/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-xs tracking-widest uppercase text-primary font-medium">İletişim</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-8">
              Birlikte
              <br />
              <span className="text-primary">Çalışalım</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Projeleriniz veya BT ihtiyaçlarınız için benimle iletişime geçin. 
              En kısa sürede dönüş yapacağım.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-posta</p>
                  <p className="font-medium">alperen@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Konum</p>
                  <p className="font-medium">Türkiye</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form className="bg-background p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">İsim</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Soyisim</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
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
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
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
