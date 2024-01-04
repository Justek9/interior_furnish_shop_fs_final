import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './ContentContainer.module.scss';

const ContentContainer = ({ children }) => {
  return <Container className={styles.content}>{children}</Container>;
};

export default ContentContainer;

ContentContainer.propTypes = {
  children: PropTypes.array,
};
