import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Kiddoodle',
      url: 'https://www.figma.com/proto/fxjFISeAxYpeQc0o5ZQ9a3/Untitled?node-id=1-51&p=f&t=KVwrN9QnWQjP0B59-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A51',
      repo: 'https://github.com/Gemelpineda05/KidDoodle-Capstone',
      img: '/images/kiddoodle.png',
      year: 2025,
      tags: ['React + TS', 'Tailwind', 'Vitest'],
    },
    { 
      id: getId(),
      name: 'The Fastest in Food Delivery',
      url: 'https://www.figma.com/proto/AOPpwhZxdZO4gSBPpTRgT6/Interactive-Website-Prototype-Team-4---1A?node-id=1-2&t=TPi6tu3qNz63kzEC-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      repo: '',
      img: '/images/food-delivery.png',
      year: 2023,
      tags: ['Figma Project'],
    },
    {
      id: getId(),
      name: 'GEMEL STUDIO CAFE',
      url: 'https://www.figma.com/proto/BjmkmdumzIrNi92qQ1uZIs/Untitled?node-id=1-57&p=f&t=heMuxRM7OMzqdmDy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      repo: '',
      img: '/images/Studio-Cafe.png',
      year: 2024,
      tags: ['Figma Project'],
    },
  ],
};
