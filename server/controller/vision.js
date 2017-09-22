var vision = require('@google-cloud/vision')
var nomorModel = require('../models/kendaraan')
// var mongoose = require('mongoose')

var visionclient = vision({
  projectId : 'imageandfacerecognition',
  keyFilename: 'ImageAndFaceRecognition-0c6f789a703d.json'
})

var showText = (req,res, next)=>{
 var image_text = req.body.image_text
 var imageUri = image_text
 var source = {
   imageUri : imageUri
 }
 var image = {
   source : source
 }
 var type = vision.v1.types.Feature.Type.TEXT_DETECTION;
 var featuresElement = {
     type : type
 };

 var features = [featuresElement];
 var requestsElement = {
     image : image,
     features : features
 };
 console.log('we run')
 req.vision = [requestsElement];
 next()
}

// var addCar = (req, res) => {
//   nomorModel.create({
//     nomor:req.body.nomor
//   })
//   .then(dataMobil=>{
//     res.send(dataMobil)
//   })
//   .catch((err) => {
//     res.send(err)
//   })
// }
//
// var getCar = (req,res)=>{
//   nomorModel.find({},function(err,result){
//     if(!err){
//       res.send(result)
//     }else{
//       res.send(err)
//     }
//   })
// }

// var getAll = (req,res)=>{
//   nomorModel.find({},function(err,result){
//     if(!err){
//       res.send(result)
//     }
//   })
// }

module.exports = {
  showText
  //addCar,
  //getCar,
//  getAll
}
