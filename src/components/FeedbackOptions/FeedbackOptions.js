import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.btnContainer}>
      {options.map(option => (
        <button
          className={styles.btnOption}
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
