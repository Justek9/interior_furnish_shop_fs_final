import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAllProducts,
  getCubes,
  getNewProducts,
  getShelves,
} from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';

const ProductByCategory = () => {
  const { category } = useParams();
  const [productsToShow, setProductsToShow] = useState([]);

  const products = useRef(useSelector((state) => getAllProducts(state)));
  const newProducts = useRef(useSelector((state) => getNewProducts(state)));
  const cubes = useRef(useSelector((state) => getCubes(state)));
  const shelves = useRef(useSelector((state) => getShelves(state)));

  // Set productsToShow based on category
  useEffect(() => {
    switch (category) {
      case 'all':
        setProductsToShow(products.current);
        break;
      case 'new':
        setProductsToShow(newProducts.current);
        break;
      case 'shelves':
        setProductsToShow(shelves.current);
        break;
      case 'cubes':
        setProductsToShow(cubes.current);
        break;
      default:
        setProductsToShow([]);
        break;
    }
  }, [category, cubes, shelves, newProducts, products]);

  return (
    <>
      <h2 className="mb-4">Show: {category}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {productsToShow.map((product, i) => (
          <ProductBox key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductByCategory;
