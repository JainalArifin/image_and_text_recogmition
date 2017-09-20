var jwt = require('jsonwebtoken');
require('dotenv').config()

const islogIn = (req, res, next) => {
  var decoded = jwt.verify(req.headers.token, process.env.SECRET, (err, decoded)=>{
    if(err){
      res.send("anda belum login")
    }else {
      req.id = decoded.id
      next()
    }
  });
}

module.exports = {
  islogIn
}
