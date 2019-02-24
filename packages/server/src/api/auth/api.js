import { Router } from 'express';
import { facebookAuth } from '../../utility/facebook-auth';
import { saveFacebookUser, generateNewAccessToken } from './utility';
import { serverError } from '../../utility/http';
import { auth } from '../../utility/auth';
import { getDataFromTokens } from '../../utility/tokens';

const router = Router();
router.get('/v1/facebook', facebookAuth, async (req, res) => {
  try {
    const user = await saveFacebookUser(req.user);
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json(serverError(e));
  }
});
router.get('/v1/refresh', auth, async (req, res) => {
  try {
    const data = getDataFromTokens(req.body.refresh_token);
    const user = await generateNewAccessToken(data.email, res);
    res.status(200).json({ access_token: user.access_token });
  } catch (e) {
    res.send(500).json(serverError(e));
  }
});

export default router;
