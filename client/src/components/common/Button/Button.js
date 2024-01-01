import styles from './Button.module.scss';

const Button = ({ text, color, onClick, animation }) => {
  return (
    <button
      className={`${styles.btn} ${animation ? styles.animate : ''}`}
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
