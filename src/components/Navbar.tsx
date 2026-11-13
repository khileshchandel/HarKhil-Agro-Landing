import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sprout } from 'lucide-react';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Ventures', path: '/products-ventures' },
    { name: 'R&D', path: '/innovation-research' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-50/90 backdrop-blur-md border-b border-warm-200/80 shadow-sm py-3'
          : 'bg-warm-50/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-forest-900 border border-gold-500/30 flex items-center justify-center text-nature-300 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Sprout className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-forest-900 flex items-center gap-1.5">
                HarKhil <span className="text-nature-600 font-sans font-semibold text-lg">Agro</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-warm-500 font-medium">
                A Division of HarKhil
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-forest-900 bg-nature-100/60 font-semibold'
                      : 'text-warm-800 hover:text-forest-900 hover:bg-warm-100/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/contact" variant="primary" size="sm">
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-forest-900 hover:bg-warm-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-warm-200/80 bg-warm-50/98 backdrop-blur-xl rounded-2xl px-3 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-nature-100 text-forest-900 font-semibold'
                        : 'text-warm-800 hover:bg-warm-100 hover:text-forest-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-warm-200/60 flex flex-col gap-2">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

