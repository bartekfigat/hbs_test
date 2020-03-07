const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const path = require("path");
const hdb = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3333;

app.engine(
  "handlebars",
  hdb({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "handlebars"
  })
);

app.set("view engine", "handlebars");
//app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRoutes);
app.use((req, res, next) => {
  res.render("pageNotfound");
});

app.listen(port, console.log(`server is listening on port ${port} `));
