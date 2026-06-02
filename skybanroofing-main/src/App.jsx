import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import RequestCallButton from './components/RequestCallButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import GalleryPage from './pages/GalleryPage';
import SolutionsPage from './pages/SolutionsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <title>Skyban Roofing | Premium Roofing Solutions</title>
        <meta name="description" content="Skyban Roofing provides top-quality roofing solutions, repairs, and installations. Contact us today for a free quote!" />
      </Helmet>


      {/* Floating Animated Call Button */}
      <RequestCallButton />

      {/* Removed video background as requested */}

      {/* Fixed navbar — always visible */}
      <Navbar />

      {/* Scrollable page content above the video */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="/quote"    element={<QuotePage />} />
          <Route path="/gallery"  element={<GalleryPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
