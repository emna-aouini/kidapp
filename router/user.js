const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passport = require("passport");
const config = require("config");
const User = require("../models/user");

// update

router.put("/", (req, res) => {
  var name = req.body.name;
  var age = req.body.age;
  var child = { name, age };
console.log(child)
  User.findByIdAndUpdate(req.body.idparent,
   { $push: { childs: child } })
   .then(data=>res.json(data))
    .catch(err => res.send(err));

});
// register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      return res.json({ error: "user already exist" });
    }
    const newUser = new User({
      name,
      email,
      password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

// login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    const { id, email, name ,childs} = user;
    if (!user) {
      return res.json({ error: "email is not valid" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id, email, name,childs };
        jwt.sign(
          payload,
          config.get("secretkey"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token: "Bearer " + token });
          }
        );
      } else {
        res.json({ error: "password incorrect" });
      }
    });
  });
});

// validation
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
