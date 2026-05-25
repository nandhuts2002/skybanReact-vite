import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const collections = [
  {
    id: 'shake', title: 'Shake Collection', subtitle: 'TRADITIONAL', image: `${import.meta.env.BASE_URL}premium_shake_roof.png`,
    tagline: 'Rustic Charm. Modern Strength.',
    desc: 'Deep-ribbed profiles inspired by wood-grain shake with proprietary mineral stone-coat finish for lasting colour and weather resistance.',
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.5 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'classic', title: 'Classic Collection', subtitle: 'TIMELESS', image: `${import.meta.env.BASE_URL}premium_classic_roof.png`,
    tagline: 'Bold Lines. Timeless Appeal.',
    desc: 'Strong, clean lines and smooth curves for a polished contemporary look with the full durability of stone-coated steel.',
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.2 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'bond', title: 'Bond Collection', subtitle: 'MODERN', image: `${import.meta.env.BASE_URL}premium_bond_roof.png`,
    tagline: 'Minimal Profile. Maximum Strength.',
    desc: 'Low-profile interlocking tile system perfect for contemporary architecture and flat-facade commercial builds.',
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '200 kph' }, { label: 'Weight', value: '6.8 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'shingle', title: 'Shingle Collection', subtitle: 'ELEGANT', image: `${import.meta.env.BASE_URL}premium_shingle_roof.png`,
    tagline: 'Traditional Aesthetic. Lasting Durability.',
    desc: 'Replicating the look of dimensional asphalt shingles but constructed from high-tensile stone-coated steel.',
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.0 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'roman', title: 'Roman Collection', subtitle: 'MEDITERRANEAN', image: `${import.meta.env.BASE_URL}premium_roman_roof.png`,
    tagline: 'Classic Beauty. Ultimate Protection.',
    desc: 'The distinctive curve of authentic Mediterranean clay tiles, but much lighter and completely storm-proof.',
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '200 kph' }, { label: 'Weight', value: '7.4 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundColor: '#050a0f', 
      backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(207, 162, 93, 0.05), transparent 25%), radial-gradient(circle at 85% 30%, rgba(30, 60, 90, 0.1), transparent 25%)',
      overflowX: 'hidden' 
    }}>
      {/* ── Header Section ── */}
      <section style={{ padding: '80px 24px 80px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div {...fadeUp()}>
          <div style={{ display: 'inline-block', marginBottom: '24px' }}>
            <span style={{ 
              fontFamily: 'Inter', 
              fontWeight: 600, 
              fontSize: '12px', 
              letterSpacing: '4px', 
              color: '#cfa25d', 
              textTransform: 'uppercase', 
              background: 'rgba(207, 162, 93, 0.1)', 
              padding: '8px 16px', 
              borderRadius: '100px',
              border: '1px solid rgba(207, 162, 93, 0.2)'
            }}>
              Premium Selection
            </span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(40px,8vw,80px)', color: 'white', marginBottom: '24px', lineHeight: 1.05, letterSpacing: '-1px' }}>Masterpieces<br />in Steel</h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: '#a0aab5', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>100% waterproof, earthquake safe, fire resistant, engineered to outlast the elements.</p>
        </motion.div>
      </section>

      {/* ── Vertical Collections ── */}
      <section style={{ padding: '0 24px 120px', position: 'relative' }}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '100px', 
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {collections.map((col, index) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, boxShadow: '0 30px 60px -12px rgba(207,162,93,0.1)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                background: 'rgba(15, 20, 25, 0.5)',
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                backdropFilter: 'blur(24px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              {/* Image side */}
              <div style={{ position: 'relative', height: '100%', minHeight: '450px', overflow: 'hidden' }}>
                <motion.img 
                  src={col.image} 
                  alt={col.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                {/* Gradient overlay to blend with content background */}
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(90deg, transparent 60%, rgba(15, 20, 25, 0.5) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Content side */}
              <div style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>{col.subtitle}</p>
                <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(32px,5vw,48px)', color: 'white', marginBottom: '12px', lineHeight: 1.1 }}>{col.title}</h2>
                <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#e3b873', marginBottom: '24px', fontStyle: 'italic', opacity: 0.9 }}>{col.tagline}</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#a0aab5', lineHeight: 1.7, marginBottom: '40px' }}>{col.desc}</p>
                
                {/* Specs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                  {col.specs.map((s) => (
                    <motion.div 
                      key={s.label}
                      whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid rgba(255,255,255,0.04)', 
                        borderRadius: '16px', 
                        padding: '16px 20px',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <p style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 500, color: '#7a8590', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{s.label}</p>
                      <p style={{ fontFamily: 'Inter', fontSize: '15px', fontWeight: 600, color: '#f0f2f5' }}>{s.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <motion.button 
                    onClick={() => navigate('/contact')} 
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 30px rgba(207,162,93,0.3), inset 0 0 15px rgba(207,162,93,0.2)',
                      background: 'rgba(207,162,93,0.15)'
                    }} 
                    whileTap={{ scale: 0.95 }} 
                    style={{ 
                      background: 'rgba(20, 25, 30, 0.4)', 
                      backdropFilter: 'blur(12px)',
                      color: '#e3b873', 
                      border: '1px solid rgba(207, 162, 93, 0.4)', 
                      borderRadius: '9999px', 
                      padding: '16px 36px', 
                      fontFamily: 'Inter', 
                      fontWeight: 600, 
                      fontSize: '15px', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    {/* Subtle sweeping light effect */}
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        transform: 'skewX(-20deg)',
                        zIndex: 0
                      }}
                    />
                    <span style={{ position: 'relative', zIndex: 1, letterSpacing: '0.5px' }}>Request a Sample</span>
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ fontSize: '18px', position: 'relative', zIndex: 1 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
