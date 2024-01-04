import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, updateQty } from '../../../redux/cartRedux';
import { useEffect, useState } from 'react';
import {
  decrementQty,
  incrementQty,
  onChangeHandler,
} from '../../../utils/utils';
import { getMainIMG } from '../../../redux/productsRedux';
import { IMGS_URL } from '../../../config';
import PropTypes from 'prop-types';

import styles from './SingleCartProduct.module.scss';

const SingleCartProduct = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const img = useSelector((state) => getMainIMG(state, product.id));

  const dispatch = useDispatch();

  // delete product from cart
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product));
  };

  // update qty in order 
  useEffect(() => {
    dispatch(updateQty({ name: product.name, qty: qty }));
  }, [dispatch, product.name, qty]);

  return (
    <>
      <tr className={styles.row}>
        <td>
          <img
            src={IMGS_URL + img}
            alt={product.name}
            className={styles.cartIMG}
          />
        </td>
        <td>
          <form>
            <button
              onClick={(e) => {
                e.preventDefault();
                decrementQty(qty, setQty);
              }}
              className={styles.qtyBtn}
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
          </form>
        </td>
        <td>$ {product.price * product.qty}</td>

        <td>
          <button
            className={`w-25 ${styles.deleteBtn}`}
            onClick={handleDeleteProduct}
            text="Delete"
          >
            Delete
          </button>
        </td>
      </tr>
      {product.remarks && (
        <tr>
          <td>{product.remarks}</td>
        </tr>
      )}
    </>
  );
};

export default SingleCartProduct;

SingleCartProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
