const express = require("express");
const market = require("../Models/market");
const auth = require("../middle-ware/auth");
const router = new express.Router();



router.post("/market", async (req, res) => {
  const Nmarket = new market(req.body);
  try {
    await Nmarket.save();
    res.send(Nmarket);
  } catch (error) {
    res.status(400).send(error);
  }
  
});





module.exports = router;
