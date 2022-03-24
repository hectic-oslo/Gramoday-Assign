const express = require("express");
const User = require("../Models/user");
const auth = require("../middle-ware/auth");
const router = new express.Router();



router.post("/users", async (req, res) => {
  const Nuser = new User(req.body);
  try {
    await Nuser.save();
    res.send(Nuser);
  } catch (error) {
    res.status(400).send(error);
  }
  
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();

    res.send({ user, token });
  
  } catch (e) {
    res.status(400).send();
  }
});

// router.post("/users/logout", auth, async (req, res) => {
//   try {
//     req.user.tokens = req.user.tokens.filter((token) => {
//       return token.token !== req.token;
//     });
//     await req.user.save();
//     res.status(200);
//   } catch (e) {
//     res.status(503).send(e);
//   }
// });

module.exports = router;
