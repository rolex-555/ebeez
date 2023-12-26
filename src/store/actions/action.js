import axios from 'axios';
import {COMPANY_GET} from '../../index';

// Action Types
export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST';
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS';
export const GET_COMPANY_FAILURE = 'GET_COMPANY_FAILURE';

export const GET_ALLCOMPANY_REQUEST = 'GET_ALLCOMPANY_REQUEST';
export const GET_ALLCOMPANY_SUCCESS = 'GET_ALLCOMPANY_SUCCESS';
export const GET_ALLCOMPANY_FAILURE = 'GET_ALLCOMPANY_FAILURE';

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

export const getAllCompanyRequest = () => ({
  type: GET_ALLCOMPANY_REQUEST,
});

export const getAllCompanySuccess = (data) => ({
  type: GET_ALLCOMPANY_SUCCESS,
  payload: data,
});

export const getAllCompanyFailure = (error) => ({
  type: GET_ALLCOMPANY_FAILURE,
  payload: error,
});



export const login = (email, password) => {
    return async (dispatch) => {
      try {
        dispatch({ type: 'LOGIN_REQUEST' });
  
        const response = await axios.post(
          // process.env.REACT_BASE_URL_LOGIN,
          'https://ebeez.onrender.com/api/auth/login',
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

  export const getCompany = () => {
    return async (dispatch) => {
      dispatch(getCompanyRequest());
  
  
      try {
        const token =localStorage.getItem('authToken');
        const response = await axios.get('https://ebeez.onrender.com/api/company/getCategory', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        
        dispatch(getCompanySuccess(response.data));
      } catch (error) {
        dispatch(getCompanyFailure(error.message));
      }
    };
  };
  export const getAllCompany = () => {
    return async (dispatch) => {
      dispatch(getAllCompanyRequest());
  
  
      try {
        const token =localStorage.getItem('authToken');
        const response = await axios.get('https://ebeez.onrender.com/api/company/getCompany', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        
        dispatch(getAllCompanySuccess(response.data));
      } catch (error) {
        dispatch(getAllCompanyFailure(error.message));
      }
    };
  };
  export const logout = () => {
    return { type: 'LOGOUT' };
  };
  
 
 