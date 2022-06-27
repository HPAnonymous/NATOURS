/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authControllers');

const router = express.Router();

router.post('/signup', authController.signup);

router.route('/').get(userController.getAllUsers);
router.route('/:id/:x?/:y?').get(userController.getUser);

module.exports = router;
