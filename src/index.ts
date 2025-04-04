import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';
import logger from './utils/logger';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      logger.info('Database running on mongodb://localhost:27017');
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => logger.error(`[mongodb] Error: `, error));
