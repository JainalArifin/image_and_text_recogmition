const mongoose = require('mongoose');

const kendaraanSchema = new mongoose.Schema({
    jenis: String,
    nopolisi: String
})

const kendaraan = mongoose.model('kendaraan', kendaraanSchema )

module.exports = kendaraan;
