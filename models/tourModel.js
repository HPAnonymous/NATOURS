const mongoose = require('mongoose');

const tourSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a tour have to a name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, ' a tour must have a price'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model('Tour', tourSchemas);

module.exports = Tour;
