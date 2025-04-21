import { unlink } from 'node:fs';
import logger from './logger';

export async function deleteLocalFile(filePath: string) {
  unlink(filePath, (error) => {
    if (error) {
      console.error('Error deleting file:', error);
      return;
    }

    logger.info('File deleted successfully!');
  });
}
