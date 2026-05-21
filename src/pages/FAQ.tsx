import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { faqs } from '@/data/faq';

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filteredFaqs = selectedCategory === 'All' ? faqs : faqs.filter((f) => f.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Get answers to common questions about ICH products, ordering, delivery, quality standards, and custom manufacturing."
        keywords={['FAQ', 'industrial chain questions', 'sprocket FAQ', 'delivery FAQ', 'order FAQ']}
        canonical="/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />
      <main id="main-content" className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-muted font-body max-w-2xl mx-auto">
              Find answers to common questions about our products, ordering, and services.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-black/20'
                    : 'bg-gray-800 text-muted hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900 rounded-xl shadow-lg shadow-black/20 border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-display font-bold text-white">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted font-body leading-relaxed border-t border-gray-700 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQ;