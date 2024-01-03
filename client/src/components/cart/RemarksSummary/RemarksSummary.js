import { useSelector } from 'react-redux';
import {
  getOrderRemarks,
  getProductNamesAndRemarks,
  getProductRemarks,
} from '../../../redux/cartRedux';

const RemarksSummary = () => {
  const productsRemarksAndNames = useSelector((state) =>
    getProductNamesAndRemarks(state),
  );
  const orderRemarks = useSelector((state) => getOrderRemarks(state));
  const productRemarks = useSelector((state) => getProductRemarks(state));
  console.log(productRemarks);

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
