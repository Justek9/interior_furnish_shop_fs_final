import Button from '../../common/Button/Button';
import Form from 'react-bootstrap/Form';
import { addAddress, emptyCart, getCart } from '../../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { API_URL } from '../../../config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import styles from './AddressForm.module.scss';
import { setConstantValue } from 'typescript';

const AddressForm = () => {
  const cart = useSelector(getCart);
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
  // null, success, serverError

  const lName = useRef('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // validate address
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
    setValue,
  } = useForm();

  // save address in redux
  useEffect(() => {
    setValue('lastName', lName.current.value);
    dispatch(addAddress({ ...address }));
  }, [dispatch, address]);

  // build order products
  const orderProducts = cart.products.map((product) => {
    return {
      name: product.name,
      price: product.price,
      qty: product.qty,
      remarks: product.remarks,
    };
  });

  // send order to db
  const onSubmitFormHandler = () => {
    const orderAddress = Object.values(address).toString();
    const orderData = {
      address: orderAddress,
      products: orderProducts,
      shippingCost: cart.shippingCost,
      discount: cart.discount,
      remarks: cart.orderRemarks.toString(),
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
          setStatus('success');
          setAddress({
            name: '',
            lastName: '',
            flatNo: '',
            streetName: '',
            streetNo: '',
            postCode: '',
            city: '',
          });
        } else {
          setStatus('serverError');
        }
      })
      .then(
        setTimeout(() => {
          dispatch(emptyCart());
          navigate('/');
        }, 5000),
      )
      .catch(setStatus('serverError'));
  };

  return (
    <div className={styles.root}>
      <h2>Shipping Details</h2>

      <Form
        onSubmit={validate(onSubmitFormHandler)}
        className={`d-flex flex-column ${styles.container}`}
        autoComplete="on"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register('name', { required: true })}
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
            type="text"
            placeholder="Enter name"
            autoComplete="on"
          />
          {errors.name && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLAstName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            {...register('lastName', { required: true })}
            value={address.lastName}
            onChange={(e) =>
              setAddress({ ...address, lastName: e.target.value })
            }
            type="text"
            placeholder="Enter last name"
            autoComplete="on"
            ref={lName}
          />
          {errors.lastName && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStreetName">
          <Form.Label>Street name</Form.Label>
          <Form.Control
            {...register('streetName', { required: true })}
            value={address.streetName}
            onChange={(e) =>
              setAddress({ ...address, streetName: e.target.value })
            }
            type="text"
            placeholder="Enter street name"
            autoComplete="on"
          />
          {errors.streetName && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStreetNo">
          <Form.Label>Street no</Form.Label>
          <Form.Control
            {...register('streetNo', { required: true, min: 0 })}
            value={address.streetNo}
            onChange={(e) =>
              setAddress({ ...address, streetNo: e.target.value })
            }
            type="number"
            placeholder="Enter street no"
            autoComplete="on"
          />
          {errors.streetNo && (
            <small className="d-block form-text text-danger mt-2">
              This field is required and should not be less than 0
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFlatNo">
          <Form.Label>Flat no</Form.Label>
          <Form.Control
            {...register('flatNo', { required: false, min: 0 })}
            value={address.flatNo}
            onChange={(e) => setAddress({ ...address, flatNo: e.target.value })}
            type="number"
            placeholder="Enter flat no"
            autoComplete="on"
          />
          {errors.flatNo && (
            <small className="d-block form-text text-danger mt-2">
              This field is required and should not be less than 0
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPostCode">
          <Form.Label>Post code</Form.Label>
          <Form.Control
            {...register('postCode', { required: true, min: 0 })}
            value={address.postCode}
            onChange={(e) =>
              setAddress({ ...address, postCode: e.target.value })
            }
            type="number"
            placeholder="Enter post code"
            autoComplete="on"
          />
          {errors.postCode && (
            <small className="d-block form-text text-danger mt-2">
              This field is required and should not be less than 0
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            {...register('city', { required: true })}
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            type="text"
            placeholder="Enter city"
            autoComplete="on"
          />
          {errors.city && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
        <div>
          <Button text="Order" type="submit" />
        </div>
      </Form>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>Your order has been placed.</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Try again!.</p>
        </Alert>
      )}
    </div>
  );
};

export default AddressForm;
