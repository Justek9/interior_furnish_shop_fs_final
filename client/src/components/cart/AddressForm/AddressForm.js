import { addAddress, getCart } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import styles from './AddressForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

const AddressForm = () => {
  const [address, setAddress] = useState({
    name: '',
    lastName: '',
    flatNo: '',
    streetName: '',
    streetNo: '',
    postCode: '',
    city: '',
  });
  const [status, setStatus] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAddress(address));
  }, [dispatch, address]);

  const cart = useSelector(getCart);
  console.log(cart.products);

  const orderProducts = cart.products.map((product) => {
    return {
      name: product.name,
      price: product.price,
      qty: product.qty,
      remarks: product.remarks,
    };
  });

  const onClikHandler = (e) => {
    e.preventDefault();
    const orderAddress = Object.values(address).toString();

    const orderData = {
      address: orderAddress,
      products: orderProducts,
      shippingCost: 10,
      remarks: cart.orderRemarks.toString(),
    };
    const setSuccessStatusandNavigateToHomePage = () => {
      setTimeout(() => {
        setStatus('success');
        // navigate('/');
      }, 6000);
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${API_URL}/orders/create-order`, options)
      .then((res) => {
        if (res.status === 201) {
          setSuccessStatusandNavigateToHomePage();
        } else {
          setStatus('serverError');
        }
      })
      .catch(setStatus('serverError'));
  };

  return (
    <div className={styles.root}>
      <h2>Shipping Details</h2>
      <form
        className={`d-flex flex-column ${styles.container}`}
        onSubmit={onClikHandler}
      >
        <div>
          <div>
            <div className="inputContainer">
              <input
                required
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
              <label>Name</label>
            </div>
            <div className="inputContainer">
              <input
                value={address.lastName}
                onChange={(e) =>
                  setAddress({ ...address, lastName: e.target.value })
                }
                required
              />
              <label>Surname</label>
            </div>
            <div className="inputContainer">
              <input
                value={address.streetName}
                onChange={(e) =>
                  setAddress({ ...address, streetName: e.target.value })
                }
                required
              />
              <label>Street name </label>
            </div>
            <div className="inputContainer">
              <input
                type="number"
                min="0"
                value={address.streetNo}
                onChange={(e) =>
                  setAddress({ ...address, streetNo: e.target.value })
                }
                required
              />
              <label>Street number </label>
            </div>
          </div>
          <div>
            <div className="inputContainer">
              <input
                type="number"
                min="0"
                value={address.flatNo}
                onChange={(e) =>
                  setAddress({ ...address, flatNo: e.target.value })
                }
                required
              />
              <label>Flat number </label>
            </div>
            <div className="inputContainer">
              <input
                value={address.postCode}
                onChange={(e) =>
                  setAddress({ ...address, postCode: e.target.value })
                }
                required
              />
              <label>Post code</label>
            </div>
            <div className="inputContainer">
              <input
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                required
              />
              <label>City</label>
            </div>
          </div>
        </div>
        <div>
          <Button
            text="Order"
            onClick={(e) => onClikHandler(e)}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
