import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => {
  return <div className={styles.wrapper}>{children} </div>;
};

export default PageContainer;
