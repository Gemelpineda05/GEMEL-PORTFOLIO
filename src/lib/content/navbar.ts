import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'Tech Stack', url: '/#skills' },
    { name: 'certificate', url: '/#certificate' }, // pupunta sa My Certificate
    { name: 'projects', url: '/#projects' },      // pupunta sa My Projects
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};