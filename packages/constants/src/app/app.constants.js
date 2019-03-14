/* global process:true */
const {
  API_KEY,
  PROXY_USER,
  PROXY_USER_META,
  NODE_ENV = 'production',
  PROXY_ORIGIN,
} = process.env;
export const STAGE_ACCESS = window.atob(API_KEY || '');
export const USER_ONE_NAME = window.atob(PROXY_USER || '');
export const USER_ONE_PAS = window.atob(PROXY_USER_META || '');
export const isDev = NODE_ENV.trim() === 'development';
export const isProd = NODE_ENV.trim() === 'production';
export const PROXY_TO = PROXY_ORIGIN;

export const ROUTE_ERROR = {
  INVALID_ROUTE: 'INVALID_ROUTE',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
};
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const TIME_PARAMS = {
  AM: 'AM',
  PM: 'PM',
};
export const TIME_SLOTS = {
  MORNING: 'Morning Slot',
  AFTERNOON: 'Afternoon Slot',
  EVENING: 'Evening Slot',
  LATE_EVENING: 'Late Evening Slot',
};
export const USER_ROLES = {
  CSM: 'csm,',
  USER: 'user',
  ADMIN: 'admin',
  EXPERT: 'expert',
};
export const ALERT_TYPES = {
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  DISABLE: 'DISABLE',
};
