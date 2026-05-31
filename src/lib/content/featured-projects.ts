import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "My Certificate",
  projects: [
    {
      id: getId(),
      name: 'Simplilearn SkillUp',
      description: 'Completed the online course “Introduction to SQL” on Simplilearn, demonstrating initiative and commitment to deepening database skills.',
      tasks:
        `- Successfully completed the Simplilearn SkillUp online course on SQL.
        - Learned key concepts such as database design, SQL queries, data manipulation, and data analysis.
        - Demonstrated initiative and commitment to advancing professional skills in SQL and database management.
        - Verified certificate of completion issued on 26th Sep 2024 by Krishna Kumar, CEO of Simplilearn.`,
      url: 'https://simpli-web.app.link/e/iZhNpv0PU0b',
      img: '/images/sql-simplilearn.jpg',
      tags: [
      'SQL', 'Database', 'Simplilearn'
      ],
    },
    {
      id: getId(),
      name: 'Build Complete CMS Blog in PHP MySQL Bootstrap & PDO',
      description: 'Developed a full-featured CMS blog using PHP, MySQL, Bootstrap, and PDO, implementing dynamic content management and user authentication.',
      tasks:
        `- Developed the frontend UI using Bootstrap for responsive design.
          - Built backend with PHP & PDO to handle database operations securely.
          - Implemented user authentication, CRUD operations for posts and comments.
          - Integrated MySQL database for dynamic content management.
          - Followed best practices for maintainable and scalable code.`,
      url: 'https://www.udemy.com/certificate/UC-c967cafa-a863-4025-9051-caaabaec757f/',
      img: '/images/Udemy2.jpg',
      tags: [
       'PHP', 'MySQL', 'Bootstrap', 'PDO'
      ],
    },

    {
      id: getId(),
      name: 'PHP with MySQL: Build 8 PHP and MySQL Projects',
      url: 'https://www.udemy.com/certificate/UC-5d622cd4-e6b5-4c3b-aa24-8704077ef4a2/',
      img: '/images/Udemy.jpg',
      // year: 2025,
      description:
        'Completed a hands-on course building 8 projects using PHP and MySQL, demonstrating practical skills in web development, database integration, and dynamic content management. Gained experience in building real-world applications, implementing CRUD operations, user authentication, and responsive design.',
      tasks:
        `- Built 8 real-world projects using PHP and MySQL, covering different web application scenarios.
          - Developed dynamic web pages with database integration for content management.
          - Implemented CRUD operations, user authentication, and form handling.
          - Applied responsive design principles using HTML, CSS, and Bootstrap.
          - Strengthened understanding of server-side scripting, database relationships, and secure coding practices.`,
      tags: [
        'PHP', 'MySQL', 'Bootstrap', 'Web Development'
      ],
    },

{  
  id: getId(),
  name: 'Getting Started with Full Stack Java Development',
  description:
    'Completed an online course through Simplilearn SkillUp, gaining foundational knowledge in full stack web development using Java. Developed an understanding of frontend and backend development concepts, application structure, and database integration while strengthening problem-solving and software development skills through practical learning.',
  tasks:
    `- Learned the fundamentals of full stack Java development and web application architecture.
      - Explored frontend and backend development concepts using Java technologies.
      - Gained knowledge in database integration and application structure.
      - Strengthened problem-solving and programming skills through practical exercises.
      - Developed an understanding of modern web development workflows and best practices.`,
  url: 'https://simpli-web.app.link/e/dNOiDS2d02b',
  img: '/images/sql-simplilearn2.jpg',
  tags: ['Java', 'Full Stack Development', 'Web Development'],
},
    /*{
      id: getId(),
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://www.velvimatrimony.in/',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },*/
      /*{
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    },*/

    /*{
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'I designed and developed the landing page and implemented the dashboard by creating a user interface and integrating APIs.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },*/
  ],
};

export default featuredProjectsSection;
