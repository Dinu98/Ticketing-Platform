import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

const port = 3000;

app.get('/api/users/currentUser', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
