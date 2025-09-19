import express from 'express';

import mongoose from 'mongoose';

import { registerValidation, loginValidation, OrderCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';
import cors from 'cors';
import * as UserController from './controllers/UserController.js';
import * as OrderController from './controllers/OrderController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auto/login', loginValidation, UserController.login);

app.post('/auto/register', registerValidation, UserController.register);

app.get('/auto/me', checkAuth, UserController.getMe);

app.get('/order', OrderController.getAll);
app.get('/order/:model', OrderController.getOne);
app.post('/order', OrderCreateValidation, OrderController.create);
app.delete('/order/:model', OrderController.remove); //В разработке
// app.update('/order', OrderController.update); //В разработке

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
