import express from 'express';

import mongoose from 'mongoose';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';
import cors from 'cors';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auto/login', loginValidation, UserController.login);

app.post('/auto/register', registerValidation, UserController.register);

app.get('/auto/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:model', PostController.getOne);
app.post('/posts', postCreateValidation, PostController.create);
app.delete('/posts/:model', PostController.remove); //В разработке
// app.update('/posts', PostController.update); //В разработке

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
