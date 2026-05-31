import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'GEMEL P. PINEDA',
  tagline: '',
  description:
    "An Information Technology student passionate about software development, UI/UX design, and technical support. Enjoys building web and mobile applications and exploring new technologies to improve skills and create meaningful projects. Welcome to my portfolio!",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};