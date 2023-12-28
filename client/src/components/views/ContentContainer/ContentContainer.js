import { Container } from 'react-bootstrap';
import styles from './ContentContainer.module.scss';

const ContentContainer = ({ children }) => {
  return <Container className={styles.content}>{children}</Container>;
};

export default ContentContainer;
