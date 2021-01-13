import { check } from 'express-validator';

export function login() {
  return [
    check('email', 'El correo es requerido')
      .notEmpty()
      .isEmail()
      .withMessage('El correo electronico es invalido')
      .normalizeEmail(),
    check('password')
      .isLength({ min: 8, max: 16 })
      .withMessage('La contraseña debe de tener una longitud de entre 8 a 16 caracteres.')
      .matches(/\d/)
      .withMessage('Tu contraseña debe de tener algun numero')
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage('Tu contraseña debe de tener algun caracter especial'),
  ];
}

export function Register() {}
export function Login() {}
