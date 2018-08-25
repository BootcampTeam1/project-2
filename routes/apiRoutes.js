// Dependencies ------------------------------------------------
const db = require("../models");
const passport = require("../config/passport");
const express = require("express");
const router = express.Router();

// Routes ------------------------------------------------------

// POST "/api/login" - passport.authenticate middleware with our local strategy
// if credentials valid, login successful. otherwise, error.
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json("/members");
});

// POST "/api/signup" - for sign up form, hashing/salting happens in user.js sequelize model.
router.post("/api/signup", (req, res) => {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(() => {
    res.redirect(307, "/api/login");
  }).catch((err) => {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
});

// GET "/api/user_data" - for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  }
  else {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

// GET "/logout" - for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
