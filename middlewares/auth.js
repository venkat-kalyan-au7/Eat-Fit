import jwt from "jsonwebtoken"

const JWT_SECRET = require("../config/keys").JWT_SECRET

exports.authorize = (req, res, next) => {
  jwt.verify(req.headers.authorization,JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        error: `Unauthorized access ${err}`,
      });
    }

    next();
  });
};