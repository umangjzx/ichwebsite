import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { products, categoryInfo } from '@/data/products';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allImages = products.map((p) => ({
    src: p.images[0],
    alt: p.name,
    category: p.category,
    categoryName: categoryInfo[p.category]?.name || p.category,
    slug: p.slug,
  }));

  const filteredImages = selectedCategory === 'all'
    ? allImages
    : allImages.filter((img) => img.category === selectedCategory);

  const categories = [
    { slug: 'all', name: 'All' },
    ...Object.entries(categoryInfo).map(([slug, info]) => ({ slug, name: info.name })),
  ];

  return (
    <>
      <SEOHead
        title="Product Gallery"
        description="Browse ICH product images: roller chains, sprockets, pulleys, couplings, wire ropes, and lifting equipment."
        keywords={['product gallery', 'industrial chain images', 'sprocket photos', 'pulley pictures']}
        canonical="/gallery"
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Gallery' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Product <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted font-body max-w-2xl mx-auto">
              Browse our complete product range through high-quality images.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-primary text-white shadow-lg shadow-black/20'
                    : 'bg-gray-800 text-muted hover:bg-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/products/${image.slug}`}
                  className="group block rounded-xl overflow-hidden bg-gray-900 shadow-lg shadow-black/20 border border-gray-700 hover:shadow-2xl hover:shadow-black/30 hover:border-primary/30 transition-all"
                >
                  <div className="aspect-square bg-gray-800 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <span className="text-xs font-body text-primary font-semibold">{image.categoryName}</span>
                    <h3 className="text-sm font-display font-bold text-white group-hover:text-primary transition-colors truncate">{image.alt}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-12 w-12 text-muted mx-auto mb-4" />
              <p className="text-muted font-body">No images in this category.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Gallery;