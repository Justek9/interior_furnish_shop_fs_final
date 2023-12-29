import { useSelector } from 'react-redux';
import { getImgs } from '../../../redux/productsRedux';
import GallerySlider from '../../features/GallerySlider/GallerySlider';

import styles from './GallerySliderContainer.module.scss';

const GallerySliderContainer = ({ id }) => {
  const slides = useSelector((state) => getImgs(state, id));

  return (
    <div className={styles.root}>
      <GallerySlider slides={slides} />
    </div>
  );
};

export default GallerySliderContainer;
