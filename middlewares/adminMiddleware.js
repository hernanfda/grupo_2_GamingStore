module.exports = function adminMiddleware(req, res, next) {
    console.log(req.session.userLogged.user_profile_id) //tuve que agregar el dataValues
    if(!req.session.userLogged) {
        return res.redirect('/users/login');
    }
    else if(req.session.userLogged && req.session.userLogged.user_profile_id != 2) {
        console.log("no es admin")
        return res.redirect('/');
    }
    next();
}
