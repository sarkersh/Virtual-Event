var express = require('express');
var router = express.Router();
const scheduleController = require('../controller/schedule');
const utilsController = require('../controller/utils');
const url = require("url");



router.get('/', scheduleController.getSchedule);

//router.get('/api/past-events', scheduleController.getPastEvents);
router.get('/past-events', async (req, res, next) => {


    const queryObject = url.parse(req.url,true).query;
    let year = queryObject.year
    console.log('THE YEAR IS::: ', [year, queryObject])

    //let {year} = req.body
    if(!year || year == undefined) year = '2022'
    const scheduleData = await scheduleController.fetchScheduleByYear(year)
    const performers = await scheduleController.fetchPerformers()

    //console.log(scheduleData)
    res.render('past-events', {
        title: 'Past Events',
        performers,
        scheduleData,
        selectedYear:year,
        formatTime: utilsController.formatTime
    });

});
module.exports = router;
