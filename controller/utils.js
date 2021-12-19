
const formatTime2 = (time) => {
    return time.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
}

const formatTime = (time) => {

    //create a placeholder date part to pass to new Date object
    const fixedDatePart = '2021-12-12'
    return new Intl.DateTimeFormat('en-GB',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date(fixedDatePart + ' ' + time));

}

module.exports = {
    formatTime,
    formatTime2
}