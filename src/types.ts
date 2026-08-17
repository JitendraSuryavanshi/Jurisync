export type ServiceCategoryKey =
  | 'business-registration'
  | 'taxation'
  | 'trademark-ip'
  | 'roc-mca'
  | 'licences'
  | 'audit-advisory';

export interface ServiceCategory {
  id: ServiceCategoryKey;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  subServiceIds: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  tag?: string;
  popular?: boolean;
  price: number; // in INR
  govtFees?: string;
  turnaroundDays: string;
  description: string;
  features: string[];
  notIncluded?: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  daysEstimated: string;
}

export interface SubService {
  id: string;
  categoryId: ServiceCategoryKey;
  name: string;
  slug: string;
  popular?: boolean;
  shortDescription: string;
  heroHeadline: string;
  startingPrice: number;
  govtFeeNote: string;
  turnaroundTime: string;
  overview: string;
  whatsIncluded: string[];
  documentsRequired: {
    category: string;
    items: string[];
  }[];
  eligibility: string[];
  processSteps: ServiceProcessStep[];
  pricingTiers: PricingTier[];
  faqs: ServiceFAQ[];
  relatedServiceIds: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  location: string;
  service: string;
  rating: number;
  content: string;
  verified: boolean;
  avatarText?: string;
  avatarBg?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface ComplianceDeadline {
  id: string;
  title: string;
  category: 'GST' | 'ROC & MCA' | 'Income Tax' | 'TDS' | 'Labour & Licences';
  dueDate: string;
  frequency: 'Monthly' | 'Quarterly' | 'Annual' | 'One-Time';
  applicableTo: string;
  penaltyDescription: string;
  formName: string;
  status: 'Urgent' | 'Upcoming' | 'Standard';
}

export type OrderStage = 'Order Received' | 'Document Verification' | 'MCA/Govt Filing' | 'Completed';

export interface OrderStatusHistory {
  stage: OrderStage;
  timestamp: string;
  description: string;
  completed: boolean;
  active?: boolean;
}

export interface TrackedOrder {
  orderId: string;
  clientName: string;
  phone: string;
  email: string;
  serviceName: string;
  filingEntityName?: string;
  currentStage: OrderStage;
  estimatedCompletion: string;
  assignedProfessional: {
    name: string;
    role: 'Company Secretary' | 'Chartered Accountant' | 'Senior Legal Advocate';
    copNumber?: string;
    phone: string;
  };
  timeline: OrderStatusHistory[];
  documentsUploaded: {
    name: string;
    status: 'Verified' | 'Pending Review' | 'Required';
  }[];
  downloadableCertificates?: {
    name: string;
    issueDate: string;
    fileSize: string;
  }[];
}

export interface LeadSubmission {
  name: string;
  phone: string;
  email?: string;
  service: string;
  city: string;
  notes?: string;
  submittedAt: string;
}
