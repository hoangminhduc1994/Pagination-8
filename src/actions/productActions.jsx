import axios from 'axios';

export const fetchProducts = (page, limit) => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });

  try {
    const response = await axios.get(`https://qcshp3-8080.csb.app/products?page=${page}&limit=${limit}`);
    dispatch({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error.message
    });
  }
};

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page
});
