import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/userRedux';

const TopBar = () => {
  const user = useSelector(getUser);

  return (
    <div className={styles.headerTop}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src="../assets/logo.jpg" alt="company logo" />
        </Link>
      </div>
      <div className={styles.headerMenu}>
        <Link to="/search">
          <button className={styles.btnIcon}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </Link>
        <div>
          <button className={styles.btnIcon}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          {user && <span>You're logged in!</span>}
          {!user && (
            <Link to="/login">
              <span>Login </span>
            </Link>
          )}
          {!user && (
            <Link to="/register">
              <span>Register</span>
            </Link>
          )}
          {user && (
            <Link to="/logout">
              <span> Log out</span>
            </Link>
          )}
        </div>
        <div>
          <Link to="/cart">
            <button className={`${styles.btnIcon}`}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          </Link>
          <span>Cart: 0</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
