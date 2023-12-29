import Button from '../../common/Button/Button';

const Register = () => {
  return (
    <div className="flex-center flex-column">
      <h2>Register</h2>
      <p>
        We highly encourage you to register to get 10% discont for regular
        customers
      </p>
      <form>
        <div className="inputContainer">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="inputContainer">
          <input required type="password" />
          <label>Password</label>
        </div>
        <div className="inputContainer">
          <input required type="password" />
          <label>Confirm password</label>
        </div>
        <Button text="Register" />
      </form>
    </div>
  );
};

export default Register;
