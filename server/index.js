import express from 'express';
import logger from 'morgan';

import graphQL from './graphql';
import db from './db';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/graphql', graphQL);
app.use(logger('dev'));

const mongoURL = 'mongodb://localhost:27017/links';
db.connect(mongoURL, err => {
  if (err) {
    console.warn('Unable to connect to Mongo', err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.info(`Listening on port ${port}`);
  });
});
