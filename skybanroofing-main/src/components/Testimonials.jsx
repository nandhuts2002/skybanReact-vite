import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Kochi, Kerala",
    service: "Premium Roofing Installation",
    rating: 5,
    text: "Skyban completely transformed our villa's roof. The quality of the stone-coated tiles is exceptional, and their installation team was highly professional and completed the project ahead of schedule."
  },
  {
    name: "Priya Menon",
    location: "Trivandrum, Kerala",
    service: "Waterproofing Solutions",
    rating: 5,
    text: "We had persistent leak issues during the monsoons until we hired Skyban. Their waterproofing service is truly top-tier. It's been two years, and our building remains perfectly dry."
  },
  {
    name: "Mohammed Tariq",
    location: "Kozhikode, Kerala",
    service: "uPVC Rain Gutter System",
    rating: 5,
    text: "The uPVC rain gutters installed by Skyban blend seamlessly with our home's design while handling the heavy Kerala rains effortlessly. Excellent service and highly durable products."
  },
  {
    name: "Anita Varghese",
    location: "Thrissur, Kerala",
    service: "Roof Ventilation System",
    rating: 5,
    text: "Installing Skyban's roof ventilation significantly reduced our indoor temperature during summer. The quality of work and attention to detail by their crew was fantastic."
  },
  {
    name: "Jacob Thomas",
    location: "Alappuzha, Kerala",
    service: "Commercial Roofing",
    rating: 5,
    text: "We chose Skyban for our new resort project and they delivered beyond expectations. The premium roofing materials gave our property the perfect aesthetic appeal."
  },
  {
    name: "Lakshmi Nair",
    location: "Palakkad, Kerala",
    service: "Complete Roof Renovation",
    rating: 5,
    text: "Our old roof was completely renovated with modern stone-coated tiles. Skyban handled everything from dismantling to the final touch-ups with incredible professionalism."
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Years Experience" },
  { value: "Kerala-Wide", label: "Service Coverage" }
];

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#cfa25d" stroke="#cfa25d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Testimonials = () => {
  return (
    <section
      className="relative w-full bg-[#1f314a] section-fade visible"
      style={{ padding: '120px 0 140px' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle top/bottom divider lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,162,93,0.25), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,162,93,0.25), transparent)' }} />

      {/* ── Header ── lives inside a padded, centred container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        <div className="text-center" style={{ marginBottom: '72px' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '5px',
              color: '#cfa25d',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Italiana',
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '28px'
            }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'Inter',
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.75
            }}
          >
            Trusted by homeowners, businesses, and property developers across Kerala for over two decades.
          </motion.p>
        </div>
      </div>

      {/*
        ── Carousel ──
        Intentionally a SIBLING of the padded container above, not a child.
        It spans the full section width and manages its own horizontal padding,
        so cards are never clipped by any ancestor's padding or overflow.
      */}
      <div
        className="hide-scrollbar"
        style={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'visible',
          gap: '24px',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '8px',
          paddingBottom: '40px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          alignItems: 'stretch',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.12 }}
            style={{
              /* Card occupies most of the viewport width on mobile, capped at 480px on desktop */
              flex: '0 0 clamp(280px, calc(100vw - 48px), 480px)',
              width: 'clamp(280px, calc(100vw - 48px), 480px)',
              scrollSnapAlign: 'center',
              background: 'linear-gradient(160deg, #1a2c42 0%, #162233 60%)',
              borderRadius: '20px',
              border: '1.5px solid rgba(255,255,255,0.09)',
              padding: '48px 40px 44px',
              boxShadow: 'none',
              transform: 'scale(1)',
              transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
              cursor: 'default',
              willChange: 'transform',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(207,162,93,0.5)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(207,162,93,0.2)';
              e.currentTarget.style.transform = 'scale(1.035)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Decorative quote */}
            <div style={{ marginBottom: '16px', lineHeight: 1 }}>
              <svg width="44" height="36" viewBox="0 0 44 36" fill="none" aria-hidden="true">
                <text x="0" y="34" fontSize="64" fontFamily="Georgia, serif" fill="#cfa25d" fillOpacity="0.2">"</text>
              </svg>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Quote text */}
            <blockquote style={{ flex: 1, margin: 0, padding: 0 }}>
              <p style={{
                fontFamily: 'Inter',
                fontSize: '15.5px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '40px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
            </blockquote>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '32px' }} />

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1f314a 0%, #0d1e2e 100%)',
                border: '2px solid rgba(207,162,93,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#cfa25d',
                fontFamily: 'Italiana',
                fontSize: '22px',
                fontWeight: 'normal'
              }}>
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {testimonial.name}
                </div>
                <div style={{
                  fontFamily: 'Inter',
                  fontSize: '12.5px',
                  color: '#cfa25d',
                  fontWeight: 600,
                  marginBottom: '2px'
                }}>
                  {testimonial.service}
                </div>
                <div style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)'
                }}>
                  {testimonial.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Scroll hint + Stats ── back inside the padded container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '80px',
            marginTop: '8px'
          }}
        >
          <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.12)' }} />
          <span style={{ fontFamily: 'Inter', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Swipe to explore
          </span>
          <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.12)' }} />
        </motion.div>

        {/* Trust Statistics Row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '72px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '48px 32px',
              textAlign: 'center'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
              >
                <div style={{
                  fontFamily: 'Italiana',
                  fontSize: 'clamp(42px, 5vw, 60px)',
                  color: '#cfa25d',
                  lineHeight: 1,
                  letterSpacing: '-1px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.55)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
