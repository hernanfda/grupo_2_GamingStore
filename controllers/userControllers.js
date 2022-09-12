const { validationResult } = require("express-validator");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");
// const allUsersPath = path.resolve(__dirname, '../data/users.json');
// const allUsers = JSON.parse(fs.readFileSync(allUsersPath, 'utf8'));
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.Users;
const userControllers = {
    login: (req, res) => {
        res.render("users/login", { styles: "register_login" });
    },

    processLogin: async (req, res) => {
        await Users.findOne({ where: { email: req.body.email } })
            .then((userToLogin) => {
                //console.log(userToLogin)
                if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.user_password)) {
                    res.render("users/login", {
                        errors: "El usuario y/o la clave no coinciden",
                        styles: "register_login",
                    });
                } else {
                    const user = { ...userToLogin, user_password: undefined };
                    Reflect.deleteProperty(user, "password");
                    req.session.userLogged = user;
                    if (req.body.remember_me) {
                        res.cookie("userEmail", userToLogin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                    }
                    res.redirect("/");
                }
            })
            .catch((err) => console.error(err));
    },

    register: (req, res) => {
        res.render("users/register", { styles: "register_login" });
    },

    processRegister: async (req, res) => {
        let errors = validationResult(req);

        if (errors.errors.length > 0) {
            return res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                styles: "register_login",
            });
        }
        const [user, created] = await Users.findOrCreate({
            where: { email: req.body.email },
            defaults: {
                name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                birth_date: req.body.birthDate,
                user_password: bcrypt.hashSync(req.body.password, 10),
                user_avatar: req.file.filename,
                user_profile_id: 1,
            },
        });
        if (!created) {
            return res.render("users/register", {
                errors: { email: { msg: "Ya esta registrado este email" } },
                styles: "register_login",
            });
        } else {
            return res.render('users/login', { styles: "register_login" });
        }
    },

    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        res.redirect("/");
    },

    profile: (req, res) => {
        return res.render("users/profile", { user: req.session.userLogged, styles: "userProfile" });
    },

    edit: (req, res) => {
        const user = req.session.userLogged;
        return res.render("users/edit", { user: user, styles: "userProfile" });
    },
 // HASTA ACA LLEGAMOS LOCO
    processEdit: async (req, res) => {
        Users.findOne({ where: { id: req.session.userLogged.id } })
        //let id = req.session.userLogged.id;
            .then(() => {
            // HASTA ACA LLEGAMOS LOCO
        })
        // let index = allUsers.findIndex((e) => e.id == id);
        // allUsers[index].nombre = req.body.nombre || allUsers[index].nombre;
        // allUsers[index].apellido = req.body.apellido || allUsers[index].apellido;
        // if (req.file) {
        //     allUsers[index].userAvatar = req.file.filename;
        // }

        // fs.writeFileSync("./data/users.json", JSON.stringify(allUsers, null, 2));

        req.session.userLogged = allUsers[index];
        res.redirect("/users/profile");
    },
};

module.exports = userControllers;
