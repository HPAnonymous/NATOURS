const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/:id/:x?/:y?').get(userController.getUser);

module.exports = router;
