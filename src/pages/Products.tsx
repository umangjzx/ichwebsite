import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCard3D from '@/components/3d/ProductCard3D';
import { products, categoryInfo, getProductsByCategory } from '@/data/products';
import Badge from '@/components/ui/Badge';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === 'all' ? products : getProductsByCategory(selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  const categories = [
    { slug: 'all', name: 'All Products', count: products.length },
    ...Object.values(categoryInfo),
  ];

  return (
    <>
      <SEOHead
        title="Products"
        description="Browse ICH's complete product catalogue: roller chains, sprockets, pulleys, couplings, wire ropes, and lifting equipment. ISO compliant, PAN India delivery."
        keywords={['industrial products', 'roller chains', 'sprockets', 'pulleys', 'couplings', 'wire ropes', 'lifting equipment', 'product catalogue']}
        canonical="/products"
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Products' }]} />

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Our <span className="text-primary">Product Catalogue</span>
            </h1>
            <p className="text-muted font-body max-w-2xl mx-auto">
              30+ products across 6 categories. From roller chains to lifting equipment, every product meets international quality standards.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg font-body text-sm bg-gray-900 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
              />
            </div>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
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
                  <span className="ml-1 text-xs opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard3D key={product.id}>
                <Link
                  to={`/products/${product.slug}`}
                  className="block bg-gray-900 rounded-xl shadow-lg shadow-black/20 border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-black/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-gray-800 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="primary">{categoryInfo[product.category]?.name || product.category}</Badge>
                      {product.isFeatured && <Badge variant="success">Featured</Badge>}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted font-body mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ProductCard3D>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-12 w-12 text-muted mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-2">No products found</h3>
              <p className="text-muted font-body">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Products;