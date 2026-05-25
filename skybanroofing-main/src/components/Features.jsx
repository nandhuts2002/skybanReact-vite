import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import RoofingLayers from './RoofingLayers';


const BASE = import.meta.env.BASE_URL;

/* ── Existing products (real, no dummies) ───────────────────────── */
const collections = [
  {
    id: 'shake',
    name: 'Shake Collection',
    tag: 'TRADITIONAL',
    image: `${BASE}shake_collection.png`,
    bullets: ['Deep-ribbed profiles', 'Visual contrast & shadow lines', 'Weather resistant', 'Lightweight'],
  },
  {
    id: 'classic',
    name: 'Classic Collection',
    tag: 'TIMELESS',
    image: `${BASE}classic_collection.png`,
    bullets: ['Smooth flowing curves', 'Bold timeless lines', 'High durability', 'Universal appeal'],
  },
  {
    id: 'bond',
    name: 'Bond Collection',
    tag: 'MODERN',
    image: `${BASE}bond_collection.png`,
    bullets: ['Low-profile interlocking system', 'Contemporary architecture', 'Secure & watertight fit', 'Commercial grade'],
  },
  {
    id: 'shingle',
    name: 'Shingle Collection',
    tag: 'ELEGANT',
    image: `${BASE}shingle_collection.png`,
    bullets: ['Asphalt shingle look', 'Stone-coated steel', 'High-tensile strength', 'Elegant finish'],
  },
  {
    id: 'roman',
    name: 'Roman Collection',
    tag: 'MEDITERRANEAN',
    image: `${BASE}roman_collection.png`,
    bullets: ['Mediterranean clay tile look', 'Distinctive curved profile', 'Storm-proof', 'Lightweight'],
  },
];

const featuredCategories = [
  {
    id: 'roofing',
    title: 'STONE COATED ROOFING TILES',
    image: `${BASE}premium_shingle_roof.png`,
    bullets: [
      'Elegant, Strong, Silent.',
      'Lightweight & Durable',
      'Weather Resistant',
      'Variety of Colours & Styles'
    ],
    path: '/products'
  },
  {
    id: 'gutters',
    title: 'uPVC RAIN GUTTERS',
    image: `${BASE}factory.png`, // Use local asset instead of placeholder
    bullets: [
      'High Flow Capacity',
      'Leak Proof System',
      'UV Stabilized',
      'Low Maintenance'
    ],
    path: '/solutions'
  }
];

/* Project images using existing assets */
const projects = [
  { img: `${BASE}hero_bg_sunset_mansion.png`, label: 'Luxury Villa, Kerala' },
  { img: `${BASE}premium_shake_roof.png`, label: 'Modern Home, Bangalore' },
  { img: `${BASE}premium_classic_roof.png`, label: 'Contemporary Residence, Kochi' },
  { img: `${BASE}premium_bond_roof.png`, label: 'Premium Villa, Hyderabad' },
  { img: `${BASE}premium_roman_roof.png`, label: 'Mediterranean Villa, Goa' },
  { img: `${BASE}premium_shingle_roof.png`, label: 'Coastal Mansion, Chennai' },
];

const whyFeatures = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, title: 'Superior Durability', desc: 'Built to withstand harsh weather and time.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, title: 'Lightweight & Strong', desc: 'Easy to install, strong enough to last.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>, title: 'Heat & Sound Insulation', desc: 'Keep your home cooler and quieter.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>, title: 'Low Maintenance', desc: 'Long-lasting performance with minimal care.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>, title: 'Wide Range of Designs', desc: 'Styles and colors to match every architecture.' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>, title: 'Eco Friendly', desc: 'Sustainable materials for a better tomorrow.' },
];

/* ─────────────────────────────────────────────────────────────── */

const Features = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // autoPlay

  const fadein = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <div style={{ fontFamily: 'Inter' }}>

      {/* ══════════════════════════════════════════════════════════════
          1. OUR PRODUCTS — left text | right: featured tile images
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) clamp(24px,6vw,100px)' }}>
        <div className="products-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left: text */}
          <motion.div {...fadein(0)}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '18px' }}>Our Products</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.25, marginBottom: '20px' }}>
              Roofing &amp; Gutter Solutions<br/>Designed for <span style={{ color: '#cfa25d' }}>Excellence</span>
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 400, color: '#666', lineHeight: 1.75, marginBottom: '36px', maxWidth: '380px' }}>
              High performance roofing tiles and uPVC rain gutters that combine strength, style and long lasting protection.
            </p>
          </motion.div>

          {/* Right: two main category cards */}
          <div className="featured-cards-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {featuredCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                {...fadein(0.1 + i * 0.12)}
                style={{
                  background: '#fcfcfc',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.4s ease',
                }}
                whileHover={{ y: -8, boxShadow: '0 25px 60px rgba(0,0,0,0.12)' }}
                onClick={() => navigate(cat.path)}
              >
                {/* Image Container with Badge */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  {/* Badge Icon (Gold Circle) */}
                  <div style={{
                    position: 'absolute', bottom: '0', left: '24px', transform: 'translateY(50%)',
                    background: '#cfa25d', borderRadius: '50%', width: '48px', height: '48px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(207,162,93,0.4)', zIndex: 2
                  }}>
                    {cat.id === 'roofing' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 16h.01M12 16h.01M16 16h.01M12 20h.01M8 20h.01M16 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '40px 24px 32px' }}>
                  <h3 style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    color: '#0a0a0a', 
                    marginBottom: '16px',
                    letterSpacing: '0.5px',
                    lineHeight: 1.3
                  }}>
                    {cat.title}
                  </h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {cat.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#444' }}>
                        {/* Checkmark Icon */}
                        <div style={{ 
                          width: '16px', height: '16px', borderRadius: '50%', background: '#cfa25d', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={e => { e.stopPropagation(); navigate(cat.path); }}
                    style={{
                      background: '#0a0a0a', color: 'white', border: 'none',
                      padding: '12px 24px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
                      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
                      textTransform: 'uppercase', transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.color = '#0a0a0a'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = 'white'; }}
                  >
                    VIEW DETAILS <span style={{ fontSize: '14px', transition: 'transform 0.3s' }}>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. ABOUT SKYBAN — video left | text + stats right
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#0c0c0c', padding: 'clamp(64px,8vw,120px) clamp(24px,6vw,100px)' }}>
        <div className="about-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Left: video */}
          <motion.div {...fadein(0)} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-8px', border: '1px solid rgba(255,255,255,0.08)', zIndex: 0 }} />
            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', zIndex: 1 }}>
              <video
                ref={videoRef}
                src={`${BASE}skyban-bg-full.mp4`}
                poster={`${BASE}premium_shingle_roof.png`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                autoPlay muted loop playsInline
              />

            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div {...fadein(0.15)}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>About Skyban</p>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: 'white', lineHeight: 1.25, marginBottom: '20px' }}>
              Building Roofs.<br/><span style={{ color: '#cfa25d' }}>Building Trust.</span>
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(255,255,255,0.58)', lineHeight: 1.8, marginBottom: '40px' }}>
              Skyban Roofing Systems is committed to delivering innovative, long-lasting and aesthetically superior roofing solutions. With advanced technology and strict quality standards, we ensure every roof we build stands tall for generations.
            </p>

            {/* Stats */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px' }}>
              {[
                { value: '20+', label: 'Years of\nExcellence' },
                { value: '1000+', label: 'Projects\nCompleted' },
                { value: '500+', label: 'Happy\nCustomers' },
                { value: '100%', label: 'Quality\nAssurance' },
              ].map((stat, i) => (
                <div key={i} className="stat-item" style={{
                  textAlign: 'center',
                  padding: '0 12px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#cfa25d', lineHeight: 1, marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, whiteSpace: 'pre-line', letterSpacing: '0.3px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ══════════════════════════════════════════════════════════════
          2.5 ROOFING LAYERS — Interactive Exploded View
          ══════════════════════════════════════════════════════════════ */}
      <RoofingLayers />


      {/* ══════════════════════════════════════════════════════════════
          3. WHY CHOOSE SKYBAN — title left | desc right | 6-feature grid
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) clamp(24px,6vw,100px)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* Header row */}
          <div className="why-header-grid" style={{ marginBottom: '56px', maxWidth: '800px' }}>
            <motion.div {...fadein(0)}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Why Choose Skyban</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.25, marginBottom: '20px' }}>
                Engineered for <span style={{ color: '#cfa25d' }}>Strength.</span><br/>
                Designed for <span style={{ color: '#cfa25d' }}>Beauty.</span>
              </h2>
            </motion.div>
            <motion.p {...fadein(0.1)} style={{ fontSize: '15px', fontWeight: 400, color: '#666', lineHeight: 1.8 }}>
              We combine advanced technology with premium materials to deliver roofing solutions that enhance the beauty and value of your property.
            </motion.p>
          </div>

          {/* 6-feature grid */}
          <div className="why-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px' }}>
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                {...fadein(0.06 * i)}
                style={{
                  padding: '28px 20px', background: '#f9f9f9',
                  borderBottom: '3px solid transparent',
                  transition: 'all 0.35s', cursor: 'default',
                }}
                whileHover={{ borderBottomColor: '#cfa25d', background: '#fff', boxShadow: '0 12px 30px rgba(0,0,0,0.07)' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{f.icon}</div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0a0a0a', letterSpacing: '0.3px', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ fontSize: '13px', fontWeight: 400, color: '#777', lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. OUR PROJECTS — dark bg, 4 image cards
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#0c0c0c', padding: 'clamp(64px,8vw,120px) clamp(24px,6vw,100px)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <motion.div {...fadein(0)}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '10px' }}>Our Projects</p>
              <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 700, color: 'white' }}>
                Roofs That Define Perfection
              </h2>
            </motion.div>
            <motion.button
              {...fadein(0.1)}
              onClick={() => navigate('/gallery')}
              style={{
                background: 'transparent', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.25)',
                padding: '13px 28px', fontSize: '12px', fontWeight: 700,
                letterSpacing: '2px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#cfa25d'; e.currentTarget.style.color = '#cfa25d'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'white'; }}
            >
              VIEW ALL PROJECTS <span>→</span>
            </motion.button>
          </div>

          {/* Project grid */}
          <div className="projects-grid hide-scrollbar" style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '24px',
            paddingBottom: '24px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                {...fadein(0.08 * i)}
                style={{ 
                  flex: '0 0 auto',
                  width: 'clamp(280px, 30vw, 380px)',
                  position: 'relative', 
                  overflow: 'hidden', 
                  cursor: 'pointer', 
                  aspectRatio: '4/3',
                  scrollSnapAlign: 'start'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={proj.img}
                  alt={proj.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                  padding: '24px 16px 16px',
                }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'white', letterSpacing: '0.3px' }}>{proj.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. READY TO ELEVATE — CTA
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f4f1ec', padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,100px)' }}>
        <div className="cta-grid" style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <motion.div {...fadein(0)} style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.25, marginBottom: '16px' }}>
              Ready to elevate<br/>your roof?
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 400, color: '#555', lineHeight: 1.75, maxWidth: '400px' }}>
              Get expert advice and the best roofing solution for your home or project.
            </p>
          </motion.div>
          <motion.div {...fadein(0.1)} style={{ flexShrink: 0 }}>
            <button
              onClick={() => navigate('/quote')}
              style={{
                background: '#cfa25d', color: '#0a0a0a', border: 'none',
                padding: '16px 32px', fontSize: '13px', fontWeight: 700,
                letterSpacing: '2px', cursor: 'pointer', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b88c4b'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(207,162,93,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              GET A FREE QUOTE <span style={{ fontSize: '15px' }}>→</span>
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Features;
