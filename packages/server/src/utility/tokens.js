import jwt from 'jsonwebtoken';
import { authConfig } from '../config';

const { JWT_AUTH_TOKEN } = authConfig;

export const createToken = (content) =>
  jwt.sign(
    {
      data: content,
    },
    JWT_AUTH_TOKEN,
    {
      expiresIn: 60 * 120,
    },
  );

export const generateToken = (user) => {
  const token = createToken(user);
  return token;
};

export const verifyToken = (token) =>
  jwt.verify(token, authConfig.JWT_AUTH_TOKEN);

export const getDataFromTokens = (token) => verifyToken(token).data;
