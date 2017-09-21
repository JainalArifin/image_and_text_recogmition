const express = require('express');
const router = express.Router();
const kendaraanController = require('../controller/kendaraanController');
const auth = require('../helper/jwt')

router.get('/', kendaraanController.getallkendaraan)
router.post('/', kendaraanController.insertkendaraan)
router.put('/:id', kendaraanController.updatekendaraan)
router.delete('/:id',kendaraanController.deletekendaraan)
router.get('/:id',kendaraanController.getonekendaraan)

module.exports = router;
