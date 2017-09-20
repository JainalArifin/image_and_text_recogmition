const Users = require('../models/users')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const findAllUsers = (req, res) => {

  Users.find({}, (err, dataUser)=>{
    if(err){
      res.send(err)
    }else {
      res.send(dataUser)
    }
  })
}

const createUser = (req, res) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(`${req.body.password}`, salt);
  Users.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash
  })
  .then((dataUser) => {
    res.send({
      message: 'berhasil di tambahkan',
      dataUser: dataUser
    })
  })
  .catch((err) => {
    res.send(err)
  })
}

const userLogin = (req, res) =>{
  Users.findOne({
      username: req.body.username
  })
  .then((dataUser) => {
    if( bcrypt.compareSync(req.body.password, dataUser.password)){
      var token = jwt.sign({
        id: dataUser.id,
        name: dataUser.name
      },process.env.SECRET)
      res.send(token)
    }else(
      res.send("password anda salah !!!")
    )
  })
  .catch((err) => {
    res.send(err)
  })
}

const findByIdUser = (req, res) => {
  Users.findById({
    _id: ObjectId(req.params.id)
  })
  .then((dataUser) => {
    res.send(dataUser)
  })
  .catch((err) => {
    res.send(err)
  })
}

const updateUser = (req, res) => {
  Users.findOneAndUpdate({
    _id: ObjectId(req.params.id)
  },{
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  .then((dataUser) => {
    res.send({
      message:'berhasil di update',
      dataUser: dataUser
    })
  })
  .catch((err) => {
    res.send(err)
  })
}

const removeUsers = (req, res) => {
  Users.findByIdAndRemove({
    _id: ObjectId(req.params.id)
  })
  .then((dataUser) => {
    res.send({
      message:'data berhasil di hapus',
      dataUser: dataUser
    })
  })
}

module.exports = {
  findAllUsers,
  createUser,
  userLogin,
  findByIdUser,
  updateUser,
  removeUsers
}
