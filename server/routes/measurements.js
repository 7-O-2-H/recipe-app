const router = require('express').Router();
const { getAllMeasurements } = require('../db/queries/measurements');

// measurements
router.get('/', (req, res) => {
  getAllMeasurements()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;