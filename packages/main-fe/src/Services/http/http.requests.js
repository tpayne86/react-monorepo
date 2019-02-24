import {
  httpGet,
  httpPost,
} from '@nikaah/utilities/lib/http/http.requestmaker';
import { AUTH, AUTH_REFRESH } from '../../Constants/api/api.endpoints';

export const getAuth = (accessToken) =>
  httpGet(AUTH, {
    'x-fb-tok': accessToken,
  });

export const postAuthRefresh = (refreshToken) =>
  httpPost(AUTH_REFRESH, { refresh_token: refreshToken });
