import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import NotFoundScene from '@/components/3d/NotFoundScene';
import Button from '@/components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead title="Page Not Found (404)" description="The page you are looking for does not exist. Return to the ICH homepage." />
      <main id="main-content" className="min-h-screen flex items-center justify-center relative">
        {/* 3D Background */}
        <NotFoundScene />

        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-display font-extrabold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-400 font-body mb-8 max-w-md mx-auto">
              The page you are looking for does not exist or has been moved. Let us help you find what you need.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button variant="primary" size="lg" icon={<Home className="h-5 w-5" />}>
                  Go Home
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outlined" size="lg" className="border-white text-white hover:bg-white hover:text-dark" icon={<ArrowLeft className="h-5 w-5" />}>
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;