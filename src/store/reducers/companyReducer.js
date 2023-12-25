// File: reducers/company.js
const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COMPANY_REQUEST':
        return { ...state, loading: true, error: null };
      case 'GET_COMPANY_SUCCESS':
        return { ...state, loading: false, data: action.payload, error: null };
      case 'GET_COMPANY_FAILURE':
        return { ...state, loading: false, data: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  