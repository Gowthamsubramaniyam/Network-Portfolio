export interface SoftwareSkill {
  name: string;
  level: number; // 1-100
  iconName?: string;
  category: 'Networking' | 'Tools & Protocols' | 'Operating Systems' | 'Languages & Core';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  scoreOrHonor?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  category: 'Cloud & AI' | 'Networking' | 'Security & OS';
  badgeColor?: string;
  description?: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  github: string;
  linkedin: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  softwareSkills: SoftwareSkill[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
  softSkills: string[];
  extracurricular: string[];
}

export type SlideCategory = 
  | 'cover'
  | 'intro'
  | 'index'
  | 'enterprise_network'
  | 'small_office_network'
  | 'routing_switching'
  | 'troubleshooting_wireshark'
  | 'section_divider'
  | 'certifications'
  | 'linux_systems'
  | 'leadership'
  | 'creative_media'
  | 'education_academics'
  | 'tools_ecosystem'
  | 'contact_connect';

export interface ProjectMedia {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  imageUrl: string;
  description?: string;
  tools?: string[];
  tags?: string[];
  client?: string;
  year?: string;
  accentColor?: string;
  topologyDetails?: string[];
  keyHighlights?: string[];
}

export interface SlideItem {
  id: number;
  slideNumberStr: string;
  key: SlideCategory | string;
  title: string;
  subtitle: string;
  description?: string;
  category: string;
  items?: ProjectMedia[];
  customContent?: Record<string, any>;
}

export type ViewMode = 'deck' | 'wall' | 'portfolio' | 'print';
