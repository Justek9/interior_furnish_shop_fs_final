import { useSelector } from 'react-redux';
import { getTotalAmount, getTotalQty } from '../../../redux/cartRedux';

const ProductsSummary = () => {
  const shippingCost = 10;
  const totalQty = useSelector((state) => getTotalQty(state));
  const totalAmount =
    useSelector((state) => getTotalAmount(state)) + shippingCost;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Summary</th>
          <th scope="col">Qty</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shipping costs</td>
          <td>1</td>
          <td>$10</td>
        </tr>
        <tr>
          <td>
            <b>Total cost</b>
          </td>
          <td>
            <b>
              {totalQty} <span>{totalQty > 1 ? 'pcs' : 'pc'}</span>
            </b>
          </td>
          <td>
            <b>$ {totalAmount}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsSummary;
