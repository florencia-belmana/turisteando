const { check } = require('express-validator');

module.exports = {
    login: [
        check('email').isEmail().withMessage('Debes completar un email valido'),
        check('password')
            .notEmpty().withMessage('Debes completar la contraseña')
            .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
        // check("user-type").notEmpty()
    ],
    register: [
        // Usamos el name del campo
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name').notEmpty().withMessage('Debes completar el apellido'),
        check('email').isEmail().withMessage('Debes completar un email valido'),
        check("password")
        .notEmpty().withMessage("debes completar la contraseña").bail()
        .isLength({min: 5}).withMessage("Debe tener minimo 5 caracteres")

    ],
    update: [
        // Validamos el login
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name').notEmpty().withMessage('Debes completar el apellido'),
        check('email')
            .isEmail().withMessage('Debes completar un email valido')
            .isLength({min: 5}).withMessage("Debe tener minimo 5 caracteres")
    ]
};