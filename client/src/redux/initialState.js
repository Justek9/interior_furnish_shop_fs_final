const initialState = {
  products: [],
  user: null,
  isError: false,
  isLoading: false,
  cart: {
    products: [],
    address: {},
    orderRemarks: '',
    shippingCost: 10,
    discount: 0,
  },
};

export default initialState;
