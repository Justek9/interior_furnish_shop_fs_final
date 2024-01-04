import { API_URL } from '../config';
import { createSelector } from 'reselect';
import { setLoading } from './isLoadingRedux';
import { setError } from './isErrorRedux';

// selectors
export const getAllProducts = ({ products }) => {
  return products;
};

export const memoizedGetImgs = createSelector(
  getAllProducts,
  (_, id) => id,
  (products, id) => {
    const imgs = products
      .filter((product) => product.id === id)
      .flatMap((product) => product.imgs.map((img) => `${img.photo}`));

    return imgs;
  },
);

export const getMainIMG = ({ products }, id) => {
  const img = products
    .filter((product) => product.id === id)
    .flatMap((product) => product.imgs.map((img) => `${img.photo}`))[0];

  return img;
};

export const memoizedGetNewProducts = createSelector(
  getAllProducts,
  (products) => products.filter((product) => product.isNew === true),
);

export const memoizedGetShelves = createSelector(getAllProducts, (products) =>
  products.filter((product) => product.category === 'shelves'),
);

export const memoizedGetCubes = createSelector(getAllProducts, (products) =>
  products.filter((product) => product.category === 'storage organizers'),
);

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS ');

// action creators
export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });

// fetch all products
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    fetch(`${API_URL}/products`)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        dispatch(setLoading(false));
        dispatch(loadProducts(products));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setError(true));
        console.log(error);
      });
  };
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default productsReducer;
