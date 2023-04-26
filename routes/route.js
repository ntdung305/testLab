const express = require("express");
const router = express.Router();

const users = [];
// get;
router.get("/user", (req, res, next) => {
  const users2 = users;
  res.render("home", { users2: users2 });
});

// get;
router.get("/", (req, res, next) => {
  const users2 = users;
  res.json(users2);
  console.log("21", users2);
});

//post
router.post("/", (req, res, next) => {
  users.push(req.body);
  res.send(users);
});

exports.routes = router;
