const { msg, users } = require("../users");

module.exports = {
  userMsg: (req, res) => {
    res.render("messages", { msg, users });
  },
  showAll: (req, res) => {
    const { message } = req.body;

    console.log(message);
    msg.push(message);
    res.redirect("/messages");
  }
};
