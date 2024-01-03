import Shop from '../Shop/Shop';

import { useSelector } from 'react-redux';
import { getIsError } from '../../../redux/isError';
import { getIsLoading } from '../../../redux/isLoading';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

const Home = () => {
  const isLoading = useSelector((state) => getIsLoading(state));
  const isError = useSelector((state) => getIsError(state));


  return (
    <>
      {!isLoading && !isError && <Shop />}
      {isError && <p>Error occured while fetching data...</p>}
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Home;
