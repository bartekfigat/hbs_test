const { users } = require("../../users");

module.exports = {
  userMsg: (req, res) => {
    console.log(users);
    res.render("messages", { users });
  },
  showAll: (req, res) => {
    const { message } = req.body;
    req.session.newMessage = message;
    const { userNew } = req.session;
    const { newMessage } = req.session;

    if (message === "") {
      return res.redirect("/new_user");
    }

    users.push({ userNew, newMessage });
    res.redirect("/messages");
  }
};
