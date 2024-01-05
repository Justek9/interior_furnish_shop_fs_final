import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [status, setStatus] = useState(null);
  // null, "success", "error", "emailError"

  const navigate = useNavigate();
  const clearStatusandNavigateToLgin = () => {
    setTimeout(() => {
      setStatus(null);
      navigate('/login');
    }, 2000);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${API_URL}/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          setRegisterData({ email: '', password: '', passwordRepeat: '' });
        } else if (res.status === 409) {
          setStatus('emailError');
        } else {
          setStatus('error');
        }
      })
      .then(clearStatusandNavigateToLgin())
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-center flex-column">
      <h2>Register</h2>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>
            Success! User was successfully registered.
          </Alert.Heading>
        </Alert>
      )}

      {status === 'emailError' && (
        <Alert variant="danger">
          <Alert.Heading>User with such email already exists</Alert.Heading>
        </Alert>
      )}

      {status === 'error' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Make sure all the fields are filled correctly and try again!</p>
        </Alert>
      )}
      <p>
        We highly encourage you to register to get 10% discont for regular
        customers
      </p>
      <form>
        <div className="inputContainer">
          <input
            type="email"
            value={registerData.email}
            required
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <label>Email</label>
        </div>
        <div className="inputContainer">
          <input
            required
            type="password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <label>Password (min. 5 characters)</label>
        </div>
        <div className="inputContainer">
          <input
            required
            type="password"
            value={registerData.passwordRepeat}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                passwordRepeat: e.target.value,
              })
            }
          />
          <label>Confirm password</label>
        </div>
        <Button text="Register" onClick={registerHandler} />
      </form>
    </div>
  );
};

export default Register;
