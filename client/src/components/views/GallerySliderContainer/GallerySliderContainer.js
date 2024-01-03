import GallerySlider from '../../features/GallerySlider/GallerySlider';

import styles from './GallerySliderContainer.module.scss';

const GallerySliderContainer = ({ id }) => {
  return (
    <div className={styles.root}>
      <GallerySlider id={id} />
    </div>
  );
};

export default GallerySliderContainer;
