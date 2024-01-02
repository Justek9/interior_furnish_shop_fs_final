/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getCart = ({ cart }) => cart;
export const getTotalQty = ({ cart }) =>
  cart.products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0,
  );
export const getTotalAmount = ({ cart }) =>
  cart.products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty,
    0,
  );

export const getRemarks = ({ cart }) =>
  cart.products.map((product) => ` ${product.name}: ${product.remarks} `);

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

/* action creators */
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const emptyCart = () => ({ type: EMPTY_CART });
export const deleteProduct = (payload) => ({ payload, type: DELETE_PRODUCT });
export const updateProduct = (payload) => ({ payload, type: UPDATE_PRODUCT });
export const updateRemarks = (payload) => ({ payload, type: UPDATE_REMARKS });
export const updateQty = (payload) => ({ payload, type: UPDATE_QTY });
export const addAddress = (payload) => ({ payload, type: ADD_ADDRESS });

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
      console.log(action.payload);
      // prettier-ignore
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.name === action.payload.product.name ? {
            ...product,
            qty: product.qty + action.payload.product.qty,
            price: action.payload.product.price,
            remarks: action.payload.product.remarks
          }
            : product
        ),

      };
    }

    case UPDATE_REMARKS: {
      // prettier-ignore
      return {
        ...statePart,
        orderRemarks: [action.payload],
      };
    }
    case UPDATE_QTY: {
      // prettier-ignore
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.name === action.payload.name ? {
            ...product, qty: action.payload.qty}
            : product
        ),
      };
    }

    case EMPTY_CART: {
      return {
        ...statePart,
        products: [],
        totalAmount: 20,
        totalQty: 0,
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
