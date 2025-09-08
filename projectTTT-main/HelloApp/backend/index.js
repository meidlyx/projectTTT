import express from 'express';

import mongoose from 'mongoose';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

const app = express();

app.use(express.json());

app.post('/auto/login', loginValidation, UserController.login);

app.post('/auto/register', registerValidation, UserController.register);

app.get('/auto/me', checkAuth, UserController.getMe);

// app.get('/auto/me', checkAuth, UserController.getMe);
// app.get('/auto/me', checkAuth, UserController.getMe);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
// app.get('/auto/me', checkAuth, UserController.getMe);
// app.get('/auto/me', checkAuth, UserController.getMe);

async function start() {
  try {
    const url =
      'mongodb+srv://user2000:test1010@cluster0.1rwbm1y.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(url);
    app.listen(3000);
  } catch (e) {
    console.log(e);
  }
}

start();
