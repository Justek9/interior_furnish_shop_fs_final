import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAllProducts,
  memoizedGetCubes,
  memoizedGetNewProducts,
  memoizedGetShelves,
} from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';

const ProductByCategory = () => {
  const { category } = useParams();
  const [productsToShow, setProductsToShow] = useState([]);

  const products = useSelector((state) => getAllProducts(state));
  const newProducts = useSelector((state) => memoizedGetNewProducts(state));
  const cubes = useSelector((state) => memoizedGetCubes(state));
  const shelves = useSelector((state) => memoizedGetShelves(state));

  // Set productsToShow based on category
  useEffect(() => {
    switch (category) {
      case 'all':
        setProductsToShow(products);
        break;
      case 'new':
        setProductsToShow(newProducts);
        break;
      case 'shelves':
        setProductsToShow(shelves);
        break;
      case 'cubes':
        setProductsToShow(cubes);
        break;
      default:
        setProductsToShow([]);
        break;
    }
  }, [category, cubes, shelves, newProducts, products]);

  return (
    <>
      <h2 className="mb-4">Show: {category}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {productsToShow.map((product, i) => (
          <ProductBox key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductByCategory;
