function updateGreeting() {
    var id = window.localStorage.getItem("id") === "null" ? "" : window.localStorage.getItem("id");
	document.getElementById("greeting").innerHTML = currentGreeting() + id;
}

function currentGreeting() {
    var hours = new Date().getHours();
    var message;
    switch(true) {
        case (hours < 6):
            message = "Another late night, ";
            break;
        case (hours < 12):
            message = "Good morning, ";
            break;
        case (hours < 18):
            message = "Good afternoon, ";
            break;
        case (hours < 24):
            message = "Good evening, ";
            break;
    }
    return message;
}

function checkIdCache() {
    if(!window.localStorage.getItem("id")) {
        let id = prompt("What's your name?");
        window.localStorage.setItem("id", id);
    }
}
function getDateTime() {
    var dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    var date = new Date().toLocaleDateString('en-US', dateOptions);
    var time = new Date().toLocaleTimeString('en-US');

    document.getElementById("date").innerHTML = (date + " - " + time);
}

var dtInterval = setInterval(getDateTime, 1000);

window.onload = function() {
    getDateTime();
    checkIdCache();
    updateGreeting();
};