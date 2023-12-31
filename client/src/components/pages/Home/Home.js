import Shop from '../Shop/Shop';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsError } from '../../../redux/isError';
import { getIsLoading } from '../../../redux/isLoading';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { fetchProducts } from '../../../redux/productsRedux';

const Home = () => {
  const isLoading = useSelector((state) => getIsLoading(state));
  const isError = useSelector((state) => getIsError(state));

  const dispatch = useDispatch();

  // fetch products from server and add them to redux state
  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <>
      {!isLoading && !isError && <Shop />}
      {isError && <p>Error occured while fetching data...</p>}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Home;
