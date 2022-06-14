const Tour = require(`./../models/tourModel`);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
  });
};

// exports.createTour = async (req, res) => {
//   const newTour = await Tour.create(req.body); //return promise
//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: newTour,
//     },
//   });
// };
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: 'success!',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail!',
      message: 'Invalid data sent!',
    });
  }
};

exports.getTour = (req, res) => {};
