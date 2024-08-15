const initialState = {
  products: [],
  loading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 4,
  totalItems: 0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        totalItems: action.payload.totalItems
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default productReducer;
