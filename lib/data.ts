import { ServiceProvider } from './types';

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Gobiz Cosec Firm',
    logo: '/images/partnership.png',
    rating: 4.9,
    ratingCount: 2483,
    description: 'Incorporate your company with us and get 2 FREE CTC copies.',
    price: 1600,
    currency: 'RM',
    completionTime: 3,
    completionTimeUnit: 'days',
    features: ['Free CTC copies', 'Expert advice', 'Fast processing']
  },
  {
    id: '2',
    name: 'Consistent Net',
    logo: '/images/globaltech.png',
    rating: 3.2,
    ratingCount: 998,
    description: 'Get 20% off for 1st month of Secretary services',
    price: 1499,
    currency: 'RM',
    completionTime: 7,
    completionTimeUnit: 'days',
    features: ['Discounted secretary services', 'Online support']
  },
  {
    id: '3',
    name: 'Sarah Connor',
    logo: '/images/sarah.png',
    rating: 5.0,
    ratingCount: 2290,
    description: 'With more than 15 years in the industry, your company is in good hands',
    price: 1250,
    currency: 'RM',
    completionTime: 3,
    completionTimeUnit: 'days',
    features: ['15+ years experience', 'Personal handling', 'Industry expertise']
  },
  {
    id: '4',
    name: 'Exper Services',
    logo: '/images/expert.png',
    rating: 4.1,
    ratingCount: 942,
    description: 'We deliver the best Secretarial Services in Malaysia',
    price: 2200,
    currency: 'RM',
    completionTime: 14,
    completionTimeUnit: 'days',
    features: ['Premium service', 'Comprehensive support', 'Document management']
  }
];

export const companyTypes = [
  'Private Limited (SDN BHD)',
  'Limited Liability Partnership (LLP)',
  'Sole Proprietorship',
  'Public Limited Company (BHD)'
];

export const regions = [
  'Peninsular Malaysia (Mainland)',
  'East Malaysia (Sabah & Sarawak)',
  'Labuan (Offshore)',
  'All Regions'
];