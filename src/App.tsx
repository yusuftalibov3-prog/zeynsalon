import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  CheckCircle2, 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight,
  Star,
  Search,
  Calendar,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/905451830202";

const navLinks = [
  { name: 'Hizmetler', href: '#hizmetler' },
  { name: 'İletişim', href: '#iletisim' },
];

const services = [
  {
    title: "İpek Kirpik",
    description: "Bakışlarınıza derinlik katan, doğal görünümlü ve uzun ömürlü kirpik uygulamaları.",
    emoji: "👁️"
  },
  {
    title: "Kirpik Lifting",
    description: "Kendi kirpiklerinize doğal bir kıvrım ve hacim kazandıran vitamin destekli bakım.",
    emoji: "✨"
  },
  {
    title: "Kaş Dizayn",
    description: "Yüz hatlarınıza en uygun kaş formunu profesyonel tekniklerle belirliyoruz.",
    emoji: "🪄"
  },
  {
    title: "Cilt Bakımı",
    description: "Cildinizin ihtiyacı olan nemi ve canlılığı geri kazandıran medikal bakımlar.",
    emoji: "🧴"
  }
];

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    comment: "İpek kirpik uygulaması için geldim, sonuçtan çok memnun kaldım. Hijyen ve ilgi harikaydı.",
    avatar: "https://i.pravatar.cc/150?u=ayse",
    rating: 5
  },
  {
    name: "Selin Demir",
    comment: "Kaş dizaynında tek adresim. Doğallığı bozmadan bu kadar güzel sonuç almak mucize.",
    avatar: "https://i.pravatar.cc/150?u=selin",
    rating: 5
  },
  {
    name: "Merve Kaya",
    comment: "Cilt bakımı sonrası cildim resmen parladı. Güler yüzlü hizmetiniz için teşekkürler.",
    avatar: "https://i.pravatar.cc/150?u=merve",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black selection:bg-gold/30 selection:text-gold">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-rich-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-3xl font-serif font-bold tracking-[0.2em] text-white">
            ZEYN<span className="text-gold">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-white/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-gold hover:bg-gold-light text-rich-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all gold-glow gold-glow-hover"
            >
              Randevu Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-rich-black border-b border-white/5 md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-white/70 hover:text-gold"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold text-rich-black p-5 rounded-2xl text-center font-bold uppercase tracking-widest"
                >
                  WhatsApp'tan Randevu
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black/80 to-transparent z-10"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/salon-interior-luxury/1920/1080" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border-l-2 border-gold pl-4">
              Premium Güzellik Salonu
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-8">
              Zeyn ile <br />
              <span className="text-gold italic">güzelliğini</span> <br />
              öne çıkar.
            </h1>
            <p className="text-white/70 text-xl mb-12 max-w-lg leading-relaxed font-light">
              Bağcılar’da premium kirpik, kaş ve cilt bakımı deneyimi. Profesyonel dokunuşlarla kendinizi şımartın.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-gold hover:bg-gold-light text-rich-black px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all gold-glow gold-glow-hover flex items-center justify-center gap-3"
              >
                Hemen Randevu Al
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="border border-white/30 hover:border-gold px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={20} className="text-gold" />
                WhatsApp’tan Yaz
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Trust Section: Neden Web Sitesi? */}
      <section className="py-32 bg-rich-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Neden <span className="text-gold italic">Zeyn</span>?</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 bg-anthracite rounded-3xl border border-white/5 text-center group"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-8 group-hover:bg-gold group-hover:text-rich-black transition-all duration-500">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Google’da Görünürlük</h3>
              <p className="text-white/50 leading-relaxed">Potansiyel müşterileriniz sizi aradığında en ön sırada profesyonel bir imajla karşılanın.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 bg-anthracite rounded-3xl border border-white/5 text-center group"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-8 group-hover:bg-gold group-hover:text-rich-black transition-all duration-500">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kolay Online Randevu</h3>
              <p className="text-white/50 leading-relaxed">Müşterileriniz tek tıkla size ulaşsın, randevu süreçlerinizi hızlandırın ve kazancınızı artırın.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 bg-anthracite rounded-3xl border border-white/5 text-center group"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-8 group-hover:bg-gold group-hover:text-rich-black transition-all duration-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Profesyonel Marka İmajı</h3>
              <p className="text-white/50 leading-relaxed">Lüks ve güven veren bir dijital kimlikle rakiplerinizin önüne geçin ve sadık müşteriler kazanın.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 bg-anthracite/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Hizmetlerimiz</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold">Profesyonel <span className="text-gold italic">Dokunuşlar</span></h2>
            </div>
            <p className="text-white/50 max-w-sm">Sizin için en modern teknikleri ve en kaliteli ürünleri bir araya getirdik.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-rich-black border border-white/5 rounded-3xl overflow-hidden hover:border-gold/30 transition-all flex flex-col"
              >
                <div className="aspect-square flex items-center justify-center bg-anthracite/50 relative overflow-hidden">
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-500 z-10">
                    {service.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full border border-gold/30 hover:bg-gold hover:text-rich-black text-gold py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp’tan Sor
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Mutlu <span className="text-gold italic">Danışanlar</span></h2>
            <p className="text-white/40 text-sm uppercase tracking-widest">Google müşteri yorumlarından alınmıştır.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-anthracite p-10 rounded-[32px] border border-white/5 relative group hover:border-gold/20 transition-all">
                <div className="flex gap-1 text-gold mb-8">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic text-lg leading-relaxed mb-10">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-gold/20" />
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gold uppercase tracking-widest">Doğrulanmış Müşteri</div>
                  </div>
                </div>
                <div className="absolute top-10 right-10 text-6xl text-gold/5 font-serif group-hover:text-gold/10 transition-colors">“</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-32 bg-anthracite/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Bize Ulaşın</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12">Sizi <span className="text-gold italic">Bekliyoruz</span></h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="bg-gold/10 p-5 rounded-2xl text-gold">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Adres</h4>
                  <p className="text-white/50 text-lg">Bağcılar, İstanbul (Merkez Mah.)</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-gold text-sm font-bold mt-2 flex items-center gap-2 hover:underline">
                    Yol Tarifi Al <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-8">
                <div className="bg-gold/10 p-5 rounded-2xl text-gold">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Telefon</h4>
                  <p className="text-white/50 text-lg">+90 (545) 183 02 02</p>
                </div>
              </div>
              
              <div className="flex items-start gap-8">
                <div className="bg-gold/10 p-5 rounded-2xl text-gold">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Çalışma Saatleri</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-white/50">
                    <span>Pazartesi - Cumartesi</span>
                    <span className="text-white">09:00 - 20:00</span>
                    <span>Pazar</span>
                    <span className="text-red-400">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-3xl font-bold flex items-center justify-center gap-4 transition-all text-xl shadow-2xl shadow-green-500/20"
              >
                <MessageCircle size={32} />
                WhatsApp ile Hemen Bağlan
              </a>
            </div>
          </div>

          <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl min-h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48163.66440232537!2d28.8146199!3d41.034509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4f7d468647d%3A0x7d6a5e18469903b!2zQmHEn2PEsWxhci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Zeyn Güzellik Salonu Konum"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif font-bold tracking-[0.2em]">
            ZEYN<span className="text-gold">.</span>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href={WHATSAPP_LINK} className="text-white/40 hover:text-gold transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>

          <div className="text-white/30 text-xs uppercase tracking-widest text-center md:text-right">
            <p>© 2026 Zeyn Güzellik Salonu. Tüm hakları saklıdır.</p>
            <p className="mt-2 text-[10px] opacity-50">demo hesap yusuf web</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 md:hidden"
      >
        <MessageCircle size={36} />
      </motion.a>
    </div>
  );
}
