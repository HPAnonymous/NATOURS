const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    date: {
      users,
    },
  });
};

exports.createUser = (req, res) => {};

exports.getUser = (req, res) => {};
