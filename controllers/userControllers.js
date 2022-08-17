const { validationResult } = require("express-validator")
const fs = require('fs');
const bcrypt = require('bcryptjs');
const allUsers = require('../data/users.json');

const userControllers = {
    login: (req, res) => {
        res.render('users/login', { styles: "register_login" })
    },
    processLogin: (req, res) => {
        let userToLogin = allUsers.find(user => user.email === req.body.email);
        if(userToLogin) {
            let passwordCheck = bcrypt.compareSync(req.body.password, userToLogin.password);
            if(passwordCheck) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                res.cookie('userCookie', userToLogin.email, { maxAge: (1000 * 60) * 30 });
                return res.redirect('/')
            }
        }
        return res.render('users/login', {
            errors:{
                email:{
                    msg:'Credenciales inválidas'
                }
            },
            styles: "register_login"
        })
    },
    register: (req, res) => {
        res.render('users/register', { styles: "register_login" })
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if(errors.errors.length > 0) {
            return res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                styles: "register_login",
            })
        }

        let userExists = allUsers.find(user => user.email === req.body.email);
        if(userExists) {
            return res.render('users/register', {
                errors:{
                    email:{
                        msg:'Ya esta registrado este email'
                    }
                },
                styles: "register_login"
            })
        }else {
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
        res.clearCookie('userCookie');
        req.session.destroy();
        res.redirect('/');
    },
    profile: (req, res) => {
        return res.render('users/profile', {user: req.session.userLogged, styles: "register_login"})
    },
}

module.exports = userControllers