import styles from './Button.module.scss';

const Button = ({ text, color }) => {
  return (
    <button
      className={styles.btn}
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
