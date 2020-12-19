import PropTypes from 'prop-types';

import styles from './Section.module.css';

export default function FeedbackOptions({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
