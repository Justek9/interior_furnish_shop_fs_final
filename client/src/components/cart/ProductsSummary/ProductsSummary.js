import { useSelector } from 'react-redux';
import { getCart, getTotalAmount, getTotalQty } from '../../../redux/cartRedux';
import { getUser } from '../../../redux/userRedux';

const ProductsSummary = () => {
  const shippingCost = useSelector((state) => getCart(state)).shippingCost;
  const totalQty = useSelector((state) => getTotalQty(state));
  const totalAmount =
    useSelector((state) => getTotalAmount(state)) + shippingCost;
  const discount = useSelector((state) => getCart(state)).discount;
  const loggedUSer = useSelector((state) => getUser(state));

  return (
    <table className="table">
      <thead>
        <tr colSpan={3}>
          <th scope="col" colSpan={3}>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shipping costs</td>
          <td>$10</td>
        </tr>
        {loggedUSer && (
          <tr>
            <td>Discount:</td>
            <td colSpan={2}>{discount} %</td>
          </tr>
        )}
        <tr>
          <td>
            <b>Total</b>
          </td>
          <td>
            <b>
              {totalQty}
              <span>
                {totalQty > 1 ? 'pcs' : 'pc'} $ {totalAmount}
              </span>
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsSummary;
