import express from 'express';
import logger from 'morgan';
import db from './db';

const app = express();
const port = 3000;

app.use(logger('dev'))
app.use(express.static('public'))
const mongoURL = 'mongodb://localhost:27017/links';
db.connect(mongoURL, (err) => {
  if (err) {
    console.warn('Unable to connect to Mongo', err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.info(`Listening on port ${port}`);
  });
})
