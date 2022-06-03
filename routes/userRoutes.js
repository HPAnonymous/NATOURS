const express = require('express');
const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    date: {
      users,
    },
  });
};

const createUser = (req, res) => {};
const getUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:id/:x?/:y?').get(getUser);

module.exports = router;
