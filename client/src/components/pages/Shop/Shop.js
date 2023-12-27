import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';

const Shop = () => {
  const products = useSelector((state) => getAllProducts(state));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {products.map((product, i) => (
        <ProductBox key={i} product={product} />
      ))}
    </div>
  );
};

export default Shop;
