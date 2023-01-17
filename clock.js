window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
 let date = new Date();
 
 //date.setTime(50000000); // Updates time manually

 // Gives current Hour
 let h = date.getHours();

 // Gives current Minute
 let m = date.getMinutes();

 // Gives current Second
 let s = date.getSeconds();

 let session = "AM";

 if (h == 0) {
  h = 12;
 }

 if (h > 12) {
  h = h - 12;
  session = "PM";
 }

 h = h < 10 ? (h = "0" + h) : h;
 m = m < 10 ? (m = "0" + m) : m;
 s = s < 10 ? (s = "0" + s) : s;

 // Displays Current time
 const time = `${h}:${m}<small>:${s}|${session}</small>`;
 document.getElementById("display-clock").innerHTML = time;
 // Updates time
 setTimeout(showTime, 1000);

 // Changes Background Image depending on time
 let bg;

 // Sets User Name
 const userName = "Maryanne";
 const user = document.getElementById("user");

 // Changes Early Morning Image
 if (h < 9 && session === "AM") {
  bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
  user.innerHTML = `Good Morning, ${userName}`;

  // Changes Day Image
 } else if (h < 11 && session === "AM") {
  bg = `url(https://source.unsplash.com/NGzW_tr_8YI)`;
  user.innerHTML = `Good Day, ${userName}`;

  // Changes Afternoon Image
 } else if (h < 8 && session === "PM") {
  bg = `url(https://source.unsplash.com/Cjz1UAz8VBs)`;
  user.innerHTML = `Good Afternoon, ${userName}`;

  // Changes Night Image
 } else {
  bg = `url(https://source.unsplash.com/ln5drpv_ImI)`;
  user.innerHTML = `Good Afternoon, ${userName}`;
 }

 // Insert Background Image
 const body = document.querySelector("body");

 body.style.background = `${bg} center/cover`;
}

// Activates input area pressing 'Enter' key
document.querySelector(".focus-container input").addEventListener("keypress", function (event) {
 if (event.key === "Enter") {
  const focus = document.querySelector(".focus-container input");

  // Displays inputed data
  document.querySelector(".focus-container").innerHTML = `<h6>Today:</h6></h1>${focus.value}</h1>`;
 }
});