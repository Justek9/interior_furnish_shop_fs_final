import AddressForm from '../AddressForm/AddressForm';
import ProductsSummary from '../ProductsSummary/ProductsSummary';
import CartProductSummary from '../CartProductSummary/CartProductSummary';
import RemarksSummary from '../RemarksSummary/RemarksSummary';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const cartProducts = useSelector((state) => getAll(state));

  if (cartProducts.length === 0)
    return (
      <div className="container">
        <h3>Your cart is empty. Please add first product</h3>
        <Link to="/">Return to main page</Link>
      </div>
    );

  return (
    <>
      <h2>Cart summary</h2>
      <CartProductSummary />
      <RemarksSummary />
      <ProductsSummary />
      <AddressForm />
    </>
  );
};

export default CartSummary;
