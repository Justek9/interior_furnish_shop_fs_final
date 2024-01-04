import Shop from '../Shop/Shop';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

import { useSelector } from 'react-redux';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getIsError } from '../../../redux/isErrorRedux';

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
