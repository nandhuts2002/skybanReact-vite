import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import VideoBackground from '../components/VideoBackground';

export default function HomePage() {
  return (
    <>
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Features />
      </div>
    </>
  );
}
