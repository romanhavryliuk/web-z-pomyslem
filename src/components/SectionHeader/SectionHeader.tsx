import css from './SectionHeader.module.css';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  lead?: string;
  isDark?: boolean;
  isWideLead?: boolean;
};

export const SectionHeader = ({
  eyebrow,
  title,
  titleId,
  lead,
  isDark = false,
  isWideLead = false,
}: SectionHeaderProps) => {
  const toneClass = isDark ? css.dark : '';
  const leadClass = isWideLead ? css.leadWide : css.lead;

  return (
    <div className={`${css.header} ${toneClass}`}>
      <p className={css.eyebrow}>{eyebrow}</p>
      <h2 id={titleId} className={css.title}>
        {title}
      </h2>
      {lead && <p className={leadClass}>{lead}</p>}
    </div>
  );
};
