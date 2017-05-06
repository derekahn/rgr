import {Router} from 'express';
import db from './db';

const router = Router();

router.get('/data/links', (req, res) => {
  db
  .get()
  .collection('links')
  .find({})
  .toArray((err, links) => {
    if (err) {
      throw err;
    }
    res.send(links);
  });
});

export default router;
