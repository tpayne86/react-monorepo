import User from '../../database/models/user';
import { sequelize } from '../../database';
import { generateToken } from '../../utility/tokens';
import {
  JWT_ACCESS_TOKEN_EXPIRY,
  JWT_REFRESH_TOKE_EXPIRY,
} from '../../constants/app';
import { badRequest } from '../../utility/http';

export const saveFacebookUser = (user) =>
  new Promise(async (resolve, reject) => {
    try {
      return sequelize
        .transaction((trans) =>
          User.findOrCreate({
            where: {
              email: user.email,
            },
            defaults: {
              firstName: user.firstName,
              email: user.email,
              lastName: user.lastName,
              userSource: user.source,
              sourceId: user.facebookId,
              profilePicture: user.profilePicture,
              accessToken: generateToken(
                {
                  email: user.email,
                },
                JWT_ACCESS_TOKEN_EXPIRY,
              ),
              refreshToken: generateToken(
                {
                  email: user.email,
                },
                JWT_REFRESH_TOKE_EXPIRY,
              ),
            },
            transaction: trans,
          }).spread((userResult, created) => {
            if (created) {
              resolve(userResult);
            } else {
              resolve(userResult);
            }
          }),
        )
        .catch((e) => {
          reject(e);
        });
    } catch (e) {
      return reject(e);
    }
  });

export const generateNewAccessToken = (email, res) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await User.update(
        {
          access_token: generateToken({ email }, JWT_ACCESS_TOKEN_EXPIRY),
        },
        { returning: true, where: { email } },
      );

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (result[1]) {
        resolve(user);
      } else {
        res.status(400).json(badRequest('invalid user'));
      }
    } catch (e) {
      reject(e);
    }
  });

export default saveFacebookUser;
