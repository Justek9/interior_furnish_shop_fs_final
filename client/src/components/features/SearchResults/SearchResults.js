import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import SearchPage from '../../pages/SearchPage/SearchPage';
import ProductBox from '../../features/ProductBox/ProductBox';

const SearchResults = () => {
  const [productsToShow, setProductsToShow] = useState([]);
  const { searchPhrase } = useParams();
  const navigate = useNavigate();

  // fetch product by searchPhrase
  useEffect(() => {
    const fetchProductByPhrase = () => {
      fetch(`${API_URL}/products/search/${searchPhrase}`)
        .then((res) => {
          return res.json();
        })
        .then((products) => {
          setProductsToShow(products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProductByPhrase();
  }, [searchPhrase]);

  if (!productsToShow) return navigate('/');

  return (
    <>
      <SearchPage />
      <h2 className="mb-4">Show: {searchPhrase}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        {productsToShow.map((product, i) => (
          <ProductBox key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
