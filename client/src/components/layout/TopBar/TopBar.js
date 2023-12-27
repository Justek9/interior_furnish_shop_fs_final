import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';

const TopBar = () => {
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
          <Link to="/login">
            <span>Login </span>
          </Link>
          <Link to="/register">
            <span>Register</span>
          </Link>
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