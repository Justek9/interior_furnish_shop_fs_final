import { API_URL } from '../config';
import { createSelector } from 'reselect';

// selectors
export const getAllProducts = ({ products }) => {
  return products;
};

export const getImgs = ({ products }, id) => {
  const imgs = products
    .filter((product) => product.id === id)
    .flatMap((product) => product.imgs.map((img) => `${img.photo}`));

  return imgs;
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

export const getNewProducts = ({ products }) => {
  return products.filter((product) => product.isNew === true);
};

export const getShelves = ({ products }) => {
  return products.filter((product) => product.category === 'shelves');
};

export const getCubes = ({ products }) => {
  return products.filter(
    (product) => product.category === 'storage organizers',
  );
};

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS ');

// action creators
export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });

// fetch all products
export const fetchProducts = () => {
  return (dispatch) => {
    fetch(`${API_URL}/products`)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        dispatch(loadProducts(products));
      })
      .catch((error) => {
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
