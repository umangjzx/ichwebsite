import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Factory, Globe, Target, Heart, Clock } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import { COMPANY, getWhatsAppLink } from '@/utils/helpers';

const timelineEvents = [
  { year: '1999', event: 'Founded in Coimbatore as a small chain supply business' },
  { year: '2003', event: 'Expanded to sprocket manufacturing with CNC machining' },
  { year: '2008', event: 'Added pulleys and couplings to product range' },
  { year: '2012', event: 'Started wire rope and lifting equipment distribution' },
  { year: '2017', event: 'Achieved 3000+ customer milestone across India' },
  { year: '2022', event: 'Expanded export operations and achieved ISO compliance' },
  { year: '2024', event: '5000+ customers, full product catalogue, PAN India delivery' },
];

const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Industrial Chain & Hardware (ICH) - 25+ years of manufacturing excellence in Coimbatore. Learn about our mission, history, and commitment to quality industrial products."
        keywords={['about ICH', 'industrial chain manufacturer', 'Coimbatore', 'company history', 'mission']}
        canonical="/about"
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary to-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
                25+ Years of{' '}
                <span className="text-primary">Manufacturing Excellence</span>
              </h1>
              <p className="text-xl font-body text-gray-300 max-w-3xl mb-8">
                {COMPANY.name} ({COMPANY.acronym}) has been the trusted partner for industrial power transmission and lifting solutions since {COMPANY.foundedYear}. Based in Coimbatore, the engineering hub of India, we serve customers across the nation with quality products and reliable service.
              </p>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">WhatsApp Our Team</Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-display font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-muted font-body leading-relaxed">
                  To provide the highest quality industrial power transmission and lifting products at competitive prices, backed by expert technical support and reliable delivery. We strive to be the one-stop solution for every industrial requirement.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary/5 border border-secondary/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-display font-bold text-white">Our Values</h2>
                </div>
                <ul className="space-y-3 text-muted font-body">
                  <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-secondary" /> Quality without compromise</li>
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-secondary" /> Customer-first approach</li>
                  <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-secondary" /> Integrity in every transaction</li>
                  <li className="flex items-center gap-2"><Award className="h-4 w-4 text-secondary" /> Continuous improvement</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Clock, value: 25, suffix: '+', label: 'Years in Business' },
                { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers' },
                { icon: Factory, value: 1000, suffix: '+', label: 'Product Range' },
                { icon: Globe, value: 1, suffix: '', label: 'PAN India Reach' },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-display font-extrabold">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <p className="text-sm font-body text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Journey</h2>
              <p className="text-muted font-body max-w-2xl mx-auto">
                From a small chain supply business to a comprehensive industrial solutions provider — our growth story.
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block" />
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <span className="text-primary font-display font-extrabold text-2xl">{event.year}</span>
                    <p className="text-muted font-body mt-1">{event.event}</p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark shadow-lg shadow-black/20 mx-auto hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Type */}
        <section className="py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Manufacturer, Supplier & Exporter</h2>
              <p className="text-muted font-body max-w-3xl mx-auto mb-8">
                As a {COMPANY.businessType.toLowerCase()}, we control the quality from raw material to finished product. Our manufacturing facility in Coimbatore ensures every product meets international standards before it reaches your doorstep.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products"><Button variant="primary" size="lg">View Products</Button></Link>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"><Button variant="outlined" size="lg">WhatsApp Us</Button></a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;