import styles from './PageContainer.module.scss';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => {
  return <div className={styles.wrapper}>{children} </div>;
};

export default PageContainer;

PageContainer.propTypes = {
  children: PropTypes.array,
};
