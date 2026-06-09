import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '8px',
  padding: '14px 18px',
  fontFamily: 'Inter',
  fontSize: '14px',
  color: 'white',
  outline: 'none',
  transition: 'all 0.3s ease',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
};

function SkybanMap() {
  return (
    <div
      style={{
        width: '100%',
        height: '450px',
        overflow: 'hidden',
        borderRadius: '12px',
      }}
    >
      <iframe
        title="Skyban Roofing Location"
        src="https://maps.google.com/maps?q=Skyban%20Roofing&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'sample', product: 'shake', message: '' });
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
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a1118', overflowX: 'hidden' }}>
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Start Your<br />Roofing Journey
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Get a free roofing sample from our team. We'll respond within 24 hours.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '20px 24px 100px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Contact Info */}
          <motion.div {...fadeUp(0.1)}>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '28px' }}>Contact Details</h2>
            {[
              { icon: <MapPinIcon />, label: 'Address', value: 'Skyban Roofing, Kochi, Kerala' },
              { icon: <PhoneIcon />, label: 'Phone', value: '+91 9072512777' },
              { icon: <MailIcon />, label: 'Email', value: 'skybanroofing@gmail.com' },
              { icon: <FileTextIcon />, label: 'GSTIN', value: '32BCSPA5611C1Z6' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(207,162,93,0.1)', borderRadius: '50%', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', color: '#cfa25d', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{item.value}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '8px' }}>
              <SkybanMap />
            </div>

            {/* Certifications */}
            <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(207,162,93,0.08)', border: '1px solid rgba(207,162,93,0.2)', borderRadius: '14px' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', color: '#cfa25d', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Certifications</p>
              {['ISO 9001:2015 Certified', 'ASTM E108 Fire Rating Class A', 'AS/NZS 4040 Wind Load Tested', 'UL 790 Compliant'].map((cert) => (
                <p key={cert} style={{ fontFamily: 'Inter', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: '#cfa25d' }}>✓</span> {cert}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.2)}>
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(207,162,93,0.1)', border: '1px solid rgba(207,162,93,0.3)', borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏠</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '24px', color: 'white', marginBottom: '12px' }}>Request Received!</h3>
                <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Thank you for reaching out. Our team will process your request and be in touch within 24 hours.</p>
                <button onClick={() => setStatus('idle')} style={{ marginTop: '24px', background: 'transparent', color: '#cfa25d', border: '1px solid #cfa25d', borderRadius: '9999px', padding: '10px 24px', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Send Another Request</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '48px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '32px' }}>Request a Free Sample</h3>
                
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

                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 000 000 0000' },
                ].map((field) => (
                  <div key={field.key} style={{ marginBottom: '20px' }}>
                    <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(207,162,93,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.14)')}
                  />
                </div>
                <motion.button type="submit" disabled={status === 'loading'} whileHover={{ scale: 1.02, backgroundColor: '#b88c4b' }} whileTap={{ scale: 0.98 }}
                  style={{ width: '100%', background: '#cfa25d', color: '#0a1118', border: 'none', borderRadius: '8px', padding: '16px', fontFamily: 'Inter', fontWeight: 600, fontSize: '15px', letterSpacing: '0.5px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(207, 162, 93, 0.15)', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending...' : 'Submit Request →'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
