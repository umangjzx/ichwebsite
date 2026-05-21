import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shirt, Building2, Car, UtensilsCrossed, Package, HardHat, Wheat, Wrench } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { industries } from '@/data/industries';
import { getWhatsAppLink } from '@/utils/helpers';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Factory, Shirt, Building2, Car, UtensilsCrossed, Package, HardHat, Wheat, Wrench,
};

const Industries: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Industries We Serve"
        description="ICH serves 9+ industries: manufacturing, textile, cement, automotive, food processing, packaging, construction, agriculture, and engineering workshops."
        keywords={['industrial supply industries', 'manufacturing', 'textile', 'cement', 'automotive', 'food processing', 'construction']}
        canonical="/industries"
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Industries' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Industries <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-muted font-body max-w-2xl mx-auto">
              From textile mills to cement plants, our products power India&apos;s most demanding industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry, index) => {
              const IconComponent = iconMap[industry.icon] || Factory;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="elevated" hover className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-sm text-muted font-body mb-4 leading-relaxed">{industry.description}</p>
                    <div className="mb-4">
                      <h4 className="text-xs font-display font-semibold text-gray-300 mb-2 uppercase tracking-wider">Products Used</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.products.map((product) => (
                          <span key={product} className="px-2 py-1 bg-gray-800 rounded text-xs font-body text-muted">{product}</span>
                        ))}
                      </div>
                    </div>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Request Products</span>
                      <Wrench className="h-4 w-4" />
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Need Products for Your Industry?
            </h2>
            <p className="text-white/80 font-body mb-6 max-w-xl mx-auto">
              Our technical team can recommend the right products for your specific application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"><Button variant="outlined" size="lg" className="border-white text-white hover:bg-white hover:text-primary">WhatsApp Us</Button></a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Industries;