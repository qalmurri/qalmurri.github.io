var dt = new Date();
document.getElementById("date-time").innerHTML = dt;
$.getJSON("https://api.ipify.org?format=json", function (data) {
  $("#ip").html(data.ip);
});
let agent = navigator.userAgent;
document.getElementById("user").innerHTML = "" + agent;
let language = navigator.language;
document.getElementById("language").innerHTML = "" + language;
let platform = navigator.platform;
document.getElementById("platform").innerHTML = "" + platform;
