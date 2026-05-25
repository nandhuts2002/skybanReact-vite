import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '10px',
  padding: '14px 18px',
  fontFamily: 'Inter',
  fontSize: '14px',
  color: 'white',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function QuotePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', size: '', product: 'shake', message: '', type: 'quote' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/xeenlvwo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a1118' }}>
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Project Estimate</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Get a Free<br />Roofing Quote
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Provide your project details below and our team will get back to you with a customized estimate within 24 hours.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '20px 24px 100px', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div {...fadeUp(0.1)}>
          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(207,162,93,0.1)', border: '1px solid rgba(207,162,93,0.3)', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: '12px' }}>Quote Request Received!</h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Thank you for reaching out. Our team will review your project details and be in touch soon.</p>
              <button onClick={() => setStatus('idle')} style={{ marginTop: '24px', background: 'transparent', color: '#cfa25d', border: '1px solid #cfa25d', borderRadius: '9999px', padding: '10px 24px', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Submit Another Quote Request</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: '28px' }}>Project Details</h3>
              
              {status === 'error' && (
                <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.4)', borderRadius: '8px', padding: '16px', marginBottom: '24px', color: '#ffb3b3', fontFamily: 'Inter', fontSize: '14px' }}>
                  Oops! There was a problem submitting your form. Please try again.
                </div>
              )}
              
              {/* Product Interest */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Product Interest</label>
                <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} style={inputStyle}>
                  <option value="shake" style={{ color: 'black' }}>Shake Collection</option>
                  <option value="classic" style={{ color: 'black' }}>Classic Collection</option>
                  <option value="bond" style={{ color: 'black' }}>Bond Collection</option>
                  <option value="shingle" style={{ color: 'black' }}>Shingle Collection</option>
                  <option value="roman" style={{ color: 'black' }}>Roman Collection</option>
                  <option value="undecided" style={{ color: 'black' }}>Not sure yet</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Full Name</label>
                  <input type="text" placeholder="John Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')} />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 0000 000 000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')} />
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Project Location (City/Area)</label>
                  <input type="text" placeholder="Kochi, Kerala" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')} />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Approx. Roof Size (sq ft)</label>
                  <input type="text" placeholder="e.g. 2500" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')} />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Additional Project Details (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project, timeline, or any specific requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
                />
              </div>
              
              <motion.button type="submit" disabled={status === 'loading'} whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(207,162,93,0.45)' }} whileTap={{ scale: 0.97 }}
                style={{ width: '100%', background: 'linear-gradient(135deg,#cfa25d,#b88c4b)', color: 'white', border: 'none', borderRadius: '9999px', padding: '16px', fontFamily: 'Inter', fontWeight: 700, fontSize: '15px', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending Request...' : 'Get My Free Quote →'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
