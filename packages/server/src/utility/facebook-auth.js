import request from 'request';
import { authConfig } from '../config';
import { badRequest } from './http';

const fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
const graphApiUrl = `https://graph.facebook.com/v3.2/me?fields=${fields.join(
  ',',
)}`;

const { FACEBOOK_APP } = authConfig;
// const params = {
//   code: '',
//   client_id: FACEBOOK_APP.clientID,
//   redirect_uri: FACEBOOK_APP.redirect_uri,
//   client_secret: FACEBOOK_APP.clientSecret,
// };
const appAccessTokenUrl = `https://graph.facebook.com/oauth/access_token?client_id=${
  FACEBOOK_APP.clientID
}&client_secret=${FACEBOOK_APP.clientSecret}&grant_type=client_credentials`;

export const getFacebookProfile = (accessToken) =>
  new Promise((resolve, reject) =>
    request.get(
      {
        url: `${graphApiUrl}&access_token=${accessToken}`,
        json: true,
      },
      (err, response, profile) => {
        if (response.statusCode !== 200) {
          reject(profile.error);
        }
        const user = {
          profilePicture: `https://graph.facebook.com/${
            profile.id
          }/picture?type=large`,
          firstName: profile.first_name,
          lastName: profile.last_name,
          facebookId: profile.id,
          email: profile.email,
          token: accessToken,
          source: 'facebook',
        };

        resolve(user);
      },
    ),
  );

export const generateAcessToken = () =>
  new Promise((resolve, reject) =>
    request.get(
      {
        url: appAccessTokenUrl,
        json: true,
      },
      (err, response, data) => {
        if (response.statusCode !== 200) {
          reject(data.error);
        }
        resolve(data);
      },
    ),
  );
export const facebookAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers['x-fb-tok'];
    console.log(accessToken);
    const user = await getFacebookProfile(accessToken);
    req.user = user;
    next();
  } catch (e) {
    res.status(400).send(badRequest('Invalid user'));
  }
};

export default getFacebookProfile;
