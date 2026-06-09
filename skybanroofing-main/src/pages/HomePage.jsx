import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import VideoBackground from '../components/VideoBackground';

export default function HomePage() {
  return (
    <>
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Testimonials />
        <Features />
      </div>
    </>
  );
}
