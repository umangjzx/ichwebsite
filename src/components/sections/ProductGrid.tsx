import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as LinkIcon, Cog, Circle, Combine, Cable, Weight, ArrowRight } from 'lucide-react';
import { categoryInfo } from '@/data/products';
import ProductCard3D from '@/components/3d/ProductCard3D';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Link: LinkIcon,
  Cog,
  Circle,
  Combine,
  Cable,
  Weight,
};

const ProductGrid: React.FC = () => {
  const categories = Object.values(categoryInfo);

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
            Our Product Categories
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            From roller chains to lifting equipment, we offer a comprehensive range of industrial products manufactured to international standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || LinkIcon;
            return (
              <ProductCard3D key={cat.slug}>
                <Link
                  to={`/products?category=${cat.slug}`}
                  className="block bg-gray-900 rounded-2xl shadow-lg shadow-black/20 border border-gray-800 p-8 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gray-900 rounded-xl group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300 shadow-inner">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-primary font-body font-medium">{cat.count} products</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 font-body mb-6 leading-relaxed flex-grow">{cat.description}</p>
                  </div>
                  <div className="relative z-10 mt-auto pt-4 border-t border-gray-800 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                    <span className="text-primary font-display font-semibold text-sm">Explore Category</span>
                    <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ProductCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;