import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Wrench, Boxes, Truck, DollarSign, HeadphonesIcon, ArrowRight } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Premium Quality', description: 'Products manufactured to ISO, DIN, and ANSI standards with rigorous quality testing.' },
  { icon: Wrench, title: 'Custom Manufacturing', description: 'CNC-machined custom sprockets, pulleys, and couplings to your exact specifications.' },
  { icon: Boxes, title: 'Bulk Supply', description: 'Large inventory and bulk supply capability for industrial-scale orders.' },
  { icon: Truck, title: 'Fast Delivery', description: 'PAN India delivery network with 2-3 day dispatch for standard products.' },
  { icon: DollarSign, title: 'Competitive Pricing', description: 'Factory-direct pricing with bulk discount structures for regular customers.' },
  { icon: HeadphonesIcon, title: 'Technical Support', description: 'Expert technical guidance for product selection, installation, and maintenance.' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Why Choose ICH?
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            25+ years of trusted industrial partnerships built on quality, reliability, and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-8 shadow-lg shadow-black/20 border border-gray-800 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg mb-4 inline-block">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm font-body text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-display font-semibold hover:gap-3 transition-all">
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;