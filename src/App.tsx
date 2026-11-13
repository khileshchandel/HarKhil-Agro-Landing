import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { ProductsVentures } from './pages/ProductsVentures';
import { InnovationResearch } from './pages/InnovationResearch';
import { Marketplace } from './pages/Marketplace';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Button } from './components/UI';
import { Sprout } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 px-4 text-center">
      <div className="max-w-md space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center mx-auto mb-6">
          <Sprout className="w-8 h-8" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-nature-600 block">
          404 Error
        </span>
        <h1 className="font-serif text-3xl font-bold text-forest-900">
          Page Not Located
        </h1>
        <p className="text-sm text-warm-700 leading-relaxed">
          The requested page or directory does not exist or has been relocated within the HarKhil Agro portal.
        </p>
        <div className="pt-4">
          <Button to="/" variant="primary" size="md">
            <span>Return to Homepage</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-warm-50 text-warm-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products-ventures" element={<ProductsVentures />} />
            <Route path="/innovation-research" element={<InnovationResearch />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/shop" element={<Navigate to="/marketplace" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
