const { users } = require("../../users");

module.exports = {
  newMSG: (req, res) => {
    res.render("adminAddMessage", { users });
  }
};
