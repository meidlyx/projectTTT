import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import UserModel from '../models/user.js';

import { validationResult } from 'express-validator';

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10); //Это соль(та что помогает в хешировании пароля,для его безопасности)
    const hash = await bcrypt.hash(password, salt); //Зашифронаный пароль

    const doc = UserModel({
      email: req.body.email,
      fullname: req.body.fullname,
      PasswordHash: hash,
    });

    const user = await doc.save();
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { PasswordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      massage: 'не удалось зарегестрироваться',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        massage: 'Ошибка Аворизации',
      });
    }
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.PasswordHash);

    if (!isValidPass) {
      return res.status(400).json({
        massage: 'неверный логин или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { PasswordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      massage: 'не удалось авторизоваться',
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user)
      return res.status(400).json({
        massage: 'Нет доступа',
      });

    const { PasswordHash, ...userData } = user._doc;

    res.json({
      ...userData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      massage: 'Нет достпа',
    });
  }
};
