import Button from '../../common/Button/Button';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root}>
      <h2>Log in</h2>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <form>
            <div className="inputContainer">
              <input required />
              <label>Username</label>
            </div>
            <div className="inputContainer">
              <input required type="password" />
              <label>Password</label>
            </div>
            <Button text="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
