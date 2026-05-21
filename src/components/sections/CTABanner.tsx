import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { COMPANY, getWhatsAppLink } from '@/utils/helpers';

const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark industrial-texture overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA0MEw0MCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg font-body text-white/90 mb-6 max-w-2xl mx-auto">
            Contact us today for a quotation. Our team is ready to help you find the right industrial products for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-white font-display font-semibold"
            >
              <Phone className="h-5 w-5" />
              {COMPANY.phone}
            </a>
          </div>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              WhatsApp Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;