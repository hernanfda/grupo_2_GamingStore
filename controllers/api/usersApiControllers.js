// const { validationResult } = require("express-validator");
// const fs = require("fs");
// const path = require("path");
// const allUsersPath = path.resolve(__dirname, '../data/users.json');
// const allUsers = JSON.parse(fs.readFileSync(allUsersPath, 'utf8'));
const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Users = db.Users;


const usersApiControllers = {
 
    // processLogin: async (req, res) => {
    //     await Users.findOne({ where: { email: req.body.email } })
    //         .then((userToLogin) => {
    //             //console.log(userToLogin)
    //             if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.user_password)) {
    //                 res.render("users/login", {
    //                     errors: "El usuario y/o la clave no coinciden",
    //                     styles: "register_login",
    //                 });
    //             } else {
    //                 const user = { ...userToLogin, user_password: undefined };
    //                 Reflect.deleteProperty(user, "password");
    //                 req.session.userLogged = user;
    //                 if (req.body.remember_me) {
    //                     res.cookie("userEmail", userToLogin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
    //                 }
    //                 res.redirect("/");
    //             }
    //         })
    //         .catch((err) => console.error(err));
    // },
    processRegister: (req, res) => {
        Users.create({
                name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                birth_date: req.body.birthDate,
                user_password: bcrypt.hashSync(req.body.password, 10),
                user_avatar: req.file.filename, //ojo que en forms es userAvatar
                user_profile_id: 1,
            
        })
        .then((confirm) => {
            let response;
            if (confirm){
                response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/register'
                    },
                    data: confirm
                }
            } else {
                response = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/users/register'
                    },
                    data: confirm
                }
            }
            res.json(response);
        })
        .catch((err) => {
            res.send(err);
        });
        
    },
    // logout: (req, res) => {
    //     res.clearCookie("userEmail");
    //     req.session.destroy();
    //     res.redirect("/");
    // },
    // //para que el user llegue a profile, tuvimos que acceder al Object, con dataValues
    // profile: async (req, res) => {
    //     await Users.findOne({ where: { email: req.session.userLogged.dataValues.email } }).then((user) => {
    //         return res.render("users/profile", { user, styles: "userProfile" });
    //     });
    // },
    processEdit: async (req, res) => {
        let file = req.file;
        let user = req.session.userLogged.dataValues;
        await Users.update(
            {
                name: req.body.nombre,
                last_name: req.body.apellido,
                user_avatar: file ? req.file.filename : req.body.image,
            },
            { where: { id: user.id } }
        ).then(() => {
            res.redirect("/users/profile");
        });
    },
};

module.exports = usersApiControllers;
