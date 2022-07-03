const mainControllers = {
    index: (req, res) => {
        res.render('index', { styles: "styles" });
    }
}

module.exports = mainControllers