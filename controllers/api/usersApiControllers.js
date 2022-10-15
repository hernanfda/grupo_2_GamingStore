// const { validationResult } = require("express-validator");
// const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { error } = require("console");
const Users = db.Users;


const usersApiControllers = {

    userList: (req, res) => {
        Users.findAll({
            include: ['user_profile']
        })
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users.map(user => {
                        user = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            url: `/api/users/${user.id}`
                        }
                        return user;
                    }),
                }
                res.json(respuesta);
            })
            .catch((err) => { res.send(err) })
    },
    lastOneInDb: (req, res) => {
        Users.findAll({
            include: ['user_profile'],
            order: [["id", "DESC"]],
            limit: 1,
        })
            .then((users) => {
                let response = {
                    meta: {
                        status: 200,
                        url: "/api/users/lastone",
                        total: users.length,
                    },
                    data:  user = {
                        id: users[0].id,
                        name: users[0].name,
                        lastname: users[0].last_name,
                        email: users[0].email,
                        birthdate: users[0].birthdate,
                        avatar: `/img/usersAvatar/${users[0].user_avatar}`,
                    },
                };
                res.json(response);
            })
            .catch((err) => res.send(err));
    },
    userDetail: (req, res) => {
            let id = req.params.id;
            Users.findByPk(id)
                .then((user) => {
                    let response;
                    if (user) {
                        response = {
                            meta: {
                                status: 200,
                                url: `/api/users/details/${id}`,
                            },
                            data:  user = {
                                id: user.id,
                                name: user.name,
                                lastname: user.last_name,
                                email: user.email,
                                birthdate: user.birthdate,
                                avatar: `/img/usersAvatar/${user.user_avatar}`,
                            },
                        };
                    } else {
                        response = {
                            meta: {
                                status: 204, 
                                url: `/api/users/details/${id}`,
                            },
                            data: {"Msg": 'Not found'},  
                        }
                    }
                    res.json(response);
                })
                .catch((error) => {
                    res.send(error);
                });
    },
    processLogin:  (req, res) => {
         Users.findOne({ where: { email: req.body.email } })
            .then(userToLogin => {
                if (bcrypt.compareSync(req.body.password, userToLogin.user_password)) {
                    const user = { ...userToLogin, user_password: undefined };
                    Reflect.deleteProperty(user, "password");
                    req.session.userLogged = user;
                    if (req.body.remember_me) {
                        res.cookie("userEmail", userToLogin.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                    }
                    res.json("oh yeah"); //armar los status correctos
                } else {
                    res.json('no pepe nooo');  //armar los status correctos
                }
            })
            .catch((err) => console.error(err));
    },
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
    // processEdit: async (req, res) => {
    //     let file = req.file;
    //     let user = req.session.userLogged.dataValues;
    //     await Users.update(
    //         {
    //             name: req.body.nombre,
    //             last_name: req.body.apellido,
    //             user_avatar: file ? req.file.filename : req.body.image,
    //         },
    //         { where: { id: user.id } }
    //     ).then(() => {
    //         res.redirect("/users/profile");
    //     });
    // },
};

module.exports = usersApiControllers;
