import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
} from '../actionTypes';

const initialState = {
  product: [],
  status: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        status: 'LOADING',
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        status: true,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};
export default product;
