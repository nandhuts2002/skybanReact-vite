import React from 'react';
import { motion } from 'framer-motion';



const milestones = [
  { year: '1998', event: 'Founded in Melbourne, Australia with a vision for premium steel roofing.' },
  { year: '2004', event: 'Achieved ISO 9001 accreditation and expanded across Southeast Asia.' },
  { year: '2011', event: 'Launched the award-winning Shake Collection, now our bestseller.' },
  { year: '2018', event: 'Surpassed 10,000 homes protected across 12 countries.' },
  { year: '2024', event: 'Introduced the next-gen stone-coat bonding technology.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>

      {/* ── Hero Banner ── */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Our Story</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Built on Trust,<br />Forged in Steel
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
            Since 1998, Skyban has set the benchmark for stone-coated steel roofing — combining artisan craftsmanship with aerospace-grade materials.
          </p>
        </motion.div>
      </section>

      {/* ── Gold divider ── */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,162,93,0.4), transparent)', maxWidth: '800px', margin: '0 auto' }} />

      {/* ── Timeline ── */}
      <section style={{ padding: '80px 24px', maxWidth: '780px', margin: '0 auto' }}>
        <motion.p {...fadeUp()} style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}>Our Journey</motion.p>
        {milestones.map((m, i) => (
          <motion.div key={i} {...fadeUp(i * 0.1)} style={{ display: 'flex', gap: '28px', marginBottom: '40px', alignItems: 'flex-start' }}>
            <div style={{ minWidth: '64px', fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '20px', color: '#cfa25d' }}>{m.year}</div>
            <div style={{ flex: 1, borderLeft: '2px solid rgba(207,162,93,0.2)', paddingLeft: '24px' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{m.event}</p>
            </div>
          </motion.div>
        ))}
      </section>


    </div>
  );
}
