module.exports = function guestMiddleware(req, res, next) {
    if (req.session.userLogged) { //tengo alquien en session?
        return res.redirect("/users/profile");
    } 
    next();
}