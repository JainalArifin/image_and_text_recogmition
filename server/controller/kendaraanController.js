const kendaraan = require('../models/kendaraan');

const getallkendaraan = (req,res) => {
  kendaraan.find({})
  .then(allkendaraan => {
    res.send(allkendaraan)
  })
  .catch(err => {
    res.send(err)
  })
}

const insertkendaraan = (req,res) => {
  kendaraan.create({
    jenis: req.body.jenis,
    nopolisi: req.body.nopolisi
  })
  .then(datakendaraan => {
    res.send(datakendaraan)
  })
  .catch(err => {
    res.send(err)
  })
}

const updatekendaraan = (req,res) => {
  kendaraan.update({
    _id: req.params.id
  },{
    jenis: req.body.jenis,
    nopolisi: req.body.nopolisi
  })
  .then(kendaraanupdate => {
    res.send(kendaraanupdate)
  })
  .catch(err => {
    res.send(err)
  })
}

const deletekendaraan = (req,res) => {
  kendaraan.deleteOne({_id: req.params.id})
  .then(dataterhapus => {
    res.send(dataterhapus)
  })
  .catch(err => {
    res.send(err)
  })
}

const getonekendaraan = (req,res) => {
  kendaraan.findOne({_id: req.params.id})
  .then(findonekendaraan => {
    res.send(findonekendaraan)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {getallkendaraan,insertkendaraan,updatekendaraan,deletekendaraan,getonekendaraan};
