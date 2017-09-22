const mongoose = require('mongoose');

const kendaraanSchema = new mongoose.Schema({
    jenis: String,
    nomor: String
})

const kendaraan = mongoose.model('kendaraan', kendaraanSchema )

module.exports = kendaraan;
