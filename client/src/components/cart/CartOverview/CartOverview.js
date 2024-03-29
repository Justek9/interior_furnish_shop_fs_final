import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAll, emptyCart, updateRemarks } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import ProductsSummary from '../ProductsSummary/ProductsSummary';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';

import styles from './CartOverview.module.scss';

const CartOverview = () => {
  const cartProducts = useSelector((state) => getAll(state));
  const [orderRemarks, setOrderRemarks] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateRemarks(orderRemarks));
  }, [dispatch, orderRemarks]);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  if (cartProducts.length === 0)
    return (
      <div className="container">
        <h3>Your cart is empty. Please add first product</h3>
        <Link to="/">Return to main page</Link>
      </div>
    );

  return (
    <div>
      <h2>Cart summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Qty</th>
            <th scope="col">Total price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, i) => (
            <SingleCartProduct key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <textarea
        placeholder="Write your remarks here..."
        className={`w-75 ${styles.remarks}`}
        value={orderRemarks}
        onChange={(event) => {
          setOrderRemarks(event.target.value);
        }}
      ></textarea>
      <ProductsSummary />
      <div className="d-flex flex-column align-items-center flex-lg-row justify-content-evenly">
        <Link to="/">
          <Button text="Close cart" color="#282828"></Button>
        </Link>
        <Button
          text="Empty cart"
          color="#ccc6c6"
          onClick={handleEmptyCart}
        ></Button>
        <Link to="/cart-summary">
          <Button text="Checkout"></Button>
        </Link>
      </div>
    </div>
  );
};

export default CartOverview;
