const db = require("../db");
const url = require('url');


const getSchedule = async (req, res, next) => {
    const queryObject = url.parse(req.url,true).query;
    const day = queryObject.eventDate
    try {
        const result = await fetchSchedule(day)
        res.status(200).send(result);

    } catch (error) {
        console.log(error);
    }
}

const getPastEvents = async (req, res, next) => {
    const queryObject = url.parse(req.url,true).query;
    const day = queryObject.eventDate
    const year = queryObject.eventYear
    try {
        const result = await fetchSchedule(day, year)
        res.status(200).send(result);

    } catch (error) {
        console.log(error);
    }
}

//
const getPerformers = async (req, res, next) => {
    try {
        const result = await fetchPerformers()
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }

}

//fetch Performers from database
const fetchPerformers = async () => {
    try {
       const query = `select fullname, performance, image from performers`;
       return await db.promise().query(query)
          .then( ([rows,fields]) => {
              return rows
          })
          .catch(
              console.log
          )

    } catch (error) {
        return error;
    }
}


//fetch schedule for conference from database by day
const fetchSchedule = async (day, year='2022') => {

    try {
        const query = `select Date(date) event_date, start_time, end_time, title, performer, type, channel            
            from schedule            
            where date = '${day}' 
            and date like '${year}%'
            order by start_time`;

            //console.log(query)

       return await db.promise().query(query)
          .then( ([rows,fields]) => {
              return rows
          })
          .catch(
              console.log
          )

    } catch (error) {
        return error;
    }
}

const fetchScheduleByYear = async (year='2022') => {

    try {
        const query = `select Date(date) event_date, start_time, end_time, title, performer, type, channel            
            from schedule            
            where date like '${year}%'
            order by Date(date)`;

        //console.log(query)

        return await db.promise().query(query)
            .then( ([rows,fields]) => {
                return rows
            })
            .catch(
                console.log
            )

    } catch (error) {
        return error;
    }
}

module.exports = {
    getSchedule,
    fetchScheduleByYear,
    getPastEvents,
    getPerformers,
    fetchPerformers,
    fetchSchedule
}