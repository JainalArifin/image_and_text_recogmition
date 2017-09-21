const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mobilSchema = new mongoose.Schema({
  nomor : String
})

const mobil = mongoose.model('mobil', mobilSchema)

module.exports = mobil
