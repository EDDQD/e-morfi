const accountController = {
    login: (req, res) => {
        res.render("./account/login");
    },
    register: (req, res) => {
        res.render("./account/register");
    }
}

module.exports = accountController;