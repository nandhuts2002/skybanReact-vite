import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const collections = [
  {
    id: 'shake', title: 'Shake Collection', subtitle: 'TRADITIONAL', image: `${import.meta.env.BASE_URL}premium_shake_roof.png`,
    tagline: 'Rustic Charm. Modern Strength.',
    desc: 'Deep-ribbed profiles inspired by wood-grain shake with proprietary mineral stone-coat finish for lasting colour and weather resistance.',
    colors: ['Ashwood', 'Brown Bark', 'Cedar', 'Charcoal'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.5 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'classic', title: 'Classic Collection', subtitle: 'TIMELESS', image: `${import.meta.env.BASE_URL}premium_classic_roof.png`,
    tagline: 'Bold Lines. Timeless Appeal.',
    desc: 'Strong, clean lines and smooth curves for a polished contemporary look with the full durability of stone-coated steel.',
    colors: ['Slate Blue', 'Midnight', 'Graphite', 'Walnut'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.2 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'bond', title: 'Bond Collection', subtitle: 'MODERN', image: `${import.meta.env.BASE_URL}premium_bond_roof.png`,
    tagline: 'Minimal Profile. Maximum Strength.',
    desc: 'Low-profile interlocking tile system perfect for contemporary architecture and flat-facade commercial builds.',
    colors: ['Pearl White', 'Terracotta', 'Obsidian', 'Sand'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '200 kph' }, { label: 'Weight', value: '6.8 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'shingle', title: 'Shingle Collection', subtitle: 'ELEGANT', image: `${import.meta.env.BASE_URL}premium_shingle_roof.png`,
    tagline: 'Traditional Aesthetic. Lasting Durability.',
    desc: 'Replicating the look of dimensional asphalt shingles but constructed from high-tensile stone-coated steel.',
    colors: ['Bark', 'Charcoal', 'Forest', 'Autumn'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.0 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'roman', title: 'Roman Collection', subtitle: 'MEDITERRANEAN', image: `${import.meta.env.BASE_URL}premium_roman_roof.png`,
    tagline: 'Classic Beauty. Ultimate Protection.',
    desc: 'The distinctive curve of authentic Mediterranean clay tiles, but much lighter and completely storm-proof.',
    colors: ['Terracotta', 'Sand', 'Tuscany', 'Rustic'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '200 kph' }, { label: 'Weight', value: '7.4 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a1118', overflowX: 'hidden' }}>
      {/* ── Header Section ── */}
      <section style={{ padding: '80px 24px 40px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Our Collections</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>Masterpieces<br />in Steel</h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>100% waterproof, earthquake safe, fire resistant, engineered to outlast the elements.</p>
        </motion.div>
      </section>

      {/* ── Scrollable Collections ── */}
      <section style={{ padding: '0 0 100px', position: 'relative' }}>
        <div 
          className="no-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '40px', 
            overflowX: 'auto', 
            padding: '40px 10vw',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab'
          }}
        >
          {collections.map((col, index) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                minWidth: 'min(85vw, 900px)',
                scrollSnapAlign: 'center',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '0',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
            >
              {/* Image side */}
              <div style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <img 
                  src={col.image} 
                  alt={col.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to right, transparent, rgba(10,17,24,0.4))' 
                }} />
              </div>

              {/* Content side */}
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '12px' }}>{col.subtitle}</p>
                <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(28px,4vw,40px)', color: 'white', marginBottom: '12px' }}>{col.title}</h2>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#cfa25d', marginBottom: '20px', fontStyle: 'italic', opacity: 0.9 }}>{col.tagline}</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '32px' }}>{col.desc}</p>
                
                {/* Specs Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                  {col.specs.map((s) => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 16px' }}>
                      <p style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</p>
                      <p style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, color: 'white' }}>{s.value}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <motion.button 
                    onClick={() => navigate('/contact')} 
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(207,162,93,0.3)' }} 
                    whileTap={{ scale: 0.95 }} 
                    style={{ 
                      background: 'linear-gradient(135deg,#cfa25d,#b88c4b)', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '9999px', 
                      padding: '14px 32px', 
                      fontFamily: 'Inter', 
                      fontWeight: 700, 
                      fontSize: '14px', 
                      cursor: 'pointer' 
                    }}
                  >
                    Request a Sample →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
          {collections.map((_, i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(207,162,93,0.3)' }} />
          ))}
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
