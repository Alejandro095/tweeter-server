const { check } = require("express-validator");

module.exports = {

    login: () => [
                    check("email", "El correo es requerido")
                    .notEmpty()
                    .isEmail()
                    .withMessage("El correo electronico es invalido")
                    .normalizeEmail(),
                    check("password")
                    .isLength({ min: 8, max: 15 })
                    .withMessage("your password should have min and max length between 8-15")
                    .matches(/\d/)
                    .withMessage("your password should have at least one number")
                    .matches(/[!@#$%^&*(),.?":{}|<>]/)
                    .withMessage("your password should have at least one sepcial character")
    ],
    password: () => {}
}