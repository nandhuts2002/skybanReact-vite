import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/skyban-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer id="footer" style={{ position: 'relative', zIndex: 10, background: '#0a0a0a', color: 'rgba(255,255,255,0.65)', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '32px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <img src={logo} alt="Skyban Roofing Systems" style={{ height: '60px', width: 'auto', marginLeft: '-8px' }} />
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

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Solutions</h4>
            {[
              { label: 'Stone Coated Tiles', to: '/products' },
              { label: 'uPVC Rain Gutters', to: '/solutions' },
              { label: 'Roof Ventilation', to: '/solutions' },
              { label: 'Thermal Insulation', to: '/solutions' },
              { label: 'Waterproofing', to: '/solutions' },
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

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Company</h4>
            {[
              { label: 'About Us', to: '#footer' },
              { label: 'Our Process', to: '/services' },
              { label: 'Warranty', to: '/about' },
              { label: 'Certifications', to: '/about' },
              { label: 'Contact Us', to: '#footer' },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '14px' }}>
                <Link
                  to={item.to}
                  style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onClick={(e) => {
                    if (item.to.startsWith('#')) {
                      e.preventDefault();
                      const target = document.getElementById(item.to.substring(1));
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
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
