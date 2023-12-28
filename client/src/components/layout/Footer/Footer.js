import styles from './Footer.module.scss';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={`flex-center ${styles.root}`}>
      <Container>
        <div className={`flex-center ${styles.topContainer}`}>
          <div className={styles.subMenu}>
            <p>Main Menu</p>
            <ul>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.subMenu}>
            <p>Shop</p>
            <ul>
              <li>
                <a href="/shop/all">All</a>
              </li>
              <li>
                <a href="/shop/shelves">Shelves</a>
              </li>
              <li>
                <a href="/shop/organizers">Cubes</a>
              </li>
            </ul>
          </div>
          <div className={styles.subMenu}>
            <p>Information</p>
            <ul>
              <li>
                <a href="/">Payments</a>
              </li>
              <li>
                <a href="/">Delivery</a>
              </li>
              <li>
                <a href="/">Returns</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`flex-center ${styles.bottomContainer}`}>
          <p>©Copyright 2024 | All Rights Reserved</p>
          <div></div>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faGooglePlusG}>
                  Google Plus
                </FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;