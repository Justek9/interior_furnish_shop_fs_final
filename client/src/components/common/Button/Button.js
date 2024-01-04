import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ text, color, onClick }) => {
  return (
    <button
      className={styles.btn}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
