import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';

const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = activeCategory === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#0a1118', color: 'white' }}>
      {/* Header */}
      <section style={{ padding: '60px 24px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Project Showcase</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 64px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Roofs That Define<br />Architectural Excellence
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Explore our portfolio of premium roofing installations across South India. From luxury villas to commercial complexes.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '0 24px 60px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            {...fadeUp(0.1 + i * 0.05)}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? '#cfa25d' : 'transparent',
              color: activeCategory === cat ? '#0a0a0a' : 'white',
              border: `1.5px solid ${activeCategory === cat ? '#cfa25d' : 'rgba(255,255,255,0.2)'}`,
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            whileHover={{ scale: 1.05, borderColor: '#cfa25d' }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '0 24px 120px', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div 
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '24px' 
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  position: 'relative', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  pointerEvents: 'none'
                }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#cfa25d', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{item.location}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{item.product} • {item.colour}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'rgba(207,162,93,0.05)', textAlign: 'center', borderTop: '1px solid rgba(207,162,93,0.1)' }}>
        <motion.div {...fadeUp()}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '32px', marginBottom: '20px' }}>Inspired by these projects?</h2>
          <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>Let's discuss how we can elevate your property with Skyban roofing.</p>
          <button
            onClick={() => window.location.href = '/skybanroofing/contact'}
            style={{
              background: '#cfa25d',
              color: '#0a0a0a',
              border: 'none',
              padding: '16px 40px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              borderRadius: '999px',
              cursor: 'pointer'
            }}
          >
            GET A FREE QUOTE
          </button>
        </motion.div>
      </section>
    </div>
  );
}
