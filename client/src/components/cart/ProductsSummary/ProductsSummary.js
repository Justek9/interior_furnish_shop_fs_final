import { useSelector } from 'react-redux';
import { getTotalAmount, getTotalQty } from '../../../redux/cartRedux';

import styles from './ProductsSummary.module.scss';

const ProductsSummary = () => {
  const shippingCost = 10;
  const totalQty = useSelector((state) => getTotalQty(state));
  const totalAmount =
    useSelector((state) => getTotalAmount(state)) + shippingCost;

  return (
    <div className="mt-4 mb-4">
      <div className={`flex-center ${styles.shipping}`}>
        <p>Shipping costs</p>
        <p>$ {shippingCost}</p>
      </div>
      <div className={`flex-center ${styles.summary}`}>
        <p>Total:</p>
        <p>
          {totalQty} <span>{totalQty > 1 ? 'pcs' : 'pc'}</span>
        </p>
        <p>$ {totalAmount}</p>
      </div>
    </div>
  );
};

export default ProductsSummary;
