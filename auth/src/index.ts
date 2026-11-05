import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  for (let attempts = 1; attempts <= 10; attempts++) {
    try {
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
      console.log('Connected to DB');
      break;
    } catch (err) {
      console.error(`Mongo connection attempt ${attempts} failed`, err);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log(
      JSON.stringify(
        (app as any)._router.stack.map((l: any) => l.route && l.route.path)
      )
    );
  });
};

start();
