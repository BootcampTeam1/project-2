// Dependencies -------------------------------------------------
const path = require("path");
const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes --------------------------------------------------------

// GET "/" - If the user already has an account send them to the members page
router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// GET "/login" - If the user already has an account send them to the members page
router.get("/login", (req, res) => {

  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// GET "/members" - authenticated route - logged in users only
// add this middleware for any route that shouldnt be accessible to public
router.get("/members", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});

module.exports = router;
