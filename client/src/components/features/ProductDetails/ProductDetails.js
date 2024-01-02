import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { addProduct, getAll, updateProduct } from '../../../redux/cartRedux';
import {
  decrementQty,
  incrementQty,
  onChangeHandler,
} from '../../../utils/utils';
import Button from '../../common/Button/Button';
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
  const [remarks, setRemarks] = useState('');
  const allCartProducts = useSelector((state) => getAll(state));
  const dispatch = useDispatch();

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

  // show/hide input for remrks
  const handleShowRemarks = (e) => {
    e.preventDefault();
    setShowRemarks(!showRemarks);
  };

  // build cart product
  const cartProduct = {
    product: {
      name: productToShow?.name,
      price: productToShow?.price,
      qty: qty,
      remarks: remarks,
      id: productToShow?.id,
    },
  };

  // add to cart: shake button, add product to cart, show flyout
  const addToCartHandler = (e) => {
    e.preventDefault();
    setShake(true);
    setTimeout(() => setShake(false), 2000);

    // check if product is already in cart, if yes update cart, otherwise add to cart
    allCartProducts.find((product) => product.name === cartProduct.product.name)
      ? dispatch(updateProduct(cartProduct))
      : dispatch(addProduct(cartProduct));

    setShowFlyer(true);
  };

  // hide flyout
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
                value={remarks}
                onChange={(event) => setRemarks(event.target.value)}
              ></textarea>
            )}
          </div>
          <form>
            <div className="py-1 my-1">
              <button
                className={styles.qtyBtn}
                onClick={(e) => {
                  e.preventDefault();
                  decrementQty(qty, setQty);
                }}
              >
                -
              </button>
              <input
                required
                type="number"
                name="qty"
                value={qty}
                onChange={(e) => {
                  onChangeHandler(Number(e.target.value), setQty);
                }}
                className={styles.qtyInput}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  incrementQty(qty, setQty);
                }}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </form>
          <div className={styles.btnContaier}>
            <button
              onClick={addToCartHandler}
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
