import GallerySlider from '../../features/GallerySlider/GallerySlider';
import PropTypes from 'prop-types';

import styles from './GallerySliderContainer.module.scss';

const GallerySliderContainer = ({ id }) => {
  return (
    <div className={styles.root}>
      <GallerySlider id={id} />
    </div>
  );
};

export default GallerySliderContainer;

GallerySliderContainer.propTypes = {
  id: PropTypes.string,
};
