import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '@/utils/helpers';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg ring-1 ring-gray-700/50 bg-gray-900">
                <img src="/images/logo/image.png" alt="Industrial Chain & Hardwares Logo" className="h-12 w-auto object-contain rounded" />
              </div>
              <div>
                <span className="text-sm font-display font-semibold block leading-tight text-white">
                  Industrial Chain
                </span>
                <span className="text-xs font-body text-gray-400">& Hardwares</span>
              </div>
            </div>
            <p className="text-sm font-body text-gray-400 mb-4 leading-relaxed">
              {COMPANY.tagline}. {COMPANY.yearsInBusiness}+ years of manufacturing excellence in industrial chains, sprockets, pulleys, couplings, wire ropes, and lifting equipment.
            </p>
            <p className="text-xs text-gray-500">
              {COMPANY.businessType}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Industries', path: '/industries' },
                { label: 'Quality', path: '/quality' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                { label: 'Roller Chains', path: '/products?category=roller-chains' },
                { label: 'Sprockets', path: '/products?category=sprockets' },
                { label: 'Pulleys', path: '/products?category=pulleys' },
                { label: 'Couplings', path: '/products?category=couplings' },
                { label: 'Wire Ropes', path: '/products?category=wire-ropes' },
                { label: 'Lifting Equipment', path: '/products?category=lifting-equipment' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="text-sm font-body text-gray-400">{COMPANY.address}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm font-body text-gray-400 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm font-body text-gray-400 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-display font-semibold mb-2">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white text-xs font-display font-bold uppercase rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs font-body text-gray-500">
            {COMPANY.serviceRegions}
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
