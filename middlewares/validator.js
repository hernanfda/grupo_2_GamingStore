const { body } = require('express-validator');

module.exports = {
    register: [
        body('nombre')
            .notEmpty()
            .withMessage("Debes ingresar tu nombre"),
        body("apellido")
            .notEmpty()
            .withMessage("Debes ingresar tu apellido"),
        body("email")
            .notEmpty()
            .withMessage("Debes ingresar tu email")
            .isEmail()
            .withMessage("Debes usar formato email"),
        body("birthDate")
            .notEmpty()
            .withMessage("Debes ingresar tu fecha de nacimiento"),
        body("password")
            .notEmpty()
            .withMessage("Debes ingresar una contraseña")
            .isLength({ min: 8, max: 16 })
            .withMessage("Ingrese una clave de al menos 8 caracteres y no supere los 16"),
        body('userAvatar').custom((value, { req }) => {
            let file = req.file;
            if(!file) {
                throw new Error('Tienes que subir una imagen')
            }
            return true;
            })
    ],
}