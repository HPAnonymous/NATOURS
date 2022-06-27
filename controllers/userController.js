// const fs = require('fs');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
// );

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    status: 'Success',
    results: user.length,
    data: {
      user,
    },
  });
});

exports.createUser = (req, res) => {};

exports.getUser = (req, res) => {};
