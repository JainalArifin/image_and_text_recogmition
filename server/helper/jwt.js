var jwt = require('jsonwebtoken');
require('dotenv').config()
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.10'});

const islogIn = (req, res, next) => {

  if (req.headers.token == null) {
    if (req.headers.fbaccesstoken == null) {
      res.send({
        msg: 'unauthenticated'
      })
    }
    else {
      FB.api( '/me', 'get', { access_token: req.headers.fbaccesstoken }, (response) => {
        if (!response.error) {
          next()
        }
        else {
          res.send({
            msg: 'unauthenticated',
            data: response
          })
        }
      })
    }
  }
  else {
    let decoded = jwt.verify(req.headers.token, process.env.SECRET, (err, response) => {
      if (err) {
        res.send({
          msg: 'unauthenticated',
          data: err
        })
      }
      else {
        next()
      }
    })
  }

  // var decoded = jwt.verify(req.headers.token, process.env.SECRET, (err, decoded)=>{
  //   if(err){
  //     FB.api( '/me', 'get', { access_token: req.headers.fbaccesstoken }, response => {
  //       if (!response.error) {
  //         // console.log('ga error');
  //         // console.log(response);
  //         next()
  //       }
  //       else {
  //         // console.log('error');
  //         // console.log(response);
  //         res.send("anda belum login")
  //       }
  //     });
  //   }else {
  //     req.id = decoded.id
  //     next()
  //   }
  // });

}

module.exports = {
  islogIn
}
