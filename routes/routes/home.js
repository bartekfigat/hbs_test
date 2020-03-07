const { users } = require("../users");

module.exports = {
  newUser: (req, res) => {
    res.render("home");
  },

  newUserPost: (req, res) => {
    const { user } = req.body;
    users.push(user);
    res.redirect("/new_user");
  }
};
