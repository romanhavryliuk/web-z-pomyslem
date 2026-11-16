import { projects, projectsSection } from '@/content/pl';
import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import css from './Projects.module.css';

const TITLE_ID = 'projekty-title';

export const Projects = () => {
  return (
    <section
      id={projectsSection.id}
      aria-labelledby={TITLE_ID}
      className={css.section}
    >
      <div className={`container ${css.inner}`}>
        <SectionHeader
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          titleId={TITLE_ID}
          lead={projectsSection.lead}
          isDark
        />
        <FeaturedProject />
        <ul className={css.grid}>
          {projects.map((project) => (
            <li key={project.id} className={css.gridItem}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
