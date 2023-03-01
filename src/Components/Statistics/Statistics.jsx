import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(el => (
          <>
            <li
              className={css.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};
