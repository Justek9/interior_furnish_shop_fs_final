import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import Button from '../../common/Button/Button';
// import Button from '../../common/Button/Button';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import ShowGallerySlider from '../../views/GallerySliderContainer/GallerySliderContainer';

import styles from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [productToShow, setProductToShow] = useState(null);
  const [showRemarks, setShowRemarks] = useState(false);
  const [qty, setQty] = useState(1);
  const [shake, setShake] = useState(false);
  const [showFlyer, setShowFlyer] = useState(false);

  const handleShowRemarks = (e) => {
    e.preventDefault();
    setShowRemarks(!showRemarks);
  };

  // fetch product by id
  useEffect(() => {
    const fetchProductById = () => {
      fetch(`${API_URL}/products/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
          setProductToShow(product);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProductById();
  }, [id]);

  // manage qty change
  const maxQty = 1000;
  const minQty = 1;

  const onChangeHandler = (value) => {
    if (value > maxQty) {
      setQty(maxQty);
    } else if (value < minQty) {
      setQty(minQty);
    } else {
      setQty(value);
    }
  };

  const decrementQty = (e) => {
    e.preventDefault();
    if (qty > minQty) {
      setQty(qty - 1);
    }
  };

  const incrementQty = (e) => {
    e.preventDefault();
    if (qty < maxQty) {
      setQty(qty + 1);
    } else if (qty > maxQty) {
      setQty(maxQty);
    }
  };

  const onAddToCartHandler = (e) => {
    e.preventDefault();
    setShake(true);
    setShowFlyer(true);
    setTimeout(() => setShake(false), 2000);
  };

  const hideFlyOutHandler = (e) => {
    e.preventDefault();
    setShowFlyer(false);
  };
  if (!productToShow) return <LoadingSpinner />;

  return (
    <Container>
      <ShowGallerySlider id={id} />
      <div className={styles.card}>
        <Card.Body>
          <Card.Title>{productToShow.name}</Card.Title>
          <Card.Text>{productToShow.description}</Card.Text>
          <Card.Text>
            <b>Price:</b> ${productToShow.price}
          </Card.Text>

          <div className="d-flex flex-column align-items-start">
            <button
              className={styles.btnRemarks}
              onClick={(e) => handleShowRemarks(e)}
            >
              Add remarks
            </button>
            {showRemarks && (
              <textarea
                placeholder="Write your remarks here..."
                className={styles.remarks}
              ></textarea>
            )}
          </div>
          <form>
            <div className="py-1 my-1">
              <button
                className={styles.qtyBtn}
                onClick={(e) => decrementQty(e)}
              >
                -
              </button>
              <input
                required
                type="number"
                name="qty"
                value={qty}
                onChange={onChangeHandler}
                className={styles.qtyInput}
              />
              <button
                onClick={(e) => incrementQty(e)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </form>
          <div className={styles.btnContaier}>
            <button
              onClick={onAddToCartHandler}
              className={`${styles.btn} ${shake ? `${styles.shake}` : ''}`}
            >
              Add to cart
            </button>
          </div>
        </Card.Body>
        <div
          className={`${styles.flyOutContainer} ${
            showFlyer ? `${styles.visible}` : ''
          } `}
        ></div>
        <div
          className={`${styles.flyOut} ${
            showFlyer ? `${styles.visible}` : ''
          } `}
        >
          <div
            className={`flex-center flex-column align-items-start ${styles.flyoutContent}`}
          >
            <p>
              <b>{productToShow.name}</b> added to cart successfully
            </p>
            <Link to="/cart">
              <Button text="Go to cart" />
            </Link>
            <Button text="Keep shopping" onClick={hideFlyOutHandler} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
