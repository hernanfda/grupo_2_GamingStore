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
    createProduct: [
        body('brand_id')
            .notEmpty()
            .withMessage("Debes seleccionar una marca"),
        body("category_id")
            .notEmpty()
            .withMessage("Debes seleccionar el tipo de producto"),
        body("model")
            .notEmpty()
            .withMessage("Debes ingresar el modelo")
            .isLength({ min: 3, max: 20 })
            .withMessage("El modelo debe tener más de 3 caracteres"),
        body("price")
            .notEmpty()
            .withMessage("Debes ingresar el precio")
            .isNumeric()
            .withMessage("Debes ingresar el precio en números"),
        body("description")
            .notEmpty()
            .withMessage("Debes ingresar una descripción"),
            
        body('image').custom((value, { req }) => {
            let file = req.file;
            if(!file) {
                throw new Error('Tienes que subir una imagen')
            }
            return true;
            })
    ],
    editProduct: [
        body('brand_id')
            .notEmpty()
            .withMessage("Debes seleccionar una marca"),
        body("category_id")
            .notEmpty()
            .withMessage("Debes seleccionar el tipo de producto"),
        body("model")
            .notEmpty()
            .withMessage("Debes ingresar el modelo")
            .isLength({ min: 3, max: 20 })
            .withMessage("El modelo debe tener más de 3 caracteres"),
        body("price")
            .notEmpty()
            .withMessage("Debes ingresar el precio")
            .isNumeric()
            .withMessage("Debes ingresar el precio en números"),
        body("description")
            .notEmpty()
            .withMessage("Debes ingresar una descripción"),
    ],   
}