//use fetch api to get day one program schedule from the database via ajax
const dayOne = document.getElementById('day-one-tab')
dayOne.addEventListener('click', async () => {
  const data = await fetchScheduleData('2022-07-30')
  await renderScheduleByDay(data)

})

//use fetch api to get day two program schedule from the database via ajax
const dayTwo = document.getElementById('day-two-tab')
dayTwo.addEventListener('click', async () => {
    const data = await fetchScheduleData('2022-07-31')
    await renderScheduleByDay(data)

})

//use fetch api to get day three program schedule from the database via ajax
const dayThree = document.getElementById('day-three-tab')
dayThree.addEventListener('click', async () => {
    const data = await fetchScheduleData('2022-08-01')
    await renderScheduleByDay(data)

})

const renderScheduleByDay = (scheduleData) => {
    let dayOneSchedule = document.querySelector('.tab-contents')
    dayOneSchedule.innerHTML = "";
    scheduleData.forEach(function (schedule) {

        const startTime = formatTime(schedule.start_time)
        const endTime = formatTime(schedule.end_time)

        const performer = (schedule.performer) ? `<h4 class=\"speaker-info\">By <span>${schedule.performer}</span> </h4>` : ''
        let newcontent = document.createElement('div');
        if(schedule.type == 'Break') {
            newcontent.innerHTML = `<div class="event__card break">
                <h4 class="time">${startTime} <span></span> - ${endTime} <span></span></h4>
                <h3 class="event__card-title">${schedule.title}</h3>            
                ${performer}           
            </div>`
        }else{
            newcontent.innerHTML = `<div class="event__card ">
                <h4 class="time">${startTime} <span></span> - ${endTime} <span></span></h4>
                <h3 class="event__card-title">${schedule.title}</h3>
                <em class="">${schedule.type}</em>
                 <em class="channel">Channel ${schedule.channel}</em>
                ${performer} 
            </div>`
        }
        dayOneSchedule.appendChild(newcontent)
    })
}
const fetchScheduleData = async (eventDate) => {

  const scheduleData = fetch(`http://localhost:3000/schedule?eventDate=${eventDate}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
          'Content-Type': 'application/json'
      },
  })
      .then(res=> res.json())
      .then(data => {

        if(data[0]){
              return data
        }
  })

  return scheduleData
}