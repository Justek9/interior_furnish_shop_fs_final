import { createSelector } from 'reselect';

/* selectors */
export const getCount = ({ cart }) => cart.products.length;
export const getCart = ({ cart }) => cart;
export const getAll = ({ cart }) => cart.products;
export const getTotalQty = ({ cart }) =>
  cart.products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0,
  );
export const getTotalAmount = ({ cart }) => {
  const amount = cart.products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty,
    0,
  );
  const discount = cart.discount / 100;
  return amount - amount * discount;
};

export const memoizedGetProductRemarks = createSelector(getCart, (cart) =>
  // eslint-disable-next-line array-callback-return
  cart.products.filter((product) => {
    if (product.remarks !== '') return product.remarks;
  }),
);

export const memoizedGetProductNamesAndRemarks = createSelector(
  getCart,
  (cart) =>
    // eslint-disable-next-line array-callback-return
    cart.products.map((product) => {
      if (product.remarks !== '')
        return ` ${product.name}: ${product.remarks} `;
    }),
);

export const getOrderRemarks = ({ cart }) => cart.orderRemarks;
export const getAddress = ({ cart }) => cart.address;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const EMPTY_CART = createActionName('EMPTY_CART');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const UPDATE_PRODUCT = createActionName('UPDATE_PRODUCT');
const UPDATE_REMARKS = createActionName('UPDATE_REMARKS');
const UPDATE_QTY = createActionName('UPDATE_QTY');
const ADD_ADDRESS = createActionName('ADD_ADDRESS');
const UPDATE_DISCOUNT = createActionName('UPDATE_DISCOUNT');

/* action creators */
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const emptyCart = () => ({ type: EMPTY_CART });
export const deleteProduct = (payload) => ({ payload, type: DELETE_PRODUCT });
export const updateProduct = (payload) => ({ payload, type: UPDATE_PRODUCT });
export const updateRemarks = (payload) => ({ payload, type: UPDATE_REMARKS });
export const updateQty = (payload) => ({ payload, type: UPDATE_QTY });
export const addAddress = (payload) => ({ payload, type: ADD_ADDRESS });
export const updateDiscount = (payload) => ({ payload, type: UPDATE_DISCOUNT });

/* reducer */
export default function cartReucer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [
          ...statePart.products,
          {
            ...action.payload.product,
          },
        ],
      };
    }

    case UPDATE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.name === action.payload.product.name
            ? {
                ...product,
                qty: product.qty + action.payload.product.qty,
                price: action.payload.product.price,
                remarks: action.payload.product.remarks,
              }
            : product,
        ),
      };
    }

    case UPDATE_REMARKS: {
      return {
        ...statePart,
        orderRemarks: action.payload,
      };
    }
    case UPDATE_QTY: {
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.name === action.payload.name
            ? {
                ...product,
                qty: action.payload.qty,
              }
            : product,
        ),
      };
    }

    case UPDATE_DISCOUNT: {
      return { ...statePart, discount: Number(action.payload) };
    }

    case EMPTY_CART: {
      return {
        products: [],
        address: {},
        orderRemarks: [],
        discount: 0,
        shippingCost: 10,
      };
    }

    case DELETE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.name !== action.payload.name,
        ),
      };
    }

    case ADD_ADDRESS: {
      return { ...statePart, address: { ...action.payload } };
    }

    default:
      return statePart;
  }
}
