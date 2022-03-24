 const User = require("../Models/user");
const jwt = require('jsonwebtoken');

const auth=function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, "secretcode", (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)
   
    req.user = user

    next()
  })
}
module.exports = auth;
