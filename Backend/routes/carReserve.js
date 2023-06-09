const express = require('express');

const { body } = require('express-validator');

const eventController = require ('../controllers/carReserve');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/:id', auth, eventController.fetchAll);

router.post(
    '/',
    [
      auth,
      body('userId').trim().isLength({ min: 1 }).not().isEmpty(),
      body('description').trim().isLength({ min: 1 }).not().isEmpty(),
      body('tripname').trim().isLength({ min: 1 }).not().isEmpty(),
      body('rentalinfo').trim().isLength({ min: 1 }).not().isEmpty(),
      body('pickup').trim().isLength({ min: 1 }).not().isEmpty(),
      body('returntime').trim().isLength({ min: 1 }).not().isEmpty(),
      body('cost').trim().isLength({ min: 1 }).not().isEmpty(),
    ],
    eventController.postCar
);

router.delete('/:id',auth,eventController.deleteCar)

module.exports = router;