import express from 'express';

const app = express();

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:3001`);
});
