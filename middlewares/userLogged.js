function userLogged(req, res, next) {
    res.locals.isLogged = false;
    //let emailInCookie = req.cookies.userEmail.email
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    // else if(req.cookies.userEmail) {
    //     res.locals.isLogged = true;
    //     res.locals.userLogged = req.cookies.userEmail;
    // }
    next();
}

module.exports = userLogged;
