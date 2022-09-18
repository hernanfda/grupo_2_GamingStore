module.exports = function adminMiddleware(req, res, next) {
    console.log(req.session.userLogged.dataValues.user_profile_id);
    if (!req.session.userLogged) {
        return res.redirect("/users/login");
    } else if (req.session.userLogged && req.session.userLogged.dataValues.user_profile_id != 2) {
        console.log(req.session.userLogged);
        console.log("no es admin");
        return res.redirect("/");
    }
    next();
};
