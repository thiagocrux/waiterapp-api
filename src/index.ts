/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';

import logger from './utils/logger';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(PORT, () => {
      logger.info('Database running on mongodb://localhost:27017');
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(`[mongodb] Error: `, error));
