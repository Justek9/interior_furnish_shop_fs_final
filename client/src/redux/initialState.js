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
  },
};

export default initialState;
