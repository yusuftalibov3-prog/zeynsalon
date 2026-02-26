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
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/905451830202";

const navLinks = [
  { name: 'Hizmetler', href: '#hizmetler' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Fiyatlar', href: '#fiyatlar' },
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
  },
  {
    title: "El Bakımı",
    description: "Manikür ve kalıcı oje uygulamalarıyla ellerinizde kusursuz görünüm.",
    emoji: "💅"
  },
  {
    title: "Kalıcı Makyaj",
    description: "Özel günleriniz için profesyonel ürünlerle kalıcı ve şık makyaj uygulamaları.",
    emoji: "💄"
  }
];

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    comment: "İpek kirpik uygulaması için geldim, sonuçtan çok memnun kaldım. Hijyen ve ilgi harikaydı.",
    rating: 5
  },
  {
    name: "Selin Demir",
    comment: "Kaş dizaynında tek adresim. Doğallığı bozmadan bu kadar güzel sonuç almak mucize.",
    rating: 5
  },
  {
    name: "Merve Kaya",
    comment: "Cilt bakımı sonrası cildim resmen parladı. Güler yüzlü hizmetiniz için teşekkürler.",
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
    <div className="min-h-screen bg-black selection:bg-gold/30 selection:text-gold">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-widest text-white">
            ZEYN<span className="text-gold">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-gold hover:bg-beige text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-gold/10"
            >
              <MessageCircle size={18} />
              Randevu Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-anthracite border-b border-white/5 md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
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
                  className="bg-gold text-black p-4 rounded-xl text-center font-semibold flex justify-center items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp'tan Randevu
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold font-medium tracking-widest uppercase text-xs mb-4">
              Premium Güzellik Deneyimi
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Zeyn ile <br />
              <span className="italic text-beige">güzelliğini</span> <br />
              öne çıkar.
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
              Kirpik • Kaş • Cilt bakımı — Modern, hijyenik ve profesyonel hizmet anlayışıyla İstanbul'un kalbindeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-gold hover:bg-beige text-black px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Randevu Al (WhatsApp)
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#hizmetler"
                className="border border-white/20 hover:border-gold px-8 py-4 rounded-full font-bold transition-all text-center"
              >
                Hizmetleri İncele
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-gold/5">
              <img 
                src="https://picsum.photos/seed/beauty-hero/800/1000" 
                alt="Beauty Salon" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-anthracite p-6 rounded-2xl border border-white/5 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Star className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-bold">5.0 Puan</p>
                  <p className="text-xs text-white/50">Google Yorumları</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-24 bg-anthracite/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Hizmetlerimiz</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-white/50 max-w-2xl mx-auto">
              Sizin için en modern teknikleri ve en kaliteli ürünleri bir araya getirdik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-anthracite border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all relative pt-2"
              >
                {/* Gold Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gold/5 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform border border-gold/10">
                    {service.emoji}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/5 hover:bg-gold hover:text-black px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2"
                  >
                    Bilgi Al <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Neden <span className="text-gold italic">Zeyn</span> Güzellik?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Hijyen ve Kalite</h4>
                  <p className="text-white/50 text-sm">Tüm uygulamalarımızda sterilizasyon kurallarına ve en üst segment ürün kullanımına önem veriyoruz.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Doğal ve Modern Görünüm</h4>
                  <p className="text-white/50 text-sm">Abartıdan uzak, yüz hatlarınıza uyumlu ve modern dokunuşlarla doğal güzelliğinizi vurguluyoruz.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Memnuniyet Odaklı Hizmet</h4>
                  <p className="text-white/50 text-sm">Sizin mutluluğunuz bizim önceliğimiz. Her danışanımıza özel ilgi ve profesyonel yaklaşım sunuyoruz.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/salon-interior/800/600" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold/20 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-24 bg-anthracite/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Galeri</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-white/50">Uygulamalarımızdan bazı kareler.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/5"
              >
                <img 
                  src={`https://picsum.photos/seed/beauty-${i}/600/600`} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Müşteri Yorumları</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-anthracite p-8 rounded-2xl border border-white/5 relative">
                <div className="flex text-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-6">"{t.comment}"</p>
                <div className="font-bold text-gold">{t.name}</div>
                <div className="absolute -top-4 -left-4 text-6xl text-gold/10 font-serif">“</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="fiyatlar" className="py-24 bg-gold/5 border-y border-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Fiyat Listesi</h2>
          <p className="text-white/60 text-lg mb-10">
            Hizmetlerimiz kişiye özel ihtiyaçlara göre değişiklik gösterebilir. En güncel fiyat bilgisi ve size özel paketler için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-beige transition-all shadow-xl shadow-gold/20"
          >
            <MessageCircle size={24} />
            Hemen Fiyat Al
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">İletişim</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Adres</h4>
                  <p className="text-white/50">Bağcılar, İstanbul (Merkez Mah.)</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telefon</h4>
                  <p className="text-white/50">+90 (545) 183 02 02</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Çalışma Saatleri</h4>
                  <p className="text-white/50">Pazartesi - Cumartesi: 09:00 - 20:00</p>
                  <p className="text-white/50">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-anthracite p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Hızlı Randevu</h3>
            <p className="text-white/50 mb-8">Hemen randevu oluşturmak veya sorularınızı sormak için aşağıdaki butona tıklayarak bize WhatsApp'tan yazabilirsiniz.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg"
            >
              <MessageCircle size={28} />
              WhatsApp ile Bağlan
            </a>
            <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold tracking-widest">
            ZEYN<span className="text-gold">.</span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 Zeyn Güzellik Salonu. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-gold">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gold">KVKK</a>
          </div>
          <div className="text-[10px] text-white/20 mt-4">
            demo hesap yusuf web
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 md:hidden"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
