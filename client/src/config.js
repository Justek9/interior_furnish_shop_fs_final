export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

export const IMGS_URL =
  process.env.NODE_ENV === 'production'
    ? '/assets/'
    : 'http://localhost:8000/assets/';
