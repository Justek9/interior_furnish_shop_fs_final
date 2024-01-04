import AddressForm from '../AddressForm/AddressForm';
import ProductsSummary from '../ProductsSummary/ProductsSummary';
import CartProductSummary from '../CartProductSummary/CartProductSummary';
import RemarksSummary from '../RemarksSummary/RemarksSummary';

const CartSummary = () => {
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
