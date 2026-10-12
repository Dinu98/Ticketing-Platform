import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signinRouter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(
    JSON.stringify(
      (app as any)._router.stack.map((l: any) => l.route && l.route.path)
    )
  );
});
