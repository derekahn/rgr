import { MongoClient } from 'mongodb';

export default {
  db: null,
  connect(url) {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
      }

      MongoClient.connect(url, (err, db) => {
        if (err) {
          reject(err);
        }

        this.db = db;
        resolve(db);
      });
    });
  },
  get() {
    return this.db;
  },
};
