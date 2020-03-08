const { users } = require("../../users");

module.exports = {
  newMSG: (req, res) => {
    const { userNew } = req.session;
    res.render("adminAddMessage", { userNew });
  }
};
