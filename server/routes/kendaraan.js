const express = require('express');
const router = express.Router();
const kendaraanController = require('../controller/kendaraanController');
const auth = require('../helper/jwt')

router.get('/', kendaraanController.getallkendaraan)
router.post('/',  kendaraanController.insertkendaraan)
router.put('/:id', auth.islogIn, kendaraanController.updatekendaraan)
router.delete('/:id',  kendaraanController.deletekendaraan)
router.get('/:id', auth.islogIn, kendaraanController.getonekendaraan)

module.exports = router;
