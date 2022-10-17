const cookieParser = require("cookie-parser")

function userLogged(req, res, next) {
    res.locals.isLogged = false
    //let emailInCookie = req.cookies.userEmail.email
    if(req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    } else if(req.cookies.userLogged) {
        req.session.userLogged = req.cookies.userLogged
        res.locals.isLogged = true
        res.locals.userLogged = req.cookies.userLogged
    }
    next();
}

module.exports = userLogged;
