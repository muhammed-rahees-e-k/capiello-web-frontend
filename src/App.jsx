import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Mail, 
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Heart,
  Zap,
  Target,
  Crown,
  Scissors,
  Home,
  User
} from 'lucide-react';

const Facebook = ({ size = 24, color = "currentColor" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = ({ size = 24, color = "currentColor" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Youtube = ({ size = 24, color = "currentColor" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.15c.18-1.58 1.42-2.82 3-3C8.63 3.8 12 3.8 12 3.8s3.37 0 6.5.35c1.58.18 2.82 1.42 3 3 .35 3.14.35 4.85.35 4.85s0 1.71-.35 4.85c-.18 1.58-1.42 2.82-3 3-3.13.35-6.5.35-6.5.35s-3.37 0-6.5-.35c-1.58-.18-2.82-1.42-3-3C2.15 13.71 2.15 12 2.15 12s0-1.71.35-4.85z"/><polygon points="9.5 8.5 15.5 12 9.5 15.5 9.5 8.5"/></svg>;
const WhatsappIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);
import './styles.css';
import logoImg from './assets/capilo-logo.png';
import heroVideo from './assets/capiello-video.mp4';
import heroImg from './assets/capiello-hero-img.png';
import aboutImg from './assets/beautyphotos-8.jpg';
import serviceImg1 from './assets/beautyphotos-3.jpg';
import serviceImg2 from './assets/beautyphotos-10.jpg';
import serviceImg3 from './assets/beautyphotos-11.jpg';
import serviceImg4 from './assets/beautyphotos-1.jpg';
import serviceImg5 from './assets/beautyphotos-2.jpg';
import serviceImg6 from './assets/spa.jpg';
import serviceImg7 from './assets/beautyphotos-5.jpg';
import serviceImg8 from './assets/bride-makeover.jpg';
import groomMakeupImg from './assets/groom-makeup.jpeg';
import galleryImg1 from './assets/gallery-1.jpg';
import galleryImg2 from './assets/gallery-2.jpg';
import galleryImg3 from './assets/gallery-3.jpg';
import galleryImg4 from './assets/gallery-4.jpg';
import galleryImg5 from './assets/gallery-5.jpg';
import galleryImg6 from './assets/gallery-12.jpg';
import galleryImg7 from './assets/gallery-13.jpg';
import galleryImg8 from './assets/gallery-14.jpg';
import brideSectionImg from './assets/bride section.jpeg';
import gymImg from './assets/gym-1.jpg';
import ladiesGymImg from './assets/ladies-gym.jpg';

// --- Data Constants ---

const services = [
  {
    title: 'Bridal & Groom Makeup',
    img: serviceImg8,
    description: 'Exquisite bridal and groom makeovers with premium products and personalized attention.'
  },
  {
    title: 'Advanced Hair Styling',
    img: serviceImg4,
    description: 'From precision cuts to artistic butterfly layers, executed by senior stylists.'
  },
  {
    title: 'Hair Smooth & Treatments',
    img: serviceImg2,
    description: 'Expert Keratin, Botox, and Nano Blastia treatments for flawless, healthy hair.'
  },
  {
    title: 'Signature Skin & Spa',
    img: serviceImg6,
    description: 'Luxurious facials and body spa treatments designed to rejuvenate and glow.'
  }
];

const galleryImages = [
  galleryImg1, galleryImg2, galleryImg3, galleryImg4,
  galleryImg5, galleryImg6, galleryImg7, galleryImg8
];

const testimonials = [
  {
    name: "Anjali K.",
    age: 26,
    text: "The bridal makeup was dreamlike. It stayed perfect for over 12 hours. Capiello's team is truly professional and understands skin tones perfectly.",
    photo: galleryImg1
  },
  {
    name: "Rohit S.",
    age: 30,
    text: "Got my hair smoothening done here. The results are amazing and my hair feels so healthy. Highly recommend their professional staff.",
    photo: ""
  },
  {
    name: "Meera Nair",
    age: 29,
    text: "Best place for nail art in the city! The detail in the mehendi and nail extension work is just incomparable. Pure luxury.",
    photo: galleryImg2
  },
  {
    name: "Suresh P.",
    age: 34,
    text: "The groom makeup was subtle yet transformative. Felt very comfortable and confident on my big day. Excellent service.",
    photo: galleryImg3
  },
  {
    name: "Fatima R.",
    age: 27,
    text: "Their home service is a lifesaver. Had a full body spa at home and it was as relaxing as being in a five-star salon.",
    photo: galleryImg4
  }
];

const faqs = [
  {
    question: "What can I expect from a beauty appointment?",
    answer: "You can expect a calm, personalized experience with premium products, expert technique, and a focus on creating a look that makes you feel radiant and comfortable."
  },
  {
    question: "Can I book a bridal or special-event appointment?",
    answer: "Absolutely. We offer bridal beauty packages, event styling, and makeup services designed to keep you looking flawless through your big day."
  },
  {
    question: "How long does a typical visit last?",
    answer: "Appointments usually range from 60 to 90 minutes, depending on the service and your customized beauty plan."
  },
  {
    question: "Do you offer at-home or mobile services?",
    answer: "Yes! Select services are available in-studio or as mobile appointments for added convenience and luxury." 
  }
];

const processSteps = [
  {
    num: "1.",
    title: "Consultation",
    text: "We discuss your style and requirements, whether at our lounge or your home."
  },
  {
    num: "2.",
    title: "Premium Care",
    text: "Our certified artists use only premium products for a flawless, high-end finish." 
  },
  {
    num: "3.",
    title: "Radiant Result",
    text: "Walk out (or wake up) feeling beautiful, confident, and perfectly groomed." 
  }
];

// --- Sub-components ---

const Logo = () => (
  <a href="index.html" style={{ display: 'block' }}>
    <img src={logoImg} alt="Capiello Beauty Lounge" style={{ height: '55px', width: 'auto', display: 'block' }} />
  </a>
);

const SectionHeader = ({ eyebrow, title, description, dark = false }) => (
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="eyebrow-pill"
      style={{ color: dark ? 'var(--accent-gold)' : 'var(--text-secondary)' }}
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="serif-text"
      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: dark ? 'var(--text-light)' : 'var(--text-primary)', marginBottom: '20px' }}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
      >
        {description}
      </motion.p>
    )}
  </div>
);

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="faq-item" 
      onClick={() => setIsOpen(!isOpen)}
      style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', borderRadius: '0', padding: '24px 0' }}
    >
      <div className="faq-question" style={{ cursor: 'pointer' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{faq.question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer" style={{ paddingTop: '16px' }}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = testimonialsRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          testimonialsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          testimonialsRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="page-wrapper">
      <div className="content-inner">
        {/* --- Header --- */}
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo />
          </div>
          
          {/* Desktop Nav */}
          <nav className="site-nav desktop-only">
            <a href="#about">About</a>
            <a href="services.html">Services</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a className="button desktop-only" href="contact.html">Book Your Appointment</a>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* --- Mobile Menu Dropdown --- */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{ 
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'rgba(245, 243, 239, 0.98)',
                  backdropFilter: 'blur(16px)',
                  padding: '24px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  textAlign: 'center',
                  zIndex: 200
                }}
              >
                <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', padding: '8px 0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>About</a>
                <a href="services.html" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', padding: '8px 0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Services</a>
                <a href="gallery.html" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', padding: '8px 0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Gallery</a>
                <a href="contact.html" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', padding: '8px 0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* --- Hero Section --- */}
        <section className="container hero" id="hero">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-copy"
          >
            <span className="eyebrow-pill" style={{ marginBottom: '24px' }}>Capiello Beauty Lounge</span>
            <h1 className="serif-text">Experience Premium Beauty & Elegance</h1>
            <p>Indulge in high-end beauty transformations designed to reveal your most confident self. Our certified artists bring the luxury of a premium salon directly to your doorstep or welcome you into our serene lounge.</p>
            <div className="hero-actions">
              <span className="hero-note" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="var(--accent-gold)" />
                Premium Products | Home Service Available
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="hero-image-wrap"
          >
            <div className="arched-image hero-arched-image">
              <img src={heroImg} alt="Beauty parlor hero image" />
            </div>
            {/* Creative Beauty Quote Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }}
              className="beauty-quote-badge"
              style={{ 
                position: 'absolute', 
                bottom: '15%', 
                right: '-8%', 
                background: 'linear-gradient(135deg, var(--accent-purple), rgba(146, 80, 148, 0.8))',
                padding: '18px 20px', 
                borderRadius: '18px', 
                boxShadow: '0 15px 45px rgba(146, 80, 148, 0.3)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-start', 
                gap: '8px', 
                zIndex: 2,
                maxWidth: '180px',
                color: '#fff'
              }}
            >
              <Sparkles size={18} color="#fff" />
              <p style={{ fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.3', margin: '0', fontStyle: 'italic' }}>
                "Beauty begins the moment you decide to be yourself."
              </p>
              <span style={{ fontSize: '0.65rem', fontWeight: '500', opacity: 0.9 }}>- Capiello Beauty</span>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Stats/Features --- */}
        <section className="container" style={{ padding: '0 0 100px' }}>
          <div className="stats-section">
            {[
              { icon: <Sparkles />, title: "Certified Artists", text: "Our team consists of highly trained and certified beauty professionals dedicated to precision." },
              { icon: <Target />, title: "Premium Products", text: "We exclusively use high-end, international brands to ensure the best results and skin safety." },
              { icon: <Zap />, title: "Home Service", text: "Enjoy professional bridal, hair, and spa sessions in the comfort and privacy of your home." }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-item"
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="serif-text">{stat.title}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- About Section (Dark Card) --- */}
        <section id="about" className="about-dark">
          <div className="container">
            <div className="about-card">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="about-image-wrap"
              >
                <div className="arched-image" style={{ maxWidth: '400px', overflow: 'hidden' }}>
                  <video 
                    src={heroVideo} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </motion.div>
              <div className="about-content-dark">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="eyebrow-pill" 
                  style={{ color: 'var(--accent-gold)', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  OUR STORY
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="serif-text"
                >
                  Capiello Beauty Lounge
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Founded on the principles of professionalism and unparalleled customer satisfaction, Capiello Beauty Lounge is a sanctuary for those seeking premium beauty transformations. We believe that everyone deserves to feel confident and radiant, whether through a subtle hair change or a complete bridal makeover.
                </motion.p>
                <div className="about-bullets">
                  {['Certified Professionals', 'Luxury Home Services', 'Strict Hygiene Standards'].map((b, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bullet-item"
                    >
                      <Sparkles size={16} style={{ color: 'var(--accent-gold)', marginRight: '8px' }} />
                      <span>{b}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                <a className="button" style={{ background: 'var(--accent-purple)' }} href="contact.html">Book Your Appointment Today</a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Bridal & Groom Highlight Section --- */}
        <section className="bridal-groom-highlight" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="bridal-groom-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bridal-groom-content"
              >
                <span className="eyebrow-pill" style={{ marginBottom: '24px' }}>EXQUISITE WEDDING SERVICES</span>
                <h2 className="serif-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px' }}>Bridal & Groom Perfection</h2>
                <p style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                  Your special day deserves nothing less than perfection. Our premium bridal and groom packages are designed to make you shine. We use only international, dermatologist-tested products to ensure a flawless look that lasts.
                </p>
              </motion.div>

              <div className="bridal-image-composition">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="bridal-img-main"
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.8 }} 
                    src={groomMakeupImg} 
                    alt="Bridal elegance" 
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bridal-img-small"
                >
                  <motion.img 
                    whileHover={{ scale: 1.1 }} 
                    transition={{ duration: 0.8 }} 
                    src={brideSectionImg} 
                    alt="Bride makeover" 
                  />
                </motion.div>

                {/* Decorative Sparkle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="bridal-sparkle"
                >
                  <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                    <Sparkles size={44} color="var(--accent-gold)" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="bridal-groom-actions">
                <div className="wedding-chats">
                  <div className="wedding-chat-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="wedding-chat-icon purple">
                        <Crown size={20} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0 }}>Bridal Packages</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7 }}>From Simple to Glass Makeup.</p>
                      </div>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/918943780108" target="_blank" rel="noopener noreferrer" 
                      className="chat-button"
                    >
                      <WhatsappIcon size={16} color="#fff" />
                      Chat
                    </motion.a>
                  </div>

                  <div className="wedding-chat-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="wedding-chat-icon dark">
                        <Scissors size={20} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0 }}>Groom Styling</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.7 }}>Sharp, sophisticated look.</p>
                      </div>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/919846904164" target="_blank" rel="noopener noreferrer" 
                      className="chat-button"
                    >
                      <WhatsappIcon size={16} color="#fff" />
                      Chat
                    </motion.a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(146, 80, 148, 0.08)', borderRadius: '999px', border: '1px solid rgba(146, 80, 148, 0.2)', fontSize: '0.9rem', color: 'var(--accent-purple)', fontWeight: '600' }}
                  >
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                      <Home size={18} fill="currentColor" />
                    </motion.div>
                    <span>Available for Home Services</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="container" style={{ padding: '140px 0' }}>
          <SectionHeader
            eyebrow="SERVICES"
            title="Professional Beauty Rituals"
            description="Explore our wide range of services, meticulously categorized to cater to every aesthetic need. Available at our lounge or your home."
          />
            <div className="services-grid">
              {services.slice(0, 4).map((s, idx) => (
                <div
                  className="service-item"
                  key={idx}
                >
                  <div className="arched-image">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <h3 className="serif-text">{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{s.description}</p>
                </div>
              ))}
          </div>
          <div className="section-actions">
            <a className="button" href="services.html">View All Services</a>
          </div>
        </section>

        {/* --- Ladies Gym Banner --- */}
        <section className="container" style={{ padding: '0 0 100px' }}>
          <div className="ladies-gym-banner-card">
            <div className="ladies-gym-banner-content">
              <div className="ladies-gym-eyebrow">
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }}></div>
                 <span style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', color: 'var(--text-secondary)' }}>Fitness & Wellbeing</span>
              </div>
              <h2 className="serif-text" style={{ fontSize: 'clamp(2.2rem, 6vw, 2.8rem)', marginBottom: '12px', color: 'var(--text-primary)' }}>Exclusive Ladies Gym</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '450px', margin: '0 0 32px', lineHeight: '1.6' }}>
                Step into our premium, entirely private fitness facility designed just for women. Focus on your health goals in a comfortable and supportive environment.
              </p>
              <div className="ladies-gym-banner-actions">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919846904176" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#25D366', color: '#fff', padding: '14px 28px', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', boxShadow: '0 8px 16px rgba(37, 211, 102, 0.2)' }}
                >
                  <WhatsappIcon size={20} color="#fff" />
                  Explore Packages
                </motion.a>
              </div>
            </div>
            
            {/* Creative Image Design */}
            <div className="ladies-gym-banner-image-wrapper">
              {/* Decorative accent behind */}
              <div style={{ position: 'absolute', top: -15, right: -15, width: '100%', height: '100%', borderRadius: '150px 150px 20px 20px', border: '2px dashed var(--accent-purple)', opacity: 0.3 }}></div>
              <div style={{ position: 'absolute', bottom: -15, left: -15, width: '100%', height: '100%', borderRadius: '150px 150px 20px 20px', background: 'var(--accent-gold)', opacity: 0.15 }}></div>
              
              {/* Main Image */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '150px 150px 20px 20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', zIndex: 2 }}>
                <img src={ladiesGymImg} alt="Ladies Gym" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>


        {/* --- Gallery --- */}
        <section id="gallery" style={{ background: 'var(--bg-secondary)', padding: '140px 0' }}>
          <div className="container">
            <SectionHeader eyebrow="GALLERY" title="Luxe Beauty Gallery" description="Explore our portfolio of beauty transformations and stunning results." />
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gallery-item"
                >
                  <img src={img} alt={`Gallery image ${i + 1}`} />
                </motion.div>
              ))}
            </div>
            <div className="section-actions">
              <a className="button" href="gallery.html">View All Images</a>
            </div>
          </div>
        </section>


        {/* --- Process Section --- */}
        <section id="process" className="container" style={{ padding: '140px 0', position: 'relative' }}>
          <SectionHeader 
            eyebrow="HOW IT WORKS" 
            title="Just Three Easy Steps" 
            description="The beauty process is effortless and elegant, with every step designed to make your appointment feel luxurious and seamless." 
          />
          <div className="process-steps-row">
            {/* Animated Connection Lines (Visible on Desktop) */}
            <div className="process-line-desktop" style={{ position: 'absolute', top: '55%', left: '15%', right: '15%', height: '120px', zIndex: 0, transform: 'translateY(-50%)', pointerEvents: 'none' }}>
               <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                 <motion.path 
                    d="M 0,10 C 25,-10 25,30 50,10 C 75,-10 75,30 100,10"
                    fill="none"
                    stroke="var(--accent-purple)" 
                    strokeWidth="0.5" 
                    strokeDasharray="1.5 1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                 />
                 <motion.path 
                    d="M 0,10 C 25,30 25,-10 50,10 C 75,30 75,-10 100,10"
                    fill="none"
                    stroke="var(--accent-gold)" 
                    strokeWidth="0.5" 
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
                 />
               </svg>
            </div>

            {processSteps.map((step, idx) => (
              <motion.div 
                className="step-box" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="step-header">{step.num}</div>
                <h3 className="serif-text">{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
          
          {/* --- Brand Logos Marquee --- */}
          <div className="logos-marquee">
            <div className="marquee-track">
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               
               {/* Duplicated for infinite effect */}
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
               <img src={logoImg} alt="Capiello" className="marquee-logo-img" />
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="testimonials-bg">
          <div className="container">
            <SectionHeader
              eyebrow="TESTIMONIALS"
              title="Clients Love Their Transformation"
              description="Hear directly from our clients about how our beauty and wellbeing services helped them feel confident, calm, and radiant."
            />
            <div className="testimonials-scroll" ref={testimonialsRef}>
              {testimonials.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="customer-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                    <User size={24} color="var(--accent-purple)" />
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    “{item.text}”
                  </p>
                  <div style={{ marginTop: '16px' }}>
                    <h4 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{item.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="footer" style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', padding: '100px 0 60px' }}>
          <div className="container">
            <div className="footer-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <Logo />
                </div>
                <p style={{ opacity: 0.7, maxWidth: '300px' }}>
                  Capiello Beauty Lounge: Where professionalism meets pure elegance. Available for salon and luxury home services.
                </p>
              </div>
              <div>
                <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Sitemap</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7 }}>
                  <a href="#about">About</a>
                  <a href="services.html">Services</a>
                  <a href="gallery.html">Gallery</a>
                  <a href="contact.html">Contact</a>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.7 }}>
                  <p style={{ margin: 0 }}>capiellobeautylounge78@gmail.com</p>
                  <p style={{ margin: 0 }}>+91 984 690 4164 (Gents)</p>
                  <p style={{ margin: 0 }}>+91 894 378 0108 (Ladies)</p>
                  <p style={{ margin: 0 }}>Pandikkad, Kerala 676521</p>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Connect</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="https://www.facebook.com/share/1GqV4CSm1G/" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook /></a>
                  <a href="https://www.instagram.com/capiello_beauty_lounge_?igsh=MWszMDZxYmpvNm9kcA==" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram /></a>
                  <a href="https://youtube.com/@sidhiquecapiello?si=nVNxVwySOICFMF0f" target="_blank" rel="noopener noreferrer" className="social-link"><Youtube /></a>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', opacity: 0.5, fontSize: '0.9rem' }}>
              <p>© 2026 Capiello Beauty Lounge. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--accent-purple)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 999
              }}
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
