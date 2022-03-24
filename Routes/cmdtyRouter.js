const express = require("express");
const cmdty = require("../Models/cmdty");
const auth = require("../middle-ware/auth");
const router = new express.Router();



router.post("/cmdty", async (req, res) => {
  const Ncmdty = new cmdty(req.body);
  try {
    await Ncmdty.save();
    res.send(Ncmdty);
  } catch (error) {
    res.status(400).send(error);
  }
  
});



module.exports = router;
