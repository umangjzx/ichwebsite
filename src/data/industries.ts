import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'ind-manufacturing',
    name: 'Manufacturing',
    description: 'ICH supplies roller chains, sprockets, and couplings to manufacturing plants across India, ensuring uninterrupted production with reliable power transmission components.',
    icon: 'Factory',
    products: ['Simplex Roller Chains', 'Duplex Sprockets', 'Gear Couplings', 'V-Belt Pulleys'],
  },
  {
    id: 'ind-textile',
    name: 'Textile',
    description: 'The textile industry relies on our precision chains and sprockets for spinning, weaving, and processing machinery. Our products handle the high-speed, continuous operation demands of textile production.',
    icon: 'Shirt',
    products: ['Simplex Roller Chains', 'Timing Pulleys', 'Pin Bush Couplings', 'Simplex Sprockets'],
  },
  {
    id: 'ind-cement',
    name: 'Cement',
    description: 'Cement plants require heavy-duty components that withstand abrasive dust and extreme loads. Our gear couplings, conveyor chains, and wire ropes are built for these demanding conditions.',
    icon: 'Building2',
    products: ['Conveyor Chains', 'Gear Couplings', 'Steel Wire Ropes', 'Hardened Sprockets'],
  },
  {
    id: 'ind-automotive',
    name: 'Automotive',
    description: 'Automotive assembly lines depend on our duplex and triplex chains for reliable conveyor operation. Our precision-machined sprockets ensure smooth, accurate power transmission.',
    icon: 'Car',
    products: ['Duplex Roller Chains', 'Triplex Sprockets', 'Timing Pulleys', 'Tyre Couplings'],
  },
  {
    id: 'ind-food',
    name: 'Food Processing',
    description: 'Our stainless steel chains and sprockets meet the strict hygiene requirements of food processing. Corrosion-resistant, easy to clean, and compliant with food safety standards.',
    icon: 'UtensilsCrossed',
    products: ['Stainless Steel Chains', 'SS Sprockets', 'Nylon Roller Chains', 'Star Couplings'],
  },
  {
    id: 'ind-packaging',
    name: 'Packaging',
    description: 'Packaging lines require precise, reliable chain drives for high-speed operation. Our simplex chains and timing pulleys deliver the accuracy and speed packaging demands.',
    icon: 'Package',
    products: ['Simplex Roller Chains', 'Timing Pulleys', 'Rotex Couplings', 'Simplex Sprockets'],
  },
  {
    id: 'ind-construction',
    name: 'Construction',
    description: 'From chain blocks to wire rope slings, we supply the lifting and rigging equipment that keeps construction projects moving safely and efficiently.',
    icon: 'HardHat',
    products: ['Chain Blocks', 'Wire Rope Slings', 'D Shackles', 'Steel Wire Ropes'],
  },
  {
    id: 'ind-agriculture',
    name: 'Agriculture',
    description: 'Agricultural machinery depends on our durable roller chains and sprockets for reliable operation in field conditions. Our products handle mud, dust, and heavy loads with ease.',
    icon: 'Wheat',
    products: ['Simplex Roller Chains', 'V-Belt Pulleys', 'Pin Bush Couplings', 'Simplex Sprockets'],
  },
  {
    id: 'ind-engineering',
    name: 'Engineering Workshops',
    description: 'Engineering workshops trust ICH for a complete range of power transmission and lifting products. From small chain drives to heavy lifting equipment, we have it all.',
    icon: 'Wrench',
    products: ['Roller Chains', 'Sprockets', 'Couplings', 'Chain Blocks'],
  },
];
