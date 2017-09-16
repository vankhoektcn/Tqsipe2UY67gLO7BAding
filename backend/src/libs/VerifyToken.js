const { sign, verify } = require("jsonwebtoken");
const { keyToken } = require("./server_config").configs;
const { checkLogTokenUser } = require("./../middlewares/user_middleware");

const getSignToken = objdata => {
  return sign(objdata, keyToken, { algorithm: "HS384" });
};
exports.getSignToken = getSignToken;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.headers["x-access-token"];
  if (token) {
    verify(token, keyToken, (err, decoded) => {
      if (err) {
        res.status(308).json({ status: 308, messager: "redirect login" });
      } else {
        req.uid = decoded.uid;
        req.os = decoded.os;
        req.token = token;
        console.log("verify", decoded);
        checkLogTokenUser(req, res, next);
      }
    });
  } else {
    res.status(405).json({ status: 405, messager: "method not allowed" });
  }
};
exports.verifyTokenUser = verifyToken;
