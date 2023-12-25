// File: actions.js
import axios from 'axios';

// Action Types
export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST';
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS';
export const GET_COMPANY_FAILURE = 'GET_COMPANY_FAILURE';


// Action Creators
export const getCompanyRequest = () => ({
  type: GET_COMPANY_REQUEST,
});

export const getCompanySuccess = (data) => ({
  type: GET_COMPANY_SUCCESS,
  payload: data,
});

export const getCompanyFailure = (error) => ({
  type: GET_COMPANY_FAILURE,
  payload: error,
});

export const getCompany = () => {
  return async (dispatch) => {
    dispatch(getCompanyRequest());

    try {
      const token =localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get('http://localhost:3001/api/company/getCategory', { headers });
      // console.log('>> Company',response)
      
      dispatch(getCompanySuccess(response.data));
    } catch (error) {
      dispatch(getCompanyFailure(error.message));
    }
  };
};


export const login = (email, password) => {
  console.log("<>>> here",email,password);
    return async (dispatch) => {
      try {
        dispatch({ type: 'LOGIN_REQUEST' });
  
        const response = await axios.post(
          'http://localhost:3001/api/auth/login',
          { email, password },
          { headers: { 'Content-Type': 'application/json' } }
        );
        if (response.data.isVerify) {
          const authToken = response.data.masterToken;
          localStorage.setItem('authToken', authToken);
          // dispatch({ type: 'LOGIN_SUCCESS', payload: { authToken } });
        } 
        else {
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid username or password' });
        }
      } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      }
    };
  };
  
  export const logout = () => {
    return { type: 'LOGOUT' };
  };
  
 
 