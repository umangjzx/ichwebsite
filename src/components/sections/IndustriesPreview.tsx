import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';

const IndustriesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto text-lg">
            Our products power critical operations across 9 major industrial sectors in India.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full font-display font-semibold text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 transform hover:-translate-y-1"
              >
                {industry.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/industries" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
            View All Industries <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesPreview;