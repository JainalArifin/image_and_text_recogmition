var express = require('express');
var router = express.Router();
var cont = require('../controller/vision')
var vision = require('@google-cloud/vision')
var modelMobil = require('../models/kendaraan')
// var mongoose = require('mongoose')
// var nomorModel = require('../models/mobil')

var visionClient = vision({
  projectId : 'vital-keep-178115',
  keyFilename: 'My-First-Project-0fbc8a8e9941.json'
})

// router.post('/addCar', cont.addCar)
// router.get('/getcar',cont.getAll)

router.post('/', cont.showText, (req, res) => {
  console.log('lalala')
  visionClient.batchAnnotateImages({requests: req.vision})
  // modelMobil.find()

  .then(function(responses) {
    // let kata = The Quick Browrm Fox Jumps Over Lazy Dog The
    let kata = 'The Quick Browrm Fox Jumps Over Lazy Dog The'
      // console.log(typeof(responses[0].responses[0].textAnnotations[0].description));
      // array.push(responses[0].responses[0].textAnnotations[0].description)
      // let kata = array.replace('\n', ' ').join('')
      //  let array = word.join("\n")


      if (responses[0].responses[0].textAnnotations[0] == undefined) {
        res.send({
          msg: 'gambar gagal dikenali'
        })
      }
      console.log(responses[0].responses[0].textAnnotations[0]);


      let array = []
      let dimas = responses[0].responses[0].textAnnotations[0].description.replace(/\n|\r/g, ' ').trim();
      // let dimas = array.push(kata)
      console.log('------------>', dimas)

      // res.send(dimas)
      // if(dimas == modelMobil.nomor){
      //   res.send("this vehicle is legal")
      // }else{
      //   res.send("call officer this car is illegal")
      // }
      // modelMobil.find({
      //   nomor: responses[0].responses[0].textAnnotations[0].description.replace(/\n|\r/g, ' ').trim()
      // })
      // res.send(cont.addCar)
      modelMobil.findOne({nomor:dimas})
      .then(dataMobil=>{
        // res.send(dataMobil[0].nomor)
        if(dataMobil !== null){
          res.send({
            msg: 'this vehicle is legal',
            data: dataMobil
          })
          console.log('ini if', dataMobil);
        }else {
          res.send({
            data: dataMobil,
            msg: 'call officer this car is illegal'
          })
          console.log('ini else', dataMobil);
        }
        // if(dataMobil[0].nomor !== null){
          // res.send('this vehicle is legal')
          //  }
          //  else {
            // res.send('call officer this car is illegal')
          // }
          // res.send(dataMobil[0].nomor)
      })
      .catch(err=>{
        res.send({
          msg : 'error',
          data: err
        })
      })
  })
  .catch(function(err) {
      console.error(err);
  })
})

module.exports = router;
