const initialState = {
  subtypes: { loading: false, data: null, error: null },
  segments: { loading: false, data: null, error: null },
  products: { loading: false, data: null, error: null },
  productClasses: { loading: false, data: null, error: null },
};

export const staticDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBTYPES_REQUEST:
      return { ...state, subtypes: { loading: true, data: null, error: null } };
    case FETCH_SUBTYPES_SUCCESS:
      return { ...state, subtypes: { loading: false, data: action.payload, error: null } };
    case FETCH_SUBTYPES_FAILURE:
      return { ...state, subtypes: { loading: false, data: null, error: action.payload } };

    case FETCH_SEGMENTS_REQUEST:
      return { ...state, segments: { loading: true, data: null, error: null } };
    case FETCH_SEGMENTS_SUCCESS:
      return { ...state, segments: { loading: false, data: action.payload, error: null } };
    case FETCH_SEGMENTS_FAILURE:
      return { ...state, segments: { loading: false, data: null, error: action.payload } };

    case FETCH_PRODUCTS_REQUEST:
      return { ...state, products: { loading: true, data: null, error: null } };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: { loading: false, data: action.payload, error: null } };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, products: { loading: false, data: null, error: action.payload } };

    case FETCH_PRODUCT_CLASSES_REQUEST:
      return { ...state, productClasses: { loading: true, data: null, error: null } };
    case FETCH_PRODUCT_CLASSES_SUCCESS:
      return { ...state, productClasses: { loading: false, data: action.payload, error: null } };
    case FETCH_PRODUCT_CLASSES_FAILURE:
      return { ...state, productClasses: { loading: false, data: null, error: action.payload } };

    default:
      return state;
  }
};


// Action Creator
// For Subtypes
export const fetchSubtypes = () => async (dispatch) => {
  dispatch({ type: FETCH_SUBTYPES_REQUEST });
  try {
    const response = await axios.get('SUBTYPES_API_URL');
    dispatch({ type: FETCH_SUBTYPES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SUBTYPES_FAILURE, payload: error.message });
  }
};

// For Segments
export const fetchSegments = () => async (dispatch) => {
  dispatch({ type: FETCH_SEGMENTS_REQUEST });
  try {
    const response = await axios.get('SEGMENTS_API_URL');
    dispatch({ type: FETCH_SEGMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SEGMENTS_FAILURE, payload: error.message });
  }
};

// For Products
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axios.get('PRODUCTS_API_URL');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

// For Product Classes
export const fetchProductClasses = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_CLASSES_REQUEST });
  try {
    const response = await axios.get('PRODUCT_CLASSES_API_URL');
    dispatch({ type: FETCH_PRODUCT_CLASSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_CLASSES_FAILURE, payload: error.message });
  }
};
