import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IMGS_URL } from '../../../config';

import styles from './GallerySlider.module.scss';

const GallerySlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToPrevious = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.root}>
      <div
        className={`flex-center ${styles.arrow}`}
        style={{ left: '32px' }}
        onClick={goToPrevious}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        className={`flex-center ${styles.arrow}`}
        style={{ right: '32px' }}
        onClick={goToNext}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>

      <div className={styles.slideStyles}>
        <img src={IMGS_URL + slides[currentIndex]} alt="product" />
      </div>
    </div>
  );
};

export default GallerySlider;
