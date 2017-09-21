const express = require('express');
const router = express.Router();
const kendaraanController = require('../controller/kendaraanController');
const auth = require('../helper/jwt')

router.get('/', auth.islogIn, kendaraanController.getallkendaraan)
router.post('/', auth.islogIn, kendaraanController.insertkendaraan)
router.put('/:id', auth.islogIn, kendaraanController.updatekendaraan)
router.delete('/:id', auth.islogIn, kendaraanController.deletekendaraan)
router.get('/:id', auth.islogIn, kendaraanController.getonekendaraan)

module.exports = router;
