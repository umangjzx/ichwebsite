import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '@/utils/helpers';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              About Industrial Chain & Hardware
            </h2>
            <p className="font-body text-muted leading-relaxed mb-4">
              Founded in {COMPANY.foundedYear}, Industrial Chain & Hardware has grown from a small industrial supply shop in Coimbatore to one of the most trusted names in power transmission and lifting solutions across India.
            </p>
            <p className="font-body text-muted leading-relaxed mb-4">
              As a manufacturer, supplier, and exporter with {COMPANY.yearsInBusiness}+ years of experience, we offer a comprehensive range of roller chains, sprockets, pulleys, couplings, wire ropes, and lifting equipment. Our commitment to quality, custom manufacturing capability, and PAN India delivery network sets us apart.
            </p>
            <p className="font-body text-muted leading-relaxed mb-6">
              Every product we supply meets international standards — ISO, DIN, ANSI, and Indian Standards — ensuring reliability and performance in the most demanding industrial environments.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
              Know More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
              <div className="text-center">
                <span className="text-6xl font-display font-extrabold text-primary">{COMPANY.yearsInBusiness}+</span>
                <p className="text-lg font-display font-semibold text-secondary mt-2">Years of Excellence</p>
                <p className="text-sm font-body text-muted mt-1">Since {COMPANY.foundedYear}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg shadow-black/20 border border-gray-800">
                  <p className="font-display font-bold text-white">5,000+</p>
                  <p className="text-xs font-body text-gray-400">Happy Customers</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg shadow-black/20 border border-gray-800">
                  <p className="font-display font-bold text-white">1,000+</p>
                  <p className="text-xs font-body text-gray-400">Products</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg shadow-black/20 border border-gray-800">
                  <p className="font-display font-bold text-white">6</p>
                  <p className="text-xs font-body text-gray-400">Product Categories</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg shadow-black/20 border border-gray-800">
                  <p className="font-display font-bold text-white">PAN India</p>
                  <p className="text-xs font-body text-gray-400">Delivery Network</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;