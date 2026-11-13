export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'precision-agronomy' | 'soil-intelligence' | 'supply-chain' | 'advisory';
  status: 'active' | 'in-development' | 'planned';
  features: string[];
  impactMetric: string;
  targetAudience: string;
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stage: 'operational' | 'pilot' | 'conceptual';
  keyCapabilities: string[];
  synergy: string;
  statusBadge: string;
}

export interface ResearchPillar {
  title: string;
  focusArea: string;
  description: string;
  methodology: string;
  ongoingExplorations: string[];
}

export interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: 'enterprise' | 'farmer-partnership' | 'technology-synergy' | 'press-media' | 'general';
  message: string;
}

