import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, MessageCircle, Package } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { getProductBySlug, categoryInfo, products } from '@/data/products';
import { COMPANY, getWhatsAppLink } from '@/utils/helpers';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const catInfo = categoryInfo[product.category];
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0],
    brand: { '@type': 'Brand', name: product.brands[0] },
    manufacturer: { '@type': 'Organization', name: COMPANY.name },
    category: catInfo?.name,
  };

  return (
    <>
      <SEOHead
        title={product.seoTitle}
        description={product.seoDescription}
        keywords={product.seoKeywords}
        canonical={`/products/${product.slug}`}
        ogImage={product.images[0]}
        structuredData={structuredData}
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Products', path: '/products' },
            { label: catInfo?.name || product.category, path: `/products?category=${product.category}` },
            { label: product.name },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            {/* Product Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="bg-gray-900 rounded-xl shadow-lg shadow-black/20 border border-gray-700 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="primary">{catInfo?.name || product.category}</Badge>
                {product.isFeatured && <Badge variant="success">Featured</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-muted font-body mb-6 leading-relaxed">{product.longDescription}</p>

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-lg font-display font-bold text-white mb-3">Key Features</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-body text-muted">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h2 className="text-lg font-display font-bold text-white mb-3">Specifications</h2>
                <div className="bg-gray-800 rounded-lg p-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-700 last:border-0">
                      <span className="text-sm font-body font-semibold text-white">{key}</span>
                      <span className="text-sm font-body text-muted">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Sizes */}
              <div className="mb-6">
                <h2 className="text-lg font-display font-bold text-white mb-3">Available Sizes</h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="px-3 py-1 bg-gray-800 rounded-lg text-sm font-body text-muted">{size}</span>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h2 className="text-lg font-display font-bold text-white mb-3">Brands</h2>
                <div className="flex flex-wrap gap-2">
                  {product.brands.map((brand) => (
                    <Badge key={brand} variant="outline">{brand}</Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg" icon={<MessageCircle className="h-5 w-5" />}>WhatsApp</Button>
                </a>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outlined" size="lg" icon={<Phone className="h-5 w-5" />}>Call Us</Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Applications */}
          <section className="py-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-display font-bold text-white mb-6">Applications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {product.applications.map((app) => (
                  <Card key={app} variant="default" hover className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="text-sm font-body text-muted">{app}</span>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="py-8 mb-8">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold text-white mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProducts.map((rp) => (
                    <Link key={rp.id} to={`/products/${rp.slug}`} className="group">
                      <div className="bg-gray-900 rounded-xl shadow-lg shadow-black/20 border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-black/30 hover:border-primary/30 transition-all">
                        <div className="aspect-[4/3] bg-gray-800 overflow-hidden">
                          <img src={rp.images[0]} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-display font-bold text-white group-hover:text-primary transition-colors">{rp.name}</h3>
                          <p className="text-xs text-muted font-body mt-1 line-clamp-2">{rp.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductDetail;