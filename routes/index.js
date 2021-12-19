const express = require('express');
const router = express.Router();
const scheduleController = require('../controller/schedule');
const utilsController = require('../controller/utils');

/* GET home page. */
router.get('/', async (req, res, next) => {

  let dayOne = '2022-07-30'
  const scheduleData = await scheduleController.fetchSchedule(dayOne)
  const performers = await scheduleController.fetchPerformers()

  //console.log(scheduleData)
  res.render('index', {
    title: 'Home',
    performers,
    scheduleData,
    formatTime:utilsController.formatTime
  });

});

module.exports = router;