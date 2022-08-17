function userLogged(req, res, next) {
    res.locals.isLogged = false;
    //let emailInCookie = req.cookies.userCookie.email
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    // else if(req.cookies.userCookie) {
    //     res.locals.isLogged = true;
    //     res.locals.userLogged = req.cookies.userCookie;
    // }
    next();
}

module.exports = userLogged;
