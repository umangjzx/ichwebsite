import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Cog, Circle, Combine, Cable, Weight } from 'lucide-react';
import { categoryInfo } from '@/data/products';
import { getWhatsAppLink } from '@/utils/helpers';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Link: LinkIcon,
  Cog,
  Circle,
  Combine,
  Cable,
  Weight,
};

interface MegaMenuProps {
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const categories = Object.values(categoryInfo);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 rounded-xl border border-gray-700/50 p-6 z-50">
      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat, index) => {
          const IconComponent = iconMap[cat.icon] || LinkIcon;
          return (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              onClick={onClose}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 hover:border-l-4 hover:border-l-primary transition-all group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-white group-hover:text-primary transition-colors">
                  {cat.name}
                </p>
                <p className="text-xs text-muted mt-0.5">
                  {cat.count} products
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between items-center">
        <Link
          to="/products"
          onClick={onClose}
          className="text-sm font-body font-medium text-primary hover:underline"
        >
          View All Products →
        </Link>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="text-sm font-body font-medium text-secondary hover:underline"
        >
          WhatsApp Us →
        </a>
      </div>
    </div>
  );
};

export default MegaMenu;
