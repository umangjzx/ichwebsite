import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Package, Truck } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const metrics = [
  { icon: Calendar, value: 25, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 5000, suffix: '+', label: 'Customers Served' },
  { icon: Package, value: 1000, suffix: '+', label: 'Products' },
  { icon: Truck, value: 1, suffix: '', label: 'PAN India Delivery', prefix: '' },
];

const TrustMetrics: React.FC = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    duration={2000}
                  />
                </div>
                <p className="text-sm font-body text-gray-400">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;