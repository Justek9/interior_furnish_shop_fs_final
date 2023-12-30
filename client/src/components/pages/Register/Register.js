import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { API_URL } from '../../../config';
import Button from '../../common/Button/Button';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [status, setStatus] = useState(null);

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
          setRegisterData({
            email: '',
            password: '',
            passwordRepeat: '',
          });
        } else {
          setStatus('serverError');
        }
      })
      .catch(() => setStatus('serverError'));
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

      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Make sure all the fields are filled correctly and try agai!.</p>
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
          <label>Password</label>
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
