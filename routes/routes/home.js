const { users } = require("../../users");

module.exports = {
  newUser: (req, res) => {
    res.render("home");
  },

  newUserPost: (req, res) => {
    const { user } = req.body;

    req.session.userNew = user;

    if (user === "") {
      return res.redirect("/");
    }

    res.redirect("/new_user");
  }
};
