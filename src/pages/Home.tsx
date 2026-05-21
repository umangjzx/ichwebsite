import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTABanner from '@/components/sections/CTABanner';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import IndustriesPreview from '@/components/sections/IndustriesPreview';
import BrandMarquee from '@/components/sections/BrandMarquee';

const Home: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Industrial Chain & Hardwares',
    url: 'https://industrialchain.com',
    logo: 'https://industrialchain.com/images/logo/image.png',
    description: 'Industrial Chain & Hardwares (ICH) - 25+ years of manufacturing excellence in industrial chains, sprockets, pulleys, couplings, wire ropes, and lifting equipment. Based in Coimbatore, Tamil Nadu, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8-B, R.R. Swamy Lane, Ramnagar Post',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641009',
      addressCountry: 'IN',
    },
    telephone: '+91 96778 32013',
    email: 'industrialchain8@gmail.com',
    foundingDate: '1999',
  };

  return (
    <>
      <SEOHead
        title="Industrial Chain & Hardwares - Total Industrial Solution Under One Roof"
        description="ICH Coimbatore: 25+ years of manufacturing excellence. Roller chains, sprockets, pulleys, couplings, wire ropes, lifting equipment. ISO compliant. PAN India delivery."
        keywords={['industrial chain', 'sprocket', 'pulley', 'coupling', 'wire rope', 'lifting equipment', 'Coimbatore', 'India', 'manufacturer', 'supplier']}
        canonical="/"
        structuredData={structuredData}
      />
      <main id="main-content" className="skip-to-content-target">
        <HeroSection />
        <BrandMarquee />
        <FeaturedProducts />
        <WhyChooseUs />
        <ProductGrid />
        <IndustriesPreview />
        <CTABanner />
      </main>
    </>
  );
};

export default Home;