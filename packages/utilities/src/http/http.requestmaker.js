import axios from 'axios';

import { interceptedConfig } from './http.authorization';

/**
 * @param {String} url
 * @description generated a http get request for the specified url.
 * @returns {Promise}
 */

export const httpGet = (url) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
        reject({ //eslint-disable-line
            data: err.response.data,
            status: err.response.status,
            statusText: err.response.statusText,
        });//eslint-disable-line
        } else {
        reject({ // eslint-disable-line
            data: {
              reason: 'Bad Request',
            },
            status: 400,
            statusText: 'Bad Request',
          });
        }
      });
  });

/**
 * @param {String} url
 * @param {Object} data
 * @description generated a http get request for the specified url with post data.
 * @returns {Promise}
 */

export const httpPost = (url, data) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
        reject({ //eslint-disable-line
            data: err.response.data,
            status: err.response.status,
            statusText: err.response.statusText,
        });//eslint-disable-line
        } else {
        reject({ // eslint-disable-line
            data: {
              reason: 'Bad Request',
            },
            status: 400,
            statusText: 'Bad Request',
          });
        }
      });
  });

const interceptor = axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return interceptedConfig(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default interceptor;
