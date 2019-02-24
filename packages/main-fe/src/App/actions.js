import {
  FACEBOOK_LOGIN,
  FACEBOOK_LOGIN_LOADING,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILURE,
  FACEBOOK_GET_LOCAL_DATA,
} from './actionTypes';

export const facebookLogin = (payload) => ({
  type: FACEBOOK_LOGIN,
  payload,
});
export const facebookLoginLoading = () => ({
  type: FACEBOOK_LOGIN_LOADING,
});
export const facebookLoginSuccess = (payload) => ({
  type: FACEBOOK_LOGIN_SUCCESS,
  payload,
});
export const facebookLoginFailure = (payload) => ({
  type: FACEBOOK_LOGIN_FAILURE,
  payload,
});

export const facebookLocalData = () => ({
  type: FACEBOOK_GET_LOCAL_DATA,
});
