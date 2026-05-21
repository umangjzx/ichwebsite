import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export const COMPANY = {
  name: 'Industrial Chain & Hardwares',
  acronym: 'ICH',
  tagline: 'Total industrial solutions under one roof',
  address: '8-B, R.R. Swamy Lane, Ramnagar Post, Coimbatore – 641009, Tamil Nadu, India',
  phone: '+91 96778 32013',
  email: 'industrialchain8@gmail.com',
  whatsapp: '+91 96778 32013',
  whatsappMessage: 'Hello, I would like to get a quotation for your industrial products.',
  foundedYear: 1999,
  yearsInBusiness: 25,
  businessType: 'Manufacturer, Supplier, and Exporter',
  serviceRegions: 'Tamil Nadu and all over India (PAN India delivery)',
} as const;

export function getWhatsAppLink(): string {
  const message = encodeURIComponent(COMPANY.whatsappMessage);
  return `https://wa.me/${COMPANY.whatsapp.replace('+', '')}?text=${message}`;
}
