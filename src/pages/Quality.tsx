import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, FileCheck, Microscope } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/utils/helpers';

const standards = [
  { name: 'ISO', description: 'International Organization for Standardization — roller chains, general tolerances', icon: Shield },
  { name: 'DIN', description: 'German Industrial Standard — precision chain and sprocket specifications', icon: FileCheck },
  { name: 'ANSI', description: 'American National Standards Institute — imperial chain standards', icon: Award },
  { name: 'IS 2266', description: 'Indian Standard for steel wire ropes — material and construction specs', icon: Microscope },
  { name: 'IS 3815', description: 'Indian Standard for chain blocks and hoists — design and testing', icon: CheckCircle },
  { name: 'EN 818-2', description: 'European Standard for alloy steel chain slings — lifting grade', icon: Shield },
  { name: 'BS 302', description: 'British Standard for wire rope specification', icon: FileCheck },
  { name: 'DIN 3060', description: 'German Standard for wire rope construction and breaking force', icon: Microscope },
];

const Quality: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Quality & Standards"
        description="ICH products comply with ISO, DIN, ANSI, and Indian Standards. Test certificates, material certificates, and third-party inspection available."
        keywords={['quality standards', 'ISO compliant', 'test certificates', 'IS 2266', 'IS 3815', 'industrial quality']}
        canonical="/quality"
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Quality & Standards' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Quality & <span className="text-primary">Standards</span>
            </h1>
            <p className="text-muted font-body max-w-2xl mx-auto">
              Every product we supply meets or exceeds international quality standards. We provide full traceability and certification.
            </p>
          </motion.div>

          {/* Quality Commitment */}
          <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center px-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Quality Commitment</h2>
              <p className="text-muted font-body max-w-3xl mx-auto mb-8">
                As a manufacturer, supplier, and exporter, we maintain rigorous quality control at every stage — from raw material inspection to final product testing. Our commitment to quality is not just a policy; it is the foundation of our 25+ year reputation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Incoming Inspection', desc: 'Every raw material batch is tested for chemical composition and mechanical properties before processing.' },
                  { title: 'In-Process Control', desc: 'Dimensional checks at every manufacturing stage ensure products meet specification tolerances.' },
                  { title: 'Final Testing', desc: 'Finished products undergo load testing, hardness testing, and dimensional verification before dispatch.' },
                ].map((item) => (
                  <Card key={item.title} variant="bordered" hover>
                    <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted font-body">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Standards Grid */}
          <section className="py-12 mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Standards We Comply With</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {standards.map((std) => (
                  <Card key={std.name} variant="default" hover className="group">
                    <std.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display font-bold text-white mb-2">{std.name}</h3>
                    <p className="text-sm text-muted font-body">{std.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Certificates */}
          <section className="py-12 mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Certificates & Documentation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Test Certificates', desc: 'Load test, hardness test, and dimensional inspection reports for every product batch.', icon: FileCheck },
                  { title: 'Material Certificates (MTC)', desc: 'Chemical composition analysis and mechanical property test results per EN 10204.', icon: Microscope },
                  { title: 'Third-Party Inspection', desc: 'Independent inspection by approved agencies for export and critical applications.', icon: Award },
                ].map((cert) => (
                  <Card key={cert.title} variant="elevated" hover className="group text-center">
                    <cert.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted font-body">{cert.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <div className="bg-dark rounded-xl p-8 text-center mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Need Quality Documentation?</h2>
            <p className="text-gray-400 font-body mb-6">Request test certificates, MTC, or arrange third-party inspection for your order.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"><Button variant="primary" size="lg">Request on WhatsApp</Button></a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Quality;