import type { projects } from '@/content/pl';
import { ProjectThumb } from '@/components/ProjectThumb';
import css from './ProjectCard.module.css';

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={css.card}>
      <ProjectThumb projectId={project.id} />
      <div className={css.body}>
        <p className={css.type}>{project.type}</p>
        <h3 className={css.title}>{project.title}</h3>
        <p className={css.description}>{project.description}</p>
        <a
          href={project.href}
          aria-label={project.ariaLabel}
          className={css.link}
        >
          {project.linkLabel}
        </a>
      </div>
    </article>
  );
};
