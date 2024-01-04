import { useSelector } from 'react-redux';
import {
  getOrderRemarks,
  memoizedGetProductNamesAndRemarks,
  memoizedGetProductRemarks,
} from '../../../redux/cartRedux';

const RemarksSummary = () => {
  const productsRemarksAndNames = useSelector((state) =>
    memoizedGetProductNamesAndRemarks(state),
  );
  const orderRemarks = useSelector((state) => getOrderRemarks(state));
  const productRemarks = useSelector((state) =>
    memoizedGetProductRemarks(state),
  );

  return (
    <>
      {productRemarks.length !== 0 && (
        <div>
          <b>Products' remarks:</b>
          {productsRemarksAndNames.map((remark, i) => (
            <p key={i}>{remark}</p>
          ))}
        </div>
      )}
      {orderRemarks && (
        <div>
          <b>Order remarks: </b>
          {orderRemarks}
        </div>
      )}
    </>
  );
};

export default RemarksSummary;
