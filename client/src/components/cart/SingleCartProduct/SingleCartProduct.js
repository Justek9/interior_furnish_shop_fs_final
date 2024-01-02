import styles from './SingleCartProduct.module.scss';

import { useDispatch } from 'react-redux';
import { deleteProduct, updateQty } from '../../../redux/cartRedux';
import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import {
  decrementQty,
  incrementQty,
  onChangeHandler,
} from '../../../utils/utils';

const SingleCartProduct = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product));
  };

  // update qty in order in redux
  useEffect(() => {
    dispatch(updateQty({ name: product.name, qty: qty }));
  }, [dispatch, product.name, qty]);

  return (
    <tr className={styles.row}>
      <td>
        <img src={product.image} alt={product.name} />
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
              onChangeHandler(e.target.value, setQty);
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
        <Button
          className="w-25"
          onClick={handleDeleteProduct}
          text="Delete"
          color="grey"
        ></Button>
      </td>
    </tr>
  );
};

export default SingleCartProduct;
