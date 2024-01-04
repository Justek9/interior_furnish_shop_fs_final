import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import SearchPage from '../../pages/SearchPage/SearchPage';
import ProductBox from '../../features/ProductBox/ProductBox';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

const SearchResults = () => {
  const [productsToShow, setProductsToShow] = useState([]);
  const { searchPhrase } = useParams();
  const [status, setStatus] = useState(null);
  // null, 'loading', 'success', 'serverError', 'clientError'

  const dispatch = useDispatch();

  // fetch product by searchPhrase
  useEffect(() => {
    const fetchProductByPhrase = () => {
      fetch(`${API_URL}/products/search/${searchPhrase}`)
        .then((res) => {
          if (res.status === 200) {
            setStatus('success');
            return res.json();
          } else if (res.status === 404) {
            setStatus('clientError');
          } else {
            setStatus('serverError');
          }
        })
        .then((products) => {
          setProductsToShow([...products]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProductByPhrase();
  }, [searchPhrase, dispatch]);

  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'serverError')
    return <p>Error occured while fetching data...</p>;

  return (
    <>
      <SearchPage />
      <h2 className="mb-4">Show: {searchPhrase}</h2>
      {status === 'clientError' && (
        <p>Nothing matches your search results. Try again!</p>
      )}
      {status === 'success' && (
        <div className="d-flex flex-row flex-wrap justify-content-evenly">
          {productsToShow.map((product, i) => (
            <ProductBox key={i} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
