import express from 'express';
import db from './db';

const app = express();

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
