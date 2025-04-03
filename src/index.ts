/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(PORT, () => {
      console.log('Database running on mongodb://localhost:27017');
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`[mongodb] Error: `, error));
