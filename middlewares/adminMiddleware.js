module.exports = function adminMiddleware(req, res, next) {
    console.log(req.session.userLogged.userRole)
    if(!req.session.userLogged) {
        return res.redirect('/users/login');
    }
    else if(req.session.userLogged && req.session.userLogged.userRole != 2) {
        console.log("no es admin")
        return res.redirect('/');
    }
    next();
}
