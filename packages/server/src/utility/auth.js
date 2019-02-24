import { unAuthorized } from './http';
import { verifyToken } from './tokens';

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    const decode = verifyToken(token);
    req.user = decode.data.email;
    next();
  } catch (e) {
    res.status(401).send(unAuthorized());
  }
};
export default auth;
