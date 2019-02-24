import { Router } from 'express';
import User from '../../database/models/user';
import { badRequest } from '../../utility/http';

const router = Router();

router.get('/', (req, res) => {
  Promise.all([User.findAll()])
    .then(([users]) => {
      res.status(200).send({
        users,
      });
    })
    .catch(() => {
      res.status(400).send(badRequest('bad req'));
    });
});

export default router;
