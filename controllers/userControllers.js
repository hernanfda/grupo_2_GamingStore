const { validationResult } = require("express-validator")
const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path')
const allUsersPath = path.resolve(__dirname, '../data/users.json');
const allUsers = JSON.parse(fs.readFileSync(allUsersPath, 'utf-8'));

const userControllers = {
    
    login: (req, res) => {
        res.render('users/login', { styles: "register_login" })
    },

    processLogin: (req, res) => {
        const userTologin = allUsers.find(userLogged => userLogged.email === req.body.email);

        if (!userTologin || !bcrypt.compareSync(req.body.password, userTologin.password)) {
            return res.render('users/login', { errors: 'El usuario y/o la clave no coinciden', styles: "register_login" })
        } else {
            const user = {...userTologin, password: undefined};
            Reflect.deleteProperty(user, 'password');
            req.session.userLogged = user;

            if (req.body.remember_me) {
                res.cookie('userEmail', userTologin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 })
            }
            res.redirect('/')
        }
    },

    register: (req, res) => {
        res.render('users/register', { styles: "register_login" })
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            return res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                styles: "register_login",
            })
        }

        let userExists = allUsers.find(user => user.email === req.body.email);
        if (userExists) {
            return res.render('users/register', { errors: { email: { msg: 'Ya esta registrado este email' } }, styles: "register_login" })
        } else {
            let newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                birthDate: req.body.birthDate,
                password: bcrypt.hashSync(req.body.password, 10),
                userAvatar: req.file.filename,
                userRole: "",
                id: allUsers.length + 1,
            }

            allUsers.push(newUser)


            fs.writeFileSync("./data/users.json", JSON.stringify(allUsers, null, 2))
            res.render("users/login", { styles: "register_login" });
        }
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    },
    profile: (req, res) => {
        return res.render('users/profile', { user: req.session.userLogged, styles: "register_login" })
    },
}

module.exports = userControllers