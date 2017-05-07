import express from 'express';
import logger from 'morgan';

import graphQL from './graphql';
import db from './db';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(logger('dev'));

(async () => {
  const mongoURL = 'mongodb://localhost:27017/links';
  const database = await db.connect(mongoURL);

  app.use('/graphql', graphQL(database));
  app.listen(port, () => {
    console.info(`Listening on... port ${port}`);
  });
})();
