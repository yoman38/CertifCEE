import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceData {
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
}

export interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExpandableCardProps extends CardProps {
  details: string;
}

export interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}