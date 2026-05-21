import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.52 PM (1).jpeg',
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.52 PM (2).jpeg',
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.52 PM (3).jpeg',
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.52 PM.jpeg',
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.53 PM (1).jpeg',
  '/images/brandslogos/WhatsApp Image 2026-05-09 at 12.56.53 PM.jpeg',
];

const BrandMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-dark border-b border-gray-800/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-display font-semibold text-gray-500 uppercase tracking-widest">
          Trusted Brands We Supply
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 items-center px-6"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...brands, ...brands].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandMarquee;
