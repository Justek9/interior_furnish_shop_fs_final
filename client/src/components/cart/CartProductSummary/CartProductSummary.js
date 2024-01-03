import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';

const CartProductSummary = () => {
  const cartProducts = useSelector(getAll);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Qty</th>
          <th scope="col">Total price</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product, i) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.qty}</td>
            <td>$ {product.price * product.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartProductSummary;
