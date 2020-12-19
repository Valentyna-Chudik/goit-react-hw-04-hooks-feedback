import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.option}>Good: {good}</span>
      <span className={styles.option}>Neutral: {neutral}</span>
      <span className={styles.option}>Bad: {bad}</span>
      <span className={styles.option}>Total: {total}</span>
      <span className={styles.option}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
