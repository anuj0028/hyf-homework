//Smart phone usage app
let activities = [];
function addActivity(date, activity, duration) {
    activities.push({date: date, activity: activity, duration: duration,});
}
addActivity('23/7-18', 'Youtube', 30);
addActivity('24/7-18', 'Facebook', 40);
addActivity('25/7-18', 'Instagram', 20);
console.log(activities);

//Show my status
function showStatus() {
    let totalDuration = 0;
    let totalUsage = 100;
    for (let i = 0; i < activities.length; i++){
        totalDuration += activities[i].duration;
    if (activities.length <= 0) {
        return "Add some activities before calling showStatus"
    }
    else if (totalDuration >= totalUsage) {
        console.log("You have reached your limit, no more smartphoning for you!")
    }
    else if (i >= activities.length-1) {
    console.log( "You have added "+activities.length+" activities. They amount to "+totalDuration+" min. of usage")
    }
}
}
showStatus(activities);