import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Code, TrendingUp, Search, Layers, Zap, Terminal, Menu, X, Globe, Shield, Cpu, PenTool, TestTube2, Cloud, Users, MessageCircle, Star, Calendar, ArrowUpRight } from 'lucide-react';
import Lenis from 'lenis';
import './index.css';

const services = [
  { icon: <Code size={30} />, title: "Development", desc: "Building cutting-edge mobile apps, web apps, blockchain solutions, and AI applications." },
  { icon: <PenTool size={30} />, title: "Branding & Design", desc: "Creating unique identities and immersive user experiences. Experience unmatched expertise." },
  { icon: <TrendingUp size={30} />, title: "Digital Marketing", desc: "Data-driven marketing to elevate your digital presence and take your business to the next level." },
  { icon: <Search size={30} />, title: "Code Audit", desc: "Comprehensive review to ensure codebase health, security, and top-tier performance." },
  { icon: <Layers size={30} />, title: "Product Strategy", desc: "Strategic planning to transform innovative ideas into reality. Transforming ideas into digital reality." },
  { icon: <TestTube2 size={30} />, title: "Testing", desc: "Rigorous QA to deliver flawless digital products. Rigorous QA and testing for every project." },
  { icon: <Cloud size={30} />, title: "DevOps", desc: "Streamlining operations for scalable and robust performance. Building the future one app at a time." },
  { icon: <Users size={30} />, title: "Staffing", desc: "Providing top-tier talent for your technical teams. 10+ years of market experience." }
];

const cases = [
  { title: "Propmodel", desc: "Propmodel – SaaS Platform", cat: "SaaS", img: "https://sodio.tech/wp-content/uploads/2025/04/propmodel.png" },
  { title: "Nostro", desc: "Nostro – Trading Platform", cat: "Fintech", img: "https://sodio.tech/wp-content/uploads/2024/09/nostro.png" },
  { title: "Truffles", desc: "Truffles – Web3 Banking", cat: "Blockchain", img: "https://sodio.tech/wp-content/uploads/2023/01/Truffles.png" },
  { title: "Fantazy", desc: "Fantazy – Web3 Gaming", cat: "Web3", img: "https://sodio.tech/wp-content/uploads/2022/12/Untitled-design-14.png" },
  { title: "Vermi Organics", desc: "Vermi Organics – Ecommerce Store", cat: "Ecommerce", img: "https://sodio.tech/wp-content/uploads/2022/11/Untitled-design-17.png" },
  { title: "Dexacoin", desc: "Dexacoin – Web3 Social Media", cat: "Web3", img: "https://sodio.tech/wp-content/uploads/2022/10/Untitled-design-18.png" },
];

const testimonials = [
  { name: "Tony Nguyen", role: "Silling Token", content: "Sodio is remarkably creative and professional in their approach. Highly recommend for any digital product development." },
  { name: "Gustav L", role: "Qdos Performance", content: "Their technical expertise in blockchain and AI is unmatched. They delivered exactly what we needed on time." },
  { name: "Sola Ayegbusi", role: "Cash Stash App", content: "The level of dedication and innovation the Sodio team brings to the table is exceptional. A truly digital product partner." }
];

const news = [
  { title: "How to Make an App Like Calm", date: "Jan 3, 2025", cat: "Health Tech", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { title: "How to Make an App Like JEFIT", date: "Jan 3, 2025", cat: "Fitness Tech", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" },
  { title: "How to Make an App Like 7 Minute Workout", date: "Jan 3, 2025", cat: "Fitness Tech", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" },
  { title: "How to Make an App Like Apple Health", date: "Jan 3, 2025", cat: "Fitness Tech", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis for Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <div className="bg-canvas">
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -30, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="blob" style={{ top: '0%', left: '0%', background: 'linear-gradient(135deg, #ff3d00, #7c3aed)', opacity: 0.08 }}
        />
        <motion.div
          animate={{ x: [0, -60, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="blob" style={{ bottom: '10%', right: '0%', background: 'linear-gradient(135deg, #7c3aed, #ff3d00)', opacity: 0.06 }}
        />
        <div className="bg-grid" />
      </div>

      {/* --- Optimized Animated Vector Objects --- */}
      <div className="vector-floating" style={{ top: '10%', right: '5%', zIndex: 1, opacity: 0.2 }}>
        <motion.svg width="180" height="180" viewBox="0 0 200 200" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          <circle cx="100" cy="100" r="80" fill="none" stroke="var(--accent-secondary)" strokeWidth="0.5" strokeDasharray="10 10" />
          <path d="M100 20 L180 180 L20 180 Z" fill="none" stroke="var(--accent-primary)" strokeWidth="1" />
        </motion.svg>
      </div>

      <div className="vector-floating" style={{ bottom: '15%', left: '2%', opacity: 0.3 }}>
        <svg width="400" height="400" viewBox="0 0 400 400">
          <path d="M0 200 C100 100 300 300 400 200" fill="none" stroke="url(#lineGrad)" strokeWidth="1" className="vector-path" />
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-primary)" />
              <stop offset="100%" stopColor="var(--accent-secondary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo">
            <div style={{ width: 40, height: 40, background: '#ff3d00', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <span style={{ fontWeight: 900, fontSize: 22 }}>S</span>
            </div>
            Sodio
          </a>

          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#testimonials">Clients</a></li>
            <li><a href="#blog">Resources</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary desktop-only">Book Free Consultation</a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Work</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Clients</a>
        <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Resources</a>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Book Free Consultation</a>
        </div>
      </div>

      <section id="hero" className="section hero-section" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '15%', left: '50%', width: '600px', height: '600px', background: 'var(--accent-secondary)', filter: 'blur(180px)', opacity: 0.1, borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: 60 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div variants={fadeIn} className="badge-new" style={{ backdropFilter: 'blur(10px)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
              <div style={{ color: '#ff3d00' }}><Zap size={16} fill="currentColor" /></div>
              Pioneering the Digital Frontier
            </motion.div>

            <motion.h1 variants={fadeIn} className="heading-xl">
              <span style={{ opacity: 0.4 }}>Building</span> <br />
              <span className="text-gradient">Digital Success</span> <br />
              <span>With Precision.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.7, margin: '40px 0' }}>
              We partner with forward-thinking enterprises to build robust, scalable digital products. From Blockchain to AI, we transform complexity into seamless user experiences.
            </motion.p>

            <motion.div variants={fadeIn} className="hero-actions" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#contact" className="btn btn-primary hero-btn" style={{ borderRadius: '14px' }}>
                Consult Our Experts <ArrowRight size={20} />
              </a>
              <a href="#portfolio" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 32px', borderRadius: '14px' }}>
                View Success Stories <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-visual-complex desktop-only"
            style={{ position: 'relative' }}
          >
            <div className="glass-panel" style={{ padding: '40px', borderRadius: '40px', position: 'relative', zIndex: 3, background: 'rgba(255,255,255,0.9)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff3d00' }} />
                  <div style={{ width: 30, height: 2, background: 'var(--border-light)' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}> Software Engineering <br /> & Architecture </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
                  <div style={{ background: 'var(--accent-glow)', padding: '15px', borderRadius: '15px' }}>
                    <h4 style={{ color: '#ff3d00', fontSize: '1.6rem' }}>10+</h4>
                    <p style={{ fontSize: '0.7rem', opacity: 0.7 }}>Experience</p>
                  </div>
                  <div style={{ background: 'var(--border-subtle)', padding: '15px', borderRadius: '15px' }}>
                    <h4 style={{ fontSize: '1.6rem' }}>50+</h4>
                    <p style={{ fontSize: '0.7rem', opacity: 0.7 }}>Launched</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', border: '1px solid var(--border-light)', borderRadius: '50%', zIndex: 1, borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', border: '1px solid var(--accent-glow)', borderRadius: '50%', zIndex: 1 }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <div style={{ width: 2, height: 60, background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--accent-primary)' }}>Scroll</span>
        </motion.div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginBottom: 80, textAlign: 'center' }}>
            <h2 className="heading-lg">Our <span className="text-gradient">Core Expertise</span></h2>
            <p className="text-muted" style={{ fontSize: '1.3rem', marginTop: 24, maxWidth: 800, margin: '24px auto 0' }}>
              Tailored digital products built with the latest technologies and a modern approach to software development.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid-creative">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="creative-card">
                <div className="feature-icon-new">{s.icon}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: 16 }}>{s.title}</h3>
                <p className="text-muted">{s.desc}</p>
                <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#ff3d00', marginTop: 24, fontWeight: 700, cursor: 'pointer' }}>
                  Learn More <ChevronRight size={18} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="section" style={{ background: 'rgba(255,112,67,0.03)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="section-header-centered" style={{ marginBottom: 80 }}>
            <h2 className="heading-lg">Selected <span className="text-gradient">Success Stories</span></h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: 24 }}>Exceptional digital products built for innovative companies around the world.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid-creative">
            {cases.map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="creative-card" style={{ padding: 24 }}>
                <div className="showcase-frame">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div style={{ position: 'absolute', top: 20, right: 20, background: '#fff', padding: '6px 16px', borderRadius: 40, fontWeight: 700, fontSize: '0.8rem', color: '#000' }}>
                    {item.cat}
                  </div>
                </div>
                <div style={{ padding: '0 12px 12px' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: 12 }}>{item.title}</h3>
                  <p className="text-muted" style={{ marginBottom: 24 }}>{item.desc}</p>
                  <a href="#" style={{ color: '#ff3d00', fontWeight: 800, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: 1 }}>CASE STUDY —</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 className="heading-lg">What Our <span className="text-gradient">Clients Say</span></h2>
          </motion.div>

          <div className="grid-creative">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel" style={{ textAlign: 'center' }}>
                <div style={{ color: '#ff3d00', display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={20} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: 32, color: 'var(--text-main)', fontWeight: 500 }}>"{t.content}"</p>
                <h4 style={{ fontSize: '1.4rem' }}>{t.name}</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: 4 }}>{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header-centered" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h2 className="heading-lg">Latest <span className="text-gradient">Articles</span></h2>
              <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: 16 }}>Stay updated with the latest in tech and innovation.</p>
            </div>
            <a href="#" className="btn btn-outline" style={{ borderRadius: 12 }}>View All Blogs</a>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid-creative">
            {news.map((item, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -12 }} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="article-img" />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontSize: '0.8rem' }}>
                    <span style={{ color: '#ff3d00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{item.cat}</span>
                    <span className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={12} /> {item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', lineHeight: 1.3, marginBottom: 20 }}>{item.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: 'var(--text-main)', fontSize: '0.9rem' }}>
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="creative-card" style={{ background: '#0f172a', padding: '120px 40px', textAlign: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '70%', height: '160%', background: 'var(--accent-primary)', filter: 'blur(160px)', opacity: 0.2, borderRadius: '50%' }} />
            <h2 className="heading-lg" style={{ color: '#fff', marginBottom: 32 }}>Have a Project in Mind? <br /> Let's build it <span className="text-gradient">together.</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem', maxWidth: 700, margin: '0 auto 56px', lineHeight: 1.6 }}>
              Fill out the form below or reach out to us directly. Our specialist will contact you within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-cta-responsive" style={{ background: '#ff3d00', color: '#fff', border: 'none' }}>
                Book Free Consultation
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff', fontWeight: 600 }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={24} />
                </div>
                Message us on Telegram
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="footer" style={{ padding: '120px 0 60px', borderTop: '1px solid var(--border-subtle)', background: '#f8fafc' }}>
        <div className="container">
          <div className="grid-creative" style={{ gridTemplateColumns: '2fr 1fr 1fr 1.5fr' }}>
            <div>
              <a href="#" className="nav-logo" style={{ marginBottom: 32 }}>
                <div style={{ width: 44, height: 44, background: '#ff3d00', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <span style={{ fontWeight: 900, fontSize: 24 }}>S</span>
                </div>
                Sodio
              </a>
              <p className="text-muted" style={{ maxWidth: 350, lineHeight: 1.8 }}>
                Transforming innovative ideas into cutting-edge digital products since 2014. Building the future one app at a time.
              </p>
              <div style={{ display: 'flex', gap: 24, marginTop: 40, alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.2rem' }}>+91 97400-54621</h4>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h4 style={{ marginBottom: 10, fontSize: '1.2rem' }}>Services</h4>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Development</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Branding & Design</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Testing</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>DevOps</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h4 style={{ marginBottom: 10, fontSize: '1.2rem' }}>Company</h4>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>About us</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Terms & conditions</a>
              <a href="#" className="text-muted" style={{ textDecoration: 'none' }}>Refunds</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h4 style={{ marginBottom: 10, fontSize: '1.2rem' }}>Join Us</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Subscribe to our newsletter for latest tech insights and case studies.</p>
              <div className="newsletter-form" style={{ marginTop: 10 }}>
                <input type="email" placeholder="Email Address" style={{ padding: '16px 20px', borderRadius: 12, border: '1px solid var(--border-light)', width: '100%', outline: 'none' }} />
                <button style={{ position: 'absolute', right: 8, top: 8, bottom: 8, background: '#ff3d00', color: '#fff', border: 'none', padding: '0 20px', borderRadius: 8, fontWeight: 700 }}>Join</button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 120, paddingTop: 40, borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#000', fontWeight: 600 }}>
            <span>© 2025 Sodio Technologies — BlockAI Software Solutions.</span>
            <div style={{ display: 'flex', gap: 40 }}>
              <a href="#" style={{ color: '#000', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Telegram</a>
              <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
