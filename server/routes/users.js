const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.get('/', userController.findAllUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.findByIdUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.removeUsers)

module.exports = router;
