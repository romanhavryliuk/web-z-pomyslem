import { featuredProject } from '@/content/pl';
import { Button } from '@/components/Button';
import { Pill } from '@/components/Pill';
import css from './FeaturedProject.module.css';

const { mock } = featuredProject;

// Декоративна мініатюра сайту OD NOWA (ноутбук + телефон) — до появи справжнього скріна.
const ProjectMock = () => (
  <div className={css.mock} aria-hidden="true">
    <div className={css.browser}>
      <div className={css.browserBar}>
        <span className={css.browserDot} />
        <span className={css.browserDot} />
        <span className={css.browserDot} />
      </div>
      <div className={css.browserHero}>
        <span className={css.mockEyebrow}>{mock.eyebrow}</span>
        <span className={css.mockTitle}>{mock.title}</span>
        <span className={css.mockLine} />
        <span className={css.mockButton}>{mock.button}</span>
      </div>
      <div className={css.browserFeatures}>
        {mock.features.map((feature) => (
          <span key={feature} className={css.mockFeature}>
            {feature}
          </span>
        ))}
      </div>
    </div>
    <div className={css.phone}>
      <div className={css.phoneScreen}>
        <span className={css.phoneTitle}>{mock.title}</span>
        <span className={css.phoneLine} />
        <span className={`${css.phoneLine} ${css.phoneLineShort}`} />
        <span className={css.phoneButton} />
      </div>
    </div>
  </div>
);

export const FeaturedProject = () => {
  return (
    <article className={css.card}>
      <ProjectMock />
      <div className={css.info}>
        <Pill variant="badge">{featuredProject.badge}</Pill>
        <h3 className={css.title}>{featuredProject.title}</h3>
        <p className={css.lead}>{featuredProject.lead}</p>
        <p className={css.description}>{featuredProject.description}</p>
        <ul className={css.tech}>
          {featuredProject.tech.map((item) => (
            <li key={item} className={css.techItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={css.actions}>
          <Button href={featuredProject.demo.href} size="md">
            {featuredProject.demo.label}
          </Button>
          <a href={featuredProject.code.href} className={css.codeLink}>
            {featuredProject.code.label}
          </a>
        </div>
      </div>
    </article>
  );
};
