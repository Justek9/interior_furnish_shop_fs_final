import Button from '../../common/Button/Button';

const Login = () => {
  return (
    <div className="flex-center flex-column">
      <h2>Log in</h2>
      <form>
        <div className="inputContainer">
          <input type="email" required />
          <label>Emai</label>
        </div>
        <div className="inputContainer">
          <input required type="password" />
          <label>Password</label>
        </div>
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
