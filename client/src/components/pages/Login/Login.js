import { useState } from 'react';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'react-bootstrap';
import { loginUser } from '../../../redux/userRedux';
import { updateDiscount } from '../../../redux/cartRedux';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState(null);
  // null, 'loading', 'success', 'serverError', 'clientError'
  // console.log(document.cookie);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          return res.json();
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 401) {
          setStatus('loginError');
        } else {
          setStatus('serverError');
        }
      })
      .then((user) => {
        dispatch(loginUser({ id: user.id }));
        dispatch(updateDiscount(10));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch(() => {
        setStatus('serverError');
      });
  };

  return (
    <div className="flex-center flex-column">
      <h2>Log in</h2>
      <p>Once logged in, you get 10% discount in cart</p>
      <form onSubmit={handleSubmit}>
        {status === 'success' && (
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have been successfully logged in.</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong...</Alert.Heading>
            <p>Try again!.</p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant="danger">
            <Alert.Heading>No enough data</Alert.Heading>
            <p>You have to fill in all the fields.</p>
          </Alert>
        )}

        {status === 'loginError' && (
          <Alert variant="danger">
            <Alert.Heading>Incorrect data </Alert.Heading>
            <p>Login or password is incorrect</p>
          </Alert>
        )}
        {status === 'loading' && <LoadingSpinner />}
        <div className="inputContainer">
          <input
            type="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            required
          />
          <label>Email</label>
        </div>
        <div className="inputContainer">
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            required
          />
          <label>Password</label>
        </div>
        <Button text="Login" />
      </form>
      <p>
        Still not registered? You can easily make up for it:
        <Link to="/register"> register!</Link>
      </p>
    </div>
  );
};

export default Login;
