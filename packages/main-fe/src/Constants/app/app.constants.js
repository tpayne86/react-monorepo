/* global process:true */
const {
  API_KEY,
  PROXY_USER,
  PROXY_USER_META,
  FACEBOOK_NIKAH_MAIN_FE,
} = process.env;
export const STAGE_ACCESS = window.atob(API_KEY || '');
export const USER_ONE_NAME = window.atob(PROXY_USER || '');
export const USER_ONE_PAS = window.atob(PROXY_USER_META || '');
export const FACEBOOK_APP_ID = FACEBOOK_NIKAH_MAIN_FE;

export const ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
};
export const ALERT_MESSAGES = {
  GENERIC: 'Some Error occured. Please try again',
};
export const USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert',
};
