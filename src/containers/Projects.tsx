'use client';

import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';
import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);

  // Limit projects initially shown
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      {/* Section Title */}
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => (
          <ProjectCard
            key={project.id}
            {...project}
            variants={projectVariants}
            initial="hidden"
            whileInView="show"
            custom={i < PROJECTS_INITIALLY ? i : i - PROJECTS_INITIALLY}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;