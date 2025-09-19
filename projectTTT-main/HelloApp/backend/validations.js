import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неправильная фрма почты').isEmail(),
  body('fullname', 'Имя указано неверно').isLength({ min: 3 }),
  body('password', 'Пароль указано неверно').isLength({ min: 5 }),
];

export const loginValidation = [
  body('email', 'Неправильная фрма почты').isEmail(),
  body('password', 'Пароль указано неверно').isLength({ min: 5 }),
];

export const OrderCreateValidation = [
  body('name', 'Имя указано не верно').isLength({ min: 3 }),
  body('devise', 'Наименование девайса некоректно').isLength({ min: 3 }),
  body('model', 'Наименование модели некорректно').isLength({ min: 3 }),
  body('phone', 'Такого телефона не существует').isMobilePhone(),
  body('problem', 'Описание проблемы не верно').isLength({ min: 3 }),
  body('email', 'Неправильная фрма почты').isEmail(),
];
