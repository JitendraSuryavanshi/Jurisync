import React from 'react';
import {
  Building2,
  Receipt,
  ShieldCheck,
  FileCheck,
  Award,
  Scale,
  FileText,
  Briefcase,
  CheckCircle,
  Clock,
  Search,
  Phone,
  MessageCircle,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Building2':
      return <Building2 className={className} />;
    case 'Receipt':
      return <Receipt className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    default:
      return <FileText className={className} />;
  }
};
