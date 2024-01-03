import AddressForm from '../AddressForm/AddressForm';
import ProductsSummary from '../ProductsSummary/ProductsSummary';
import CartProductSummary from '../CartProductSummary/CartProductSummary';
import RemarksSummary from '../RemarksSummary/RemarksSummary';

const CartSummary = () => {
  return (
    <>
      <CartProductSummary />
      <RemarksSummary />
      <ProductsSummary />
      <AddressForm />
    </>
  );
};

export default CartSummary;
