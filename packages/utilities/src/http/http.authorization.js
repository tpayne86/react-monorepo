import axios from 'axios';
import {
  USER_ONE_NAME,
  USER_ONE_PAS,
  STAGE_ACCESS,
  PROXY_TO,
  isDev,
} from '@healthifyme/constants/lib/app/app.constants';

import { APP_LOGIN } from '@healthifyme/constants/lib/api/api.endpoints';

/**
 * @returns {Cookie} csrf
 * @description function return csrf Cookie
 */
export const getCsrfToken = () => {
  const csrf = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)');
  return csrf ? csrf.pop() : '';
};

/**
 * @param {string} url
 * @returns {string}
 * @description this function will check weather env is proxy to stage or not.
 * if proxy is to stage it will append and return new url with api key authentication
 */
export const getNewApiUrl = (url) => {
  // proxy origin will only be defined when developing and pointing to stage
  // it should be undefined when deploying
  if (!PROXY_TO) {
    return url;
  }
  let auth;
  let newUrl = url;
  if (PROXY_TO === 'staging') {
    auth = STAGE_ACCESS;
    if (url.indexOf('?') === -1) {
      newUrl = `${newUrl}?${auth}`;
    } else {
      newUrl = `${newUrl}&${auth}`;
    }
    return newUrl;
  }
  return newUrl;
};

export const interceptedConfig = (config) => {
  try {
    const copyConfig = { ...config };
    copyConfig.url = getNewApiUrl(copyConfig.url);
    copyConfig.headers.common = {
      ...copyConfig.headers.common,
      'X-CSRFToken': getCsrfToken(),
    };
    return copyConfig;
  } catch (e) {
    return config;
  }
};

// will allow login only when we are proxying to stage and is on Dev url
if (isDev) {
  window.attemptLogin = () =>
    axios
      .post(APP_LOGIN, {
        username: USER_ONE_NAME,
        password: USER_ONE_PAS,
      })
      .then(() => {
        console.log('login');// eslint-disable-line
      });
}
