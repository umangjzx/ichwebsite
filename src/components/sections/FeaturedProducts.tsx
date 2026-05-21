import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import Badge from '@/components/ui/Badge';

const FeaturedProducts: React.FC = () => {
  const featured = getFeaturedProducts();

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
            Featured Products
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Our most popular industrial products trusted by thousands of customers.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {featured.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                to={`/products/${product.slug}`}
                className="block bg-gray-900 rounded-2xl shadow-lg shadow-black/20 border border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-[400px]"
              >
                <div className="h-48 bg-gray-900 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="primary" className="shadow-md backdrop-blur-sm bg-primary/90 text-white border-none">{product.category.replace('-', ' ')}</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="absolute top-0 right-6 -mt-6 h-12 w-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg shadow-black/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 z-20">
                    <ArrowRight className="h-5 w-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors mb-2 pr-8 mt-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm font-body text-gray-400 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="mt-auto border-t border-gray-800 pt-4">
                    <span className="text-primary font-display font-semibold text-sm hover:underline">View Specifications</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;