const userControllers = {
    login: (req, res) => {
        res.render('users/login', { styles: "register_login" })
    },
    register: (req, res) => {
        res.render('users/register', { styles: "register_login" })
    }
}

module.exports = userControllers