import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '@/utils/helpers';
import MegaMenu from './MegaMenu';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products', hasDropdown: true },
    { label: 'Industries', path: '/industries' },
    { label: 'Quality', path: '/quality' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark/90 backdrop-blur-xl border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo/image.png"
              alt="Industrial Chain & Hardware Logo"
              className="h-12 w-auto object-contain rounded-lg ring-1 ring-gray-700/50"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = '1';
                  img.src = '/images/logo/logiTCL.jpeg';
                }
              }}
            />
            <div className="hidden sm:block">
              <span className="text-sm font-display font-semibold block leading-tight text-white">
                Industrial Chain
              </span>
              <span className="text-xs font-body text-gray-400">
                & Hardware
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                {link.hasDropdown && isProductsOpen && (
                  <MegaMenu onClose={() => setIsProductsOpen(false)} />
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm font-body font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">WhatsApp Us</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-body font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-body text-gray-400"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full mt-2">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
