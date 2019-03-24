function getEventWeekday(eventday) {
    var weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var today = new Date().getDay();
    var mainDate = (today+eventday)%7;
    return weekdays[mainDate];
}
console.log(getEventWeekday(7));