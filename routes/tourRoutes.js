/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monnthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id/:x?/:y?')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.delete);

module.exports = router;
