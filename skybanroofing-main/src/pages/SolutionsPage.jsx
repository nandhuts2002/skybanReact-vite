import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    id: 'gutters',
    title: 'uPVC Rain Gutters',
    desc: 'Our high-performance uPVC rain gutters are designed for the heaviest tropical rains. They feature a leak-proof interlocking system, UV stabilization for long life, and high-flow capacity to protect your building foundation.',
    features: ['Leak Proof Joints', 'UV Stabilized Material', 'High Flow Capacity', 'Low Maintenance'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ventilation',
    title: 'Roof Ventilation',
    desc: 'Maintain a cool and healthy indoor environment with our advanced ridge venting and turbine systems. Designed to exhaust hot air and prevent moisture buildup in the roof cavity.',
    features: ['Natural Airflow', 'Heat Reduction', 'Moisture Control', 'Quiet Operation'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function SolutionsPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#0a1118', color: 'white' }}>
      {/* Header */}
      <section style={{ padding: '60px 24px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Total Protection</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px, 6vw, 64px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Advanced Drainage &<br />Ventilation Solutions
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Protect your home from the top down. Our integrated solutions ensure perfect water management and optimal thermal comfort.
          </p>
        </motion.div>
      </section>

      {/* Solutions List */}
      <section style={{ padding: '0 24px 120px', maxWidth: '1200px', margin: '0 auto' }}>
        {solutions.map((sol, i) => (
          <div key={sol.id} style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '60px', 
            alignItems: 'center',
            marginBottom: '100px',
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
          }}>
            <motion.div {...fadeUp(0.1)} style={{ order: i % 2 === 0 ? 1 : 2 }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '20px' }}>{sol.title}</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>{sol.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {sol.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#cfa25d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeUp(0.2)} 
              style={{ 
                order: i % 2 === 0 ? 2 : 1,
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <img src={sol.image} alt={sol.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section style={{ background: '#f4f1ec', padding: '100px 24px', color: '#0a0a0a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div {...fadeUp()}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '38px', fontWeight: 700, marginBottom: '20px' }}>Need a complete solution?</h2>
            <p style={{ fontSize: '18px', color: '#555', marginBottom: '40px' }}>Our engineers can design a custom drainage and ventilation plan for your building.</p>
            <button
              onClick={() => window.location.href = '/skybanroofing/contact'}
              style={{
                background: '#0a0a0a',
                color: 'white',
                border: 'none',
                padding: '18px 48px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              CONTACT SPECIALIST
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
