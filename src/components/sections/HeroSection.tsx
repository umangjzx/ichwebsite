import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/utils/helpers';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-dark">
      {/* Ambient glow effects */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-body font-semibold mb-8"
            >
              <Zap className="h-4 w-4" />
              25+ Years of Manufacturing Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6"
            >
              Total industrial{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                solutions under one roof
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-body text-gray-400 mb-10 leading-relaxed"
            >
              Your trusted partner for high-performance roller chains, sprockets, couplings, and lifting solutions. Engineered for durability and manufactured to ISO standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="shadow-lg shadow-primary/25" icon={<ArrowRight className="h-5 w-5" />}>
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/products">
                <Button variant="outlined" size="lg" className="border-gray-600 text-gray-200 hover:bg-white/5 hover:border-gray-400">
                  Explore Products
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-body font-medium text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">ISO Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">PAN India Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Custom Solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-700/50 bg-gray-900 p-2 w-full max-w-lg mx-auto">
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10" />
                <img
                  src="/images/roller chains/Duplex chains.jpeg"
                  alt="Industrial Duplex Chain"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50">
                    <p className="text-sm font-display font-bold text-white">Heavy-Duty Chains</p>
                    <p className="text-xs font-body text-gray-400">Built for extreme loads</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gray-900 p-4 rounded-xl shadow-xl shadow-black/30 border border-gray-700/50 flex items-center gap-4 z-30"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-body text-gray-500 uppercase tracking-wider font-semibold">Quality Assured</p>
                <p className="text-sm font-display font-bold text-white">100% Tested</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;