import { ServiceProvider } from './types';

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Gobiz Cosec Firm',
    logo: '/images/gobiz.jpg',
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
    logo: '/images/consitenet.jpg',
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
    logo: '/images/sarahconnor.jpg',
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
    logo: '/images/experservices.jpg',
    rating: 4.1,
    ratingCount: 942,
    description: 'We deliver the best Secretarial Services in Malaysia',
    price: 2200,
    currency: 'RM',
    completionTime: 14,
    completionTimeUnit: 'days',
    features: ['Premium service', 'Comprehensive support', 'Document management']
  },
  {
    id: '5',
    name: 'Blue Ocean Solutions',
    logo: '/images/blueoceanSolutions.jpg',
    rating: 4.7,
    ratingCount: 1875,
    description: 'Trusted by startups for fast and reliable company incorporation.',
    price: 1800,
    currency: 'RM',
    completionTime: 5,
    completionTimeUnit: 'days',
    features: ['Startup friendly', 'Quick turnaround', 'Affordable packages']
  },
  {
    id: '6',
    name: 'PrimeCorp Advisors',
    logo: '/images/primeCorp.jpg',
    rating: 4.3,
    ratingCount: 1340,
    description: 'Expert guidance for your business registration and compliance.',
    price: 2100,
    currency: 'RM',
    completionTime: 10,
    completionTimeUnit: 'days',
    features: ['Compliance support', 'Business advisory', 'Experienced team']
  },
  {
    id: '7',
    name: 'NextGen Cosec',
    logo: '/images/nextgenCosec.jpg',
    rating: 4.8,
    ratingCount: 2010,
    description: 'Modern solutions for digital entrepreneurs and SMEs.',
    price: 1700,
    currency: 'RM',
    completionTime: 4,
    completionTimeUnit: 'days',
    features: ['Digital onboarding', 'SME specialists', 'Transparent pricing']
  },
  {
    id: '8',
    name: 'BizLaunch Partners',
    logo: '/images/bizLaunchPartnership.jpg',
    rating: 4.5,
    ratingCount: 1560,
    description: 'Personalized service for new business owners in Malaysia.',
    price: 1600,
    currency: 'RM',
    completionTime: 6,
    completionTimeUnit: 'days',
    features: ['Personalized support', 'Local expertise', 'Step-by-step guidance']
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