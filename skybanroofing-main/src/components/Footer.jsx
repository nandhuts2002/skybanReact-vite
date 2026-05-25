import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/skyban-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer style={{ position: 'relative', zIndex: 10, background: '#0a0a0a', color: 'rgba(255,255,255,0.65)', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <img src={logo} alt="Skyban Roofing Systems" style={{ height: '60px', width: 'auto' }} />
            </div>
            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', lineHeight: 1.75, maxWidth: '280px', marginBottom: '28px' }}>
              Setting the standard for luxury roofing systems with the unmatched durability of stone-coated steel.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Collections</h4>
            {['Shingle', 'Shake', 'Classic', 'Bond', 'Roman'].map((item) => (
              <div key={item} style={{ marginBottom: '14px' }}>
                <Link
                  to="/products"
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Company</h4>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Process', to: '/services' },
              { label: 'Warranty', to: '/about' },
              { label: 'Certifications', to: '/about' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '14px' }}>
                <Link
                  to={item.to}
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Contact</h4>
            <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              <p>skybanroofing@gmail.com</p>
              <p style={{ marginTop: '8px' }}>+91 9072512777</p>
              <p style={{ marginTop: '8px' }}>Alfa Horizon, Kochi, Kerala - 682504</p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              style={{
                marginTop: '24px',
                background: '#cfa25d',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 24px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#b88c4b'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Request a Sample
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '13px' }}>
            &copy; {currentYear} Skyban Roofing Systems. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#cfa25d')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
