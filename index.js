const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const port = 5000;
const route = require("./routes/route");
const { engine } = require("express-handlebars");

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));

app.use("/", route.routes);

app.listen(port);
