import css from './ProjectThumb.module.css';

type ProjectThumbProps = {
  projectId: string;
};

// Абстрактні мініатюри з макету — замінити на скріни WebP 16:10, коли вони будуть.
export const ProjectThumb = ({ projectId }: ProjectThumbProps) => {
  switch (projectId) {
    case 'cosmogram':
      return (
        <div className={`${css.thumb} ${css.center}`} aria-hidden="true">
          <div className={css.orbit}>
            <div className={css.planet} />
          </div>
        </div>
      );
    case 'mindterms':
      return (
        <div className={`${css.thumb} ${css.tiles}`} aria-hidden="true">
          <div className={`${css.tile} ${css.surface}`} />
          <div className={`${css.tile} ${css.sage}`} />
          <div className={`${css.tile} ${css.powder}`} />
          <div className={`${css.tile} ${css.surface}`} />
        </div>
      );
    case 'pixasearch':
      return (
        <div className={`${css.thumb} ${css.search}`} aria-hidden="true">
          <div className={css.searchBar} />
          <div className={css.results}>
            <div className={`${css.result} ${css.powder}`} />
            <div className={`${css.result} ${css.sage}`} />
            <div className={`${css.result} ${css.butter}`} />
          </div>
        </div>
      );
    case 'getmatch':
      return (
        <div className={`${css.thumb} ${css.chat}`} aria-hidden="true">
          <div className={`${css.bubble} ${css.incoming} ${css.wide}`} />
          <div className={`${css.bubble} ${css.outgoing}`} />
          <div className={`${css.bubble} ${css.incoming} ${css.widest}`} />
        </div>
      );
    default:
      return <div className={css.thumb} aria-hidden="true" />;
  }
};
